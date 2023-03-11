export default function Dice({size="100"}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <rect x="10" width="80" y="10" height="80" rx="5" ry="5" fill="black" />
        <circle cx="50" cy="50" r="8" fill="white" />
        <circle cx="27" cy="73" r="8" fill="white" />
        <circle cx="73" cy="27" r="8" fill="white" />
      </g>
    </svg> 
  )
}
