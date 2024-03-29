

export const FOOT_LEFT = 'l'
export const FOOT_RIGHT = 'r'

export default function Foot({size="100", direction=FOOT_LEFT, filled=false}) {
  return (
    <svg
      width={size}
      height={size}
      version="1.1" 
      viewBox="4 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:svg="http://www.w3.org/2000/svg"
      style={{backgroundColor: filled?"#6cb5a2":null}}>
      <g transform="translate(-16 -22)">
        <path d="m55.174 57.076-0.9876-5.2379 1.8368-2.0127 2.7944 3.8728 2.1025-1.9817-0.85527-5.4898 3.312-3.8381 0.73579 6.2099 2.522-1.3035 0.4481-5.7328 3.9509-2.9159-0.30282 5.8827 2.7677-0.12658 0.42574-5.872 4.066-2.7414 1.5741 2.4364-2.1718 3.1255 0.10706 1.6127 4.1248 1.3161 0.66147-6.0641 3.4427-5.2772 4.1947 1.0925 0.02662 5.6454-4.4298 6.5615-0.93499 8.5452-3.705 9.2617-9.1214 11.743-1.398 9.1303 4.9977 15.037-4.6139 10.267-8.065 3.2852-4.9633-2.1234-2.8488-6.8066 1.9659-10.092-1.3631-12.084-0.23569-3.5558-3.1523-13.463z" 
          fill={filled?"white":"#6cb5a2"}
          stroke={filled?"white":"#000"}
          strokeMiterlimit="2.4" 
          strokeWidth={filled?"1":"5.4"} 
          style={{paintOrder:'markers stroke fill'}}/>
      </g>
    </svg>
  )
}