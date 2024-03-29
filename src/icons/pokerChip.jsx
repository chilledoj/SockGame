export default function PokerChip({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g transform="rotate(10,50,50)">
    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
    <circle cx="50" cy="50" r="27" stroke="white" strokeWidth="1" fill="none" />
    <g>
      <circle cx="50" cy="12" r="3" stroke="none"  fill="white" />
      <circle cx="50" cy="88" r="3" stroke="none"  fill="white" />
      <circle cx="12" cy="50" r="3" stroke="none"  fill="white" />
      <circle cx="88" cy="50" r="3" stroke="none"  fill="white" />
      
      <circle cx="23.8" cy="26.7" r="3" stroke="none"  fill="white" />
      <circle cx="76.2" cy="26.7" r="3" stroke="none"  fill="white" />
      <circle cx="23.8" cy="76.7" r="3" stroke="none"  fill="white" />
      <circle cx="76.2" cy="76.7" r="3" stroke="none"  fill="white" />
    </g>
  </g>
</svg>
  )
}
