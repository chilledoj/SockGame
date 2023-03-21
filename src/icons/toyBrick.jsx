export default function ToyBrick({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g>
    
    <rect x="5" width="90" y="30" height="50" stroke="none" fill="black"/>
    <rect x="20" width="20" y="22" height="8" stroke="none" fill="black"/>
    <rect x="60" width="20" y="22" height="8" stroke="none" fill="black"/>
  </g>
</svg>
  )
}
