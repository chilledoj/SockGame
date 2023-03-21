export default function GolfTee({size="100"}) {
  return (
    <svg
      width={size}
      height={size}
      version="1.1" 
      viewBox="4 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <path d="M50,95 L 55,88 L 45,88 L 50,95" />
      <rect x="45" y="25" width="10" height="63" />
      <path d="M45,25 L38,21 L40,16 L60,16 L62,21 L55,25" />
    </svg> 
  )
}