export default function Marble({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g id="marble">
    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
    <path stroke="white" fill="white" d="M 10,47 Q 20 55 38 50 Q 70 20 90 53 Q 65 38 45 65 Q 17 65 10 47" />
  </g>
</svg>
  )
}
