export function FilterPrice({ price, actionFilterPrice }) {
  return (
    <div className='flex flex-col gap-5'>
      <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
        PRICE
      </span>
      <div className='flex flex-col gap-2'>
        <input
          type='range'
          min={0}
          max={100}
          value={price}
          onChange={actionFilterPrice}
        />
        <label
          className='text-slate-600 font-semibold
             text-lg'
        >
          Max. ${price}.00
        </label>
      </div>
    </div>
  )
}
