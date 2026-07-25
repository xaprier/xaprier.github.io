import { useEffect, useState } from 'react';
import siteConfig from '../site.config';

function randomCellClass(): string {
  const r = Math.random();
  if (r > 0.93) return 'l4';
  if (r > 0.82) return 'l3';
  if (r > 0.65) return 'l2';
  if (r > 0.45) return 'l1';
  return '';
}

export default function ContribGraph() {
  const { snakeRepo, outputBranch, snakeSvgPath, contributionsJsonPath } = siteConfig.contrib;
  const rawBase = `https://raw.githubusercontent.com/${snakeRepo}/${outputBranch}`;
  const snakeSrc = `${rawBase}/${snakeSvgPath}`;
  const contributionsUrl = `${rawBase}/${contributionsJsonPath}`;

  const [snakeFailed, setSnakeFailed] = useState(false);
  const [total, setTotal] = useState<number | null>(null);
  const [fallbackCells] = useState(() =>
    Array.from({ length: 53 * 7 }, () => randomCellClass()),
  );

  useEffect(() => {
    let cancelled = false;
    fetch(contributionsUrl)
      .then((r) => {
        if (!r.ok) throw new Error('bad status');
        return r.json();
      })
      .then((data) => {
        if (!cancelled && typeof data.total === 'number') setTotal(data.total);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [contributionsUrl]);

  return (
    <div className="blk">
      <div className="contrib-wrap">
        {!snakeFailed && (
          <img
            className="contrib-snake"
            src={snakeSrc}
            alt="Snake animation crawling across the contribution graph"
            onError={() => setSnakeFailed(true)}
          />
        )}
        {snakeFailed && (
          <div className="contrib-grid">
            {fallbackCells.map((cls, i) => (
              <div className={`cell${cls ? ' ' + cls : ''}`} key={i} />
            ))}
          </div>
        )}
      </div>
      {snakeFailed && (
        <div className="contrib-legend">
          <span>less</span>
          <div className="cell" />
          <div className="cell l1" />
          <div className="cell l2" />
          <div className="cell l3" />
          <div className="cell l4" />
          <span>more</span>
        </div>
      )}
      <div className="contrib-stat">
        <b>{total !== null ? total : '--'}</b> contributions in the last year
      </div>
    </div>
  );
}
