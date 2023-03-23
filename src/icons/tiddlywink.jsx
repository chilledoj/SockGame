export default function TiddlyWink({size="100"}){
  return (
<svg
  width={size}
  height={size}
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg">
  <g transformorigin="50,50" transform="scale(0.75,0.75) translate(14.25,14.25)">
    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="1" fill="black" />
    <circle cx="50" cy="50" r="31" stroke="white" strokeWidth="1.5" fill="none" />
  </g>
</svg>
  )
}
