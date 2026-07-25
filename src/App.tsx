import siteConfig from './site.config';
import TerminalWindow from './components/TerminalWindow';
import PromptLine from './components/PromptLine';
import Neofetch from './components/Neofetch';
import ContribGraph from './components/ContribGraph';
import ProjectList from './components/ProjectList';
import ContactJson from './components/ContactJson';

export default function App() {
  const { promptPath } = siteConfig;

  return (
    <div className="desktop">
      <TerminalWindow label="neofetch" className="win-neofetch">
        <PromptLine path={promptPath}>
          <span className="cmd">neofetch</span>
        </PromptLine>
        <Neofetch />
        <br/>
        <PromptLine path={promptPath}>
          <span className="cursor" />
        </PromptLine>
      </TerminalWindow>

      <TerminalWindow label="contact.json" className="win-contact">
        <PromptLine path={promptPath}>
          <span className="cmd">cat ./contact.json</span>
        </PromptLine>
        <ContactJson />
        <br/>
        <PromptLine path={promptPath}>
          <span className="cursor" />
        </PromptLine>
      </TerminalWindow>

      <TerminalWindow label={`contributions — ${siteConfig.contrib.githubUser}`} className="win-contributions">
        <PromptLine path={promptPath}>
          <span className="cmd">gh contributions --user {siteConfig.contrib.githubUser}</span>
        </PromptLine>
        <ContribGraph />
        <br/>
        <PromptLine path={promptPath}>
          <span className="cmd">ls -la ./projects</span>
        </PromptLine>
        <ProjectList />
        <br/>
        <PromptLine path={promptPath}>
          <span className="cursor" />
        </PromptLine>
      </TerminalWindow>
    </div>
  );
}
