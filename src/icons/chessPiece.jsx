export default function ChessPiece({size="100"}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <circle cx="50" cy="15" r="10"  fill="black" />
        <path fill="black" d="M 35 30 L 40 25 L 42 25 L 45 20 L 55 20 L 58 25 L 60 25 L 65 30"/>
        <rect x="35" width="30" y="30" height="17" fill="black"/>
        
        <rect x="45" width="10" y="47" height="31" fill="black" />
        <path fill="black" d="M 35,80 Q 50 20 65 80" />
        <path fill="black" d="M 30,82 L 27,80 L 30,78 L 70,78 L 73,80 L 70,82" />
        <path fill="black" d="M 25,90 L 30,82 L 70,82 L 75,90" />
        <rect x="25" width="50" y="90" height="5" fill="black"/>
      </g>
    </svg>
  )
}
