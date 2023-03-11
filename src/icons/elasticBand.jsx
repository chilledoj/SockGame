export default function ElasticBand({size="100"}) {
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g transform="rotate(-25,50,50)">
    <ellipse cx="50" cy="50" rx="47" ry="25" stroke="black" strokeWidth="7" fill="none" />
  </g>
</svg>
  )
}
