export default function DraughtPiece({size="100"}) {
  return (
    <svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g>
    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
    <circle cx="50" cy="50" r="36" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="50" cy="50" r="18" stroke="white" strokeWidth="1.5" fill="none" />
  </g>
</svg>
  )
}
