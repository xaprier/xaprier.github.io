import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';
import React from "react";
import { FaBuilding } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';


interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2`}
            >
              {
                <LazyImage
                  src={(profile.avatar && profile.avatar.length !== 0 ? profile.avatar : FALLBACK_IMAGE)}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          {profile && profile.nickname ? (
            <div className="text-center text-base-content text-opacity-50">
              {profile.nickname}
            </div>
          ) : (<div></div>)}
        </div>
        <div className="m-5 text-center text-base-content text-opacity-60 font-mono">
          {!loading && profile && profile.about && typeof profile.about !== "undefined" ?
            <div>{profile.about}</div> : <div></div>
          }
        </div>
        {!loading && profile && (profile.location || profile.company) && (
          <div className="flex gap-8 items-center">
            {profile.location && (
              <div className="flex gap-2 items-center text-center text-base-content text-opacity-70 font-mono">
                <MdLocationOn />
                {profile?.location}
              </div>
            )}
            {profile.company && (
              <div className="flex gap-2 items-center text-center text-base-content text-opacity-70 font-mono">
                <FaBuilding />
                {profile?.company}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarCard;
