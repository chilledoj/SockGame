

export default function SpinItem({item,size, ...rest}) {
  let txtClass = 'sm'
  if(size>400 && size<=800){
    txtClass='md'
  }else if (size>800){
    txtClass='lg'
  }
  console.log(size,txtClass)
  if(!item) return null
  return (
    <div className="spin-item" {...rest}>
      <p className={`text ${txtClass}`}>{item.txt}</p>
      <div className="icon">{item.icon.cmp(size)}</div>
    </div>
  )
} 