export default function LetterTile({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <style>
    {`.letter {
    font: 70px sans-serif;
    font-weight: 900;
    }`}
  </style>
  <g>
    
    <rect x="10" width="80" y="10" height="80" rx="8" ry="8" stroke="none" fill="black"/>
    <text x="25" y="76" fill="white" className="letter">A</text>
  </g>
</svg>
  )
}
