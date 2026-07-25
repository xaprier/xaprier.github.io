interface TerminalWindowProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ label, className, children }: TerminalWindowProps) {
  return (
    <div className={`window${className ? ' ' + className : ''}`}>
      <div className="titlebar">
        <div className="dot r" />
        <div className="dot y" />
        <div className="dot g" />
        <div className="titlebar-label">{label}</div>
      </div>
      <div className="term">{children}</div>
    </div>
  );
}
