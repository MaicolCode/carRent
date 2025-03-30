import { lazy, Suspense, useCallback, useEffect, useMemo } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import { useCar } from '../hooks/useCar'
import { useFilter } from '../hooks/useFilter'

const AllCars = lazy(() => import('../components/AllCars'))
const FilterType = lazy(() => import('../components/FilterType'))
const FilterCapacity = lazy(() => import('../components/FilterCapacity'))
const FilterPrice = lazy(() => import('../components/FilterPrice'))

export default function AllCarsPage() {
  const { cars, typeCars, capacityCars } = useCar()
  const {
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  } = useFilter(cars)

  // Filtro de los coches por categoría y capacidad
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      return (
        filterPrice >= car.price &&
        (filterCategory.length === 0 ||
          filterCategory.includes(car.category)) &&
        (filterCapacity.length === 0 || filterCapacity.includes(car.capacity))
      )
    })
  }, [cars, filterPrice, filterCategory, filterCapacity])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Controladores de eventos para los filtros

  const handleFilterCategory = useCallback(
    (e) => {
      const filterName = e.target.name || 'all'
      setFilterCategory((prev) =>
        prev.includes(filterName)
          ? prev.filter((item) => item !== filterName)
          : [...prev, filterName]
      )
    },
    [setFilterCategory]
  )

  const handleFilterCapacity = useCallback(
    (e) => {
      const filterName = e.target.name || 'all'
      setFilterCapacity((prev) =>
        prev.includes(filterName)
          ? prev.filter((item) => item !== filterName)
          : [...prev, filterName]
      )
    },
    [setFilterCapacity]
  )

  const handleFilterPrice = useCallback(
    (e) => {
      setFilterPrice(e.target.value)
    },
    [setFilterPrice]
  )

  return (
    <section className='bg-gray-100 flex md:flex-row flex-col'>
      <section className='hidden md:block bg-white w-[300px] px-5 py-7 flex-col gap-10'>
        <Suspense fallback={<p>Loading...</p>}>
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
        </Suspense>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<AllCars cars={filteredCars} />} />
        </Routes>
      </Suspense>
      <Outlet />
    </section>
  )
}

/* ;<Route path='/rent-car' element={<RentCarPage />} /> */
