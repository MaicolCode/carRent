import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { AllCars } from '../components/AllCars'
import { useCar } from '../hooks/useCar'
import { useFilter } from '../hooks/useFilter'
import { FilterType } from '../components/FilterType'
import { FilterCapacity } from '../components/FilterCapacity'
import { FilterPrice } from '../components/FilterPrice'

export default function AllCarsPage() {
  const { cars, typeCars, capacityCars } = useCar()
  const {
    filterCars,
    filterCarsCapacity,
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  } = useFilter(cars)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <FilterType
          data={typeCars}
          actionFilterCategory={handleFilterCategory}
        />
        <FilterCapacity
          data={capacityCars}
          actionFilterCapacity={handleFilterCapacity}
        />
        <FilterPrice
          price={filterPrice}
          actionFilterPrice={handleFilterPrice}
        />
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
