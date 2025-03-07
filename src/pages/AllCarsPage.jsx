import { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ModifiedCheckBox } from '../components/ModifiedCheckBox'
import { AllCars } from '../components/AllCars'
import { useCar } from '../hooks/useCar'

export default function AllCarsPage() {
  const { cars, typeCars, capacityCars } = useCar()

  // Estados para cada uno de los filtros
  const [filterCategory, setFilterCategory] = useState([])
  const [filterCapacity, setFilterCapacity] = useState([])
  const [filterPrice, setFilterPrice] = useState(100)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filtro de los coches por categoría y capacidad

  const filterCars = cars.filter((car) => {
    return (
      filterPrice >= car.price &&
      (filterCategory.length === 0 || filterCategory.includes(car.category))
    )
  })

  const filterCarsCapacity = filterCars.filter((car) => {
    return filterCapacity.includes(car.capacity)
  })

  // Controladores de eventos para los filtros

  const handleFilterCategory = (e) => {
    const filterName = e.target.name ? e.target.name : 'all'

    if (filterCategory.includes(filterName)) {
      setFilterCategory(filterCategory.filter((item) => item !== filterName))
    } else {
      setFilterCategory((prevState) => [...prevState, filterName])
    }
  }

  const handleFilterCapacity = (e) => {
    const filterName = e.target.name ? e.target.name : 'all'

    if (filterCapacity.includes(filterName)) {
      setFilterCapacity(filterCapacity.filter((item) => item !== filterName))
    } else {
      setFilterCapacity((prevState) => [...prevState, filterName])
    }
  }

  const handleFilterPrice = (e) => {
    setFilterPrice(e.target.value)
  }

  return (
    <section className='bg-gray-100 flex'>
      <section className='bg-white w-[25%] px-5 py-7 flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            TYPE
          </span>
          {typeCars.map((typeCar) => {
            return (
              <div key={typeCar} className='flex gap-2'>
                {' '}
                <ModifiedCheckBox
                  name={typeCar}
                  handleFilter={handleFilterCategory}
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
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            CAPACITY
          </span>
          {capacityCars.map((capacityCar) => {
            return (
              <div key={capacityCar} className='flex gap-2'>
                {' '}
                <ModifiedCheckBox
                  name={capacityCar}
                  handleFilter={handleFilterCapacity}
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
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            PRICE
          </span>
          <div className='flex flex-col gap-2'>
            <input
              type='range'
              min={0}
              max={100}
              value={filterPrice}
              onChange={handleFilterPrice}
            />
            <label
              className='text-slate-600 font-semibold
             text-lg'
            >
              Max. ${filterPrice}.00
            </label>
          </div>
        </div>
      </section>
      <Routes>
        <Route
          index
          element={
            <AllCars
              cars={filterCapacity.length > 0 ? filterCarsCapacity : filterCars}
            />
          }
        />
      </Routes>
      <Outlet />
    </section>
  )
}

/* ;<Route path='/rent-car' element={<RentCarPage />} /> */
