export default function Wheel() {
  return (
<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g transform="rotate(10,50,50)">
    <circle cx="50" cy="50" r="35" stroke="black" strokeWidth="20" fill="none" />
    <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="2" fill="none" />
    <path d="M 48,50 L 42,28 L 54,27 L 52,50" stroke="none" />
    <path d="M 48,50 L 42,28 L 54,27 L 52,50" stroke="none" transform="rotate(72,50,50)"/>
    <path d="M 48,50 L 42,28 L 54,27 L 52,50" stroke="none" transform="rotate(144,50,50)"/>
    <path d="M 48,50 L 42,28 L 54,27 L 52,50" stroke="none" transform="rotate(216,50,50)"/>
    <path d="M 48,50 L 42,28 L 54,27 L 52,50" stroke="none" transform="rotate(288,50,50)"/>
    <circle cx="50" cy="50" r="3" stroke="none" fill="white" />
  </g>
</svg>
  )
}
