import { useCar } from '../hooks/useCar'
import CardCarPresentation from './CardCar'

export function PopularCars() {
  const { cars, navigateToCar } = useCar()

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-7 mb-10 place-items-center'>
      {cars.map((car) => {
        {
          return car.popular_car ? (
            <CardCarPresentation
              key={car.id}
              car={car}
              actionClick={navigateToCar}
            />
          ) : null
        }
      })}
    </div>
  )
}
