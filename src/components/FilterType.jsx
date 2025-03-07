import { ModifiedCheckBox } from './ModifiedCheckBox'

export function FilterType({ data, actionFilterCategory }) {
  return (
    <div className='flex flex-col gap-5'>
      <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
        TYPE
      </span>
      {data.map((typeCar) => {
        return (
          <div key={typeCar} className='flex gap-2'>
            {' '}
            <ModifiedCheckBox
              name={typeCar}
              handleFilter={actionFilterCategory}
            />
            <label
              className='text-slate-600 font-semibold
                     text-lg'
            >
              {typeCar}
            </label>
          </div>
        )
      })}
    </div>
  )
}
