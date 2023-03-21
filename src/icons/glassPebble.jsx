

export default function GlassPebble({size="100"}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <g transform="scale(0.98,0.65) translate(0,10)">
        <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
        <circle cx="53" cy="13" r="3.5" stroke="none" fill="white" />
        <polyline points="68,17 73,20 79,25 82,30 85,37"
                  style={{fill:'none' ,stroke:'white', strokeWidth:5}} strokeLinecap="round"/>
      </g>
    </svg>
  )
}