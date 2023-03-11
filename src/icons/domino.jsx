export default function Domino({size="100"}) {
   return (
   <svg width={size} height={size} viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg" >
      <g transform="rotate(-30,50,50)">
         <rect x="10" width="80" y="30" height="40" rx="5" ry="5" fill="black" />
         <line x1="50" y1="34" x2="50" y2="66" stroke="white" strokeLinecap="round" strokeWidth="2"/>
         <circle cx="40" cy="40" r="4" fill="white" />
         <circle cx="40" cy="50" r="4" fill="white" />
         <circle cx="40" cy="60" r="4" fill="white" />
         
         <circle cx="20" cy="40" r="4" fill="white" />
         <circle cx="20" cy="50" r="4" fill="white" />
         <circle cx="20" cy="60" r="4" fill="white" />
         
         <circle cx="80" cy="40" r="4" fill="white" />
         <circle cx="80" cy="60" r="4" fill="white" />
         <circle cx="70" cy="50" r="4" fill="white" />
         <circle cx="60" cy="40" r="4" fill="white" />
         <circle cx="60" cy="60" r="4" fill="white" />
      </g>
   </svg> 
   )
}
