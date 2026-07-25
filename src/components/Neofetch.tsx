import siteConfig from '../site.config';

// const LOGO = `
//       /\\
//      /  \\
//     /----\\
//    /  ()  \\
//   /--------\\
//  /  |    |  \\
// /___|____|___\\
//     |    |
//     '----'`;

export default function Neofetch() {
  const { user, rule, rows, swatchColors } = siteConfig.neofetch;
  return (
    <div className="blk neofetch">
      {/* <div className="nf-logo">{LOGO}</div> */}
      <div className="nf-info">
        <div className="who">{user}</div>
        <div className="rule">{rule}</div>
        {rows.map((row) => (
          <div className="nf-row" key={row.key}>
            <span className="nf-key">{row.key}</span>
            <span className="nf-val">{row.value}</span>
          </div>
        ))}
        <div className="nf-swatches">
          {swatchColors.map((color) => (
            <div className="nf-sw" style={{ background: `var(${color})` }} key={color} />
          ))}
        </div>
      </div>
    </div>
  );
}
