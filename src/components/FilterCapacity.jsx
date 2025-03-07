import { ModifiedCheckBox } from './ModifiedCheckBox'

export function FilterCapacity({ data, actionFilterCapacity }) {
  return (
    <div className='flex flex-col gap-5'>
      <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
        CAPACITY
      </span>
      {data.map((capacityCar) => {
        return (
          <div key={capacityCar} className='flex gap-2'>
            {' '}
            <ModifiedCheckBox
              name={capacityCar}
              handleFilter={actionFilterCapacity}
            />
            <label
              className='text-slate-600 font-semibold
                     text-lg'
            >
              {capacityCar}
            </label>
          </div>
        )
      })}
    </div>
  )
}
