export default function Hairband({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g transform="rotate(10,50,50)">
    <ellipse cx="50" cy="50" rx="47" ry="40" stroke="black" strokeWidth="5" fill="none" />
    <rect x="38" width="24" y="84" height="10" stroke="white" strokeWidth="1" fill="black"/>
  </g>
</svg>
  )
}
