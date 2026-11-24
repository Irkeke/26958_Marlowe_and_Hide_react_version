// A hang-tag monogram: a loop (the tag's hole), a tag body, a stitched inner
// edge, and "MH" lettered into the leather — a small, legible logo built
// from the workshop's own vocabulary instead of a generic bag icon.
export default function BrandMark({ dark = false }) {
  const ring = dark ? '#EADFC2' : '#4E2F1B';
  const body = dark ? '#A9803F' : '#6E4429';
  const stitch = dark ? '#EADFC2' : '#4E2F1B';
  const letters = dark ? '#241811' : '#F1E8D8';

  return (
    <svg className="brand-mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="7" r="3" fill="none" stroke={ring} strokeWidth="2" />
      <line x1="20" y1="10" x2="20" y2="13" stroke={ring} strokeWidth="1.6" />
      <rect x="8" y="13" width="24" height="23" rx="3" fill={body} />
      <rect x="11" y="16" width="18" height="17" rx="1.5" fill="none" stroke={stitch} strokeWidth="1" strokeDasharray="2 2.2" opacity={dark ? 0.5 : 0.55} />
      <text x="20" y="29" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontWeight="700" fontSize="13.5" letterSpacing="-0.5" fill={letters}>MH</text>
    </svg>
  );
}
