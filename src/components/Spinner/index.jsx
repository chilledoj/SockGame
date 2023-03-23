import { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle, forwardRef } from "react";
import debounce from "./debounce";
import shuffle from "./shuffle";

import "./spin.css";

const randomItem = (items) => {
  let idx = 0 | (Math.random() * items.length);
  return items[idx];
};

const DefaultSpinItem = ({item, size, ...props}) => (
  <div className="spin-item" {...props}>{JSON.stringify(item)}</div>
)


const Spinner = ({ 
  items, 
  onSelect = (item) => console.log(item), 
  horizontal = false, 
  transitionPeriod = 8,
  randomFn = randomItem, 
  renderItem = DefaultSpinItem }, 
  extTriggerRef) => {
  const wrapperRef = useRef(null);
  const dummyRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinList, setSpinList] = useState([]);
  const [size, setSize] = useState(200);
  const [isSpinning, setIsSpinning] = useState(false);

  const calcSize = () => {
    const { width, height } = wrapperRef.current.getBoundingClientRect();

    setSize(Math.min(width, height));
  };

  const animTime = Math.max(transitionPeriod, 2);

  useLayoutEffect(() => {
    calcSize();
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      calcSize();
    }, 200);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    if (spinList.length === 0) {
      setSpinList([items[0]]);
    }
  }, [items, spinList]);

  const handleClick = (e) => {
    e.preventDefault();
    startSpin()
    return false;
  }

  const startSpin = (delay) => {
    if (isSpinning) return false;

    const item = randomFn(items);

    const mixedItems1 = shuffle([...items])
    const mixedItems2 = shuffle([...items])

    let newList = [spinList[spinList.length-1], ...mixedItems1, ...mixedItems2, item];
    
    if(delay > 0){
      setTimeout(()=>{
        setIsSpinning(true);
        setSpinList(newList);
        setSelectedItem(item);
      }, delay)  
    }else{
      setIsSpinning(true);
      setSpinList(newList);
      setSelectedItem(item);

    }

    
  };

  useImperativeHandle(
    extTriggerRef || dummyRef,
    () => ({
      spin: (d)=>startSpin(d)
    })
  )

  const onAnimEnd = () => {
    setTimeout(() => {
      setSpinList([selectedItem]);
      setIsSpinning(false);
      onSelect({ ...selectedItem });
    }, 200);
  };
  const direction = horizontal?'right':'bottom'

  return (
    <div className="spin-container"  ref={wrapperRef}>
      <style scoped>
        {`.spin-view {
            --box-width: ${size}px;
            --box-height: ${size}px;
            --anim-time: ${animTime}s;
            --spin-direction: ${direction};
            --spin-flex-direction: ${horizontal?'row':'column'}; 
        }
        `}
      </style>
      <div className="spin-view" onClick={extTriggerRef?null:handleClick} ref={extTriggerRef}>
        <div
          style={{
            [direction]: isSpinning ? (spinList.length -1) * size + "px":"0"
          }}
          className={`spin-list ${isSpinning ? "spinning" : ""}`}
          onTransitionEnd={onAnimEnd}
         
        >
          {spinList &&
            spinList.map((item, idx) => renderItem({key: idx , item: item, size: size }))
          }
        </div>
      </div>
    </div>
  );
};
export default forwardRef(Spinner);
