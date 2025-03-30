import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import { useCar } from '../hooks/useCar'
import { useFilter } from '../hooks/useFilter'

const AllCars = lazy(() => import('../components/AllCars'))
const FilterType = lazy(() => import('../components/FilterType'))
const FilterCapacity = lazy(() => import('../components/FilterCapacity'))
const FilterPrice = lazy(() => import('../components/FilterPrice'))

// Mobile Filter Menu Component
function MobileFilterMenu({ 
  isOpen, 
  onToggle, 
  typeCars, 
  capacityCars, 
  filterPrice, 
  handleFilterCategory, 
  handleFilterCapacity, 
  handleFilterPrice 
}) {
  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <button 
        className='md:hidden fixed bottom-6 right-6 bg-[#3563E9] text-white p-3 rounded-full shadow-lg z-50'
        onClick={onToggle}
        aria-label="Toggle filters"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {/* Mobile Filter Panel Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onToggle}
      ></div>
      
      {/* Mobile Filter Panel */}
      <div 
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
          <button 
            onClick={onToggle}
            className="text-gray-500"
            aria-label="Close filters"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-6">
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
        </div>
        <button 
          className="w-full bg-[#3563E9] text-white py-3 rounded-lg mt-6 font-medium"
          onClick={onToggle}
        >
          Apply Filters
        </button>
      </div>
    </>
  );
}

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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

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

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen)
  }

  return (
    <section className='bg-gray-100 flex md:flex-row flex-col relative'>
      {/* Mobile Filter Menu Component */}
      <MobileFilterMenu 
        isOpen={isMobileFilterOpen}
        onToggle={toggleMobileFilter}
        typeCars={typeCars}
        capacityCars={capacityCars}
        filterPrice={filterPrice}
        handleFilterCategory={handleFilterCategory}
        handleFilterCapacity={handleFilterCapacity}
        handleFilterPrice={handleFilterPrice}
      />

      {/* Desktop Filter Panel */}
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
