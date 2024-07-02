import { useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import AvatarCard from './avatar-card';
import { Profile } from "../interfaces/profile";
import DetailsCard from "./details-card";
import ThemeChanger from './theme-changer';
import ErrorPage from './error-page';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from '../constants';
import Footer from './footer';

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setProfile(sanitizedConfig.profile);
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      loadData();
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <div className={`p-4 lg:p-10 min-h-full ${BG_COLOR}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-box h-full">
                <div className="col-span-1 h-full">
                  <div className="grid grid-cols-1 gap-6 h-full">
                    { /** sol taraf */}
                    {!sanitizedConfig.themeConfig.disableSwitch && (
                      <ThemeChanger
                        theme={theme}
                        setTheme={setTheme}
                        loading={loading}
                        themeConfig={sanitizedConfig.themeConfig}
                      />
                    )}
                    <AvatarCard
                      profile={profile}
                      loading={loading}
                    />
                  </div>
                </div>
                <div className="lg:col-span-1 col-span-1 h-full">
                  <div className="grid grid-cols-1 gap-6 h-full">
                    { /** sağ taraf */}
                    <DetailsCard
                      profile={profile}
                      loading={loading}
                      social={sanitizedConfig.social}
                    />
                  </div>
                </div>
              </div>
            </div>
            {sanitizedConfig.footer && (
              <footer
                className={`p-4 footer ${BG_COLOR} text-base-content footer-center`}
              >
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
