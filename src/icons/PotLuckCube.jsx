
const PotLuckCube = ({color = "white"}) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      style={{background: 'black' }}>
      <g>
      <path d="M 10 30 L 49 50 L 49 90 L 10 70" fill={color} />
      <path d="M 90 30 L 51 50 L 51 90 L 90 70" fill={color} />
      <path d="M 10 29 L 50 49 L 90 29 L 50 8" fill={color} />
      </g>
    </svg>
  )
}

export default PotLuckCube