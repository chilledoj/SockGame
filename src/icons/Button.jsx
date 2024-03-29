export default function Button({size="100"}) {
  return (
    <svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g >
    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
    <circle cx="50" cy="50" r="43" stroke="white" strokeWidth="1.5" fill="none" />
    <g transform="rotate(15,50,50)">
      <circle cx="50" cy="40" r="4" stroke="none" fill="white" />
      <circle cx="50" cy="60" r="4" stroke="none" fill="white" />
      <circle cx="40" cy="50" r="4" stroke="none" fill="white" />
      <circle cx="60" cy="50" r="4" stroke="none" fill="white" />
    </g>
  </g>
</svg>
  )
}
