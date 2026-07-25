import siteConfig from '../site.config';

export default function ContactJson() {
  const rows = siteConfig.contact;
  return (
    <div className="blk">
      <div className="json">
        <div className="json-brace">{'{'}</div>
        {rows.map((row, i) => (
          <div className="json-row" key={row.key}>
            <span className="json-key">"{row.key}"</span>
            <span className="json-punct">: </span>
            {row.href ? (
              <a className="json-val json-link" href={row.href}>
                "{row.value}"
              </a>
            ) : (
              <span className="json-val">"{row.value}"</span>
            )}
            {i < rows.length - 1 && <span className="json-punct">,</span>}
          </div>
        ))}
        <div className="json-brace">{'}'}</div>
      </div>
    </div>
  );
}
