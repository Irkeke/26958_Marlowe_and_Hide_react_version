const timeline = [
  ['2011', 'Founded as a two-person cutting table making custom totes for a single boutique in Nairobi.'],
  ['2015', 'Added the crossbody line and hired the first dedicated stitching team.'],
  ['2019', 'Moved into Workshop No. 4, with separate cutting, stitching, and finishing stations.'],
  ['2023', 'Introduced the structured clutch line and a formal quality-check stage before packing.'],
  ['2026', 'Replaced the paper production ledger with this internal management portal.'],
];

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="hero-eyebrow">About the workshop</div>
          <h1>Fifteen years of small batches</h1>
          <p className="lede" style={{ maxWidth: '68ch' }}>Marlowe &amp; Hide started as two cutting tables and a single stitching machine. It's grown into a workshop of nineteen makers — but the batches are still small on purpose.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <h2>What we make</h2>
              <p>We manufacture full-grain leather handbags across three lines — everyday totes, crossbody bags, and structured clutches — sold to independent boutiques and through a small made-to-order counter at the workshop itself. Every hide is inspected by hand before it's cut, and every finished bag carries the initials of the maker who closed its final seam.</p>
              <p>This management portal exists because that hand-made process still needs coordinating: someone has to know which hides are left, which orders are due Friday, and which station a given bag is sitting at right now.</p>
              <div className="stat-row">
                <div className="stat"><span className="num">19</span><span className="label">Makers on the floor</span></div>
                <div className="stat"><span className="num">3</span><span className="label">Product lines</span></div>
                <div className="stat"><span className="num">~40</span><span className="label">Bags finished weekly</span></div>
              </div>
            </div>
            <div>
              <div className="mv-card"><h3>Mission</h3><p>To manufacture leather goods that are built to be repaired rather than replaced, made in batches small enough that every maker's craft is still visible in the finished piece.</p></div>
              <div className="mv-card"><h3>Vision</h3><p>A workshop where growth never outpaces craft — where the systems we use to track materials and orders stay as considered as the bags themselves.</p></div>
              <div className="mv-card"><h3>Values</h3><p>Material honesty, fair pay per piece, and a paper trail — now a digital one — that any maker on the floor can read at a glance.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <div className="section-head"><h2>How the workshop got here</h2></div>
          <ul className="timeline">
            {timeline.map(([yr, text]) => (
              <li key={yr}><span className="yr">{yr}</span><p>{text}</p></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
