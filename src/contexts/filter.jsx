import { createContext, useState } from 'react'

const FilterContext = createContext()

export function FilterProvider({ children }) {
  // Estados para cada uno de los filtros
  const [filterCategory, setFilterCategory] = useState([])
  const [filterCapacity, setFilterCapacity] = useState([])
  const [filterPrice, setFilterPrice] = useState(100)
  return (
    <FilterContext.Provider
      value={{
        filterCategory,
        setFilterCategory,
        filterCapacity,
        setFilterCapacity,
        filterPrice,
        setFilterPrice
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
