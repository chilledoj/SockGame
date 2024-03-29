export default function WoodenPawn({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g>
    <circle cx="50" cy="25" r="15"  fill="black" />
    <rect x="20" width="60" y="85" height="5" fill="black"/>
    <path fill="black" d="M 20,85 L 30,78 L 70,78 L 80,85" />
    <path fill="black" d="M 33,78 Q 50 -5 67 78" />
  </g>
</svg>
  )
}
