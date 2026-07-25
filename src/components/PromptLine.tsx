interface PromptLineProps {
  path: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function PromptLine({ path, children, className, style }: PromptLineProps) {
  return (
    <div className={`line${className ? ' ' + className : ''}`} style={style}>
      <span className="prompt">
        <span className="path">{path}</span> <span className="sym">❯</span>
      </span>{' '}
      {children}
    </div>
  );
}
