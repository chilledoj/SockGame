export default function Plectrum({size="100"}) {
  return(
    <svg width={size} height={size}>
      <g transform="translate(0,10)">
        <path d="M 10 30 Q 6,25 5,20 C 5 -4 95 -4 95 20 Q 94,25 90,30 C 45 100 55 100 10 30" />
      </g>
    </svg>
  )
}