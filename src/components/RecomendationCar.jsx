import { useCar } from '../hooks/useCar'
import CardCarPresentation from './CardCar'

export function RecomendationCar() {
  const { cars, navigateToCar } = useCar()

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-7 mb-10 place-items-center'>
      {cars.map((car) => {
        return (
          <CardCarPresentation
            key={car.id}
            car={car}
            actionClick={navigateToCar}
          />
        )
      })}
    </div>
  )
}
