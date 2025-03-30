import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Layer, PaintedLayer } from '../icons/CardCars'
import {
  BitCoin,
  Paypal,
  SecurePayment,
  VisaMasterCard
} from '../icons/PaymentMethods'
import { ModifiedCheckBox } from '../components/ModifiedCheckBox'

export default function RentCarPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { car } = location.state || {}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!car) navigate('/cars')
  }, [car, navigate])

  const arr = Array.from({ length: 5 })
  const layers = arr.map((_, index) => {
    return index <= car?.stars_count ? (
      <PaintedLayer key={index} />
    ) : (
      <Layer key={index} />
    )
  })

  return (
    <section className='w-full h-full p-4 md:p-8 flex flex-col-reverse md:flex-row gap-7 border bg-gray-100 bg-opacity-60'>
      <form className='w-full flex flex-col gap-7'>
        <article className='bg-white p-6 rounded-md text-xs text-slate-400'>
          <div className='w-full'>
            <span className='text-lg font-bold text-black'>Billing Info</span>
            <div className='flex justify-between items-center'>
              <p>Please enter your billing info</p>
              <span>Step 1 of 4</span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Name
              </label>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Phone Number
              </label>
              <input
                type='text'
                placeholder='Phone Number'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Address
              </label>
              <input
                type='text'
                placeholder='Address'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Town / City
              </label>
              <input
                type='text'
                placeholder='Town or City'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
          </div>
        </article>
        <article className='bg-white p-6 rounded-md text-xs text-slate-400'>
          <div className='w-full'>
            <span className='text-lg font-bold text-black'>Rental Info</span>
            <div className='flex justify-between items-center'>
              <p>Please select your rental info</p>
              <span>Step 2 of 4</span>
            </div>
          </div>

          <div className='flex items-center gap-3 my-5'>
            <span
              className={`w-[15px] h-[15px] rounded-full bg-[#3563E9] bg-opacity-40 flex justify-center items-center animate-pulse`}
            >
              <span
                className={`w-[7px] h-[7px] rounded-full bg-[#3563E9] `}
              ></span>
            </span>
            <h2 className='font-medium text-sm'>Pick - Up</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Locations
              </label>
              <input
                type='text'
                placeholder='Select your city'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Date
              </label>
              <input
                type='text'
                placeholder='Select your date'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Time
              </label>
              <input
                type='text'
                placeholder='Select your time'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
          </div>
          <div className='flex items-center gap-3 my-5'>
            <span
              className={`w-[15px] h-[15px] rounded-full bg-[#54A6FF] bg-opacity-40 flex justify-center items-center animate-pulse`}
            >
              <span
                className={`w-[7px] h-[7px] rounded-full bg-[#54A6FF] `}
              ></span>
            </span>
            <h2 className='font-medium text-sm'>Drop - Off</h2>
          </div>

          <div className='grid grid-cols-1  md:grid-cols-2 gap-7 mt-5'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Locations
              </label>
              <input
                type='text'
                placeholder='Select your city'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Date
              </label>
              <input
                type='text'
                placeholder='Select your date'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor='' className='font-bold text-black text-sm'>
                Time
              </label>
              <input
                type='text'
                placeholder='Select your time'
                className='w-full p-4 rounded-md bg-gray-100 '
              />
            </div>
          </div>
        </article>
        <article className='bg-white p-6 rounded-md text-xs text-slate-400'>
          <div className='w-full'>
            <span className='text-lg font-bold text-black'>Payment Method</span>
            <div className='flex justify-between items-center'>
              <p>Please enter your payment method</p>
              <span>Step 3 of 4</span>
            </div>
          </div>
          <div className='flex flex-col gap-5 bg-gray-100 bg-opacity-50 rounded-lg p-4 mt-5'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <span
                  className={`w-[15px] h-[15px] rounded-full bg-[#3563E9] bg-opacity-40 flex justify-center items-center animate-pulse`}
                >
                  <span
                    className={`w-[7px] h-[7px] rounded-full bg-[#3563E9] `}
                  ></span>
                </span>
                <h2 className='font-medium text-sm'>Credit Card</h2>
              </div>
              <VisaMasterCard />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
              <div className='flex flex-col gap-3'>
                <label htmlFor='' className='font-bold text-black text-sm'>
                  Card Number
                </label>
                <input
                  type='text'
                  placeholder='Card Number'
                  className='w-full p-4 rounded-md bg-white '
                />
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='' className='font-bold text-black text-sm'>
                  Expiration Date
                </label>
                <input
                  type='text'
                  placeholder='Select your time'
                  className='w-full p-4 rounded-md bg-white '
                />
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='' className='font-bold text-black text-sm'>
                  Card Holder
                </label>
                <input
                  type='text'
                  placeholder='Credit Holder'
                  className='w-full p-4 rounded-md bg-white '
                />
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='' className='font-bold text-black text-sm'>
                  CVC
                </label>
                <input
                  type='text'
                  placeholder='CVC'
                  className='w-full p-4 rounded-md bg-white'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center bg-gray-100 bg-opacity-50 rounded-lg p-4 mt-5'>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                name='payment'
                id='paypal'
                className='w-4 h-4 text-[#3563E9] bg-black'
              />
              <label htmlFor='paypal'>Paypal</label>
            </div>
            <Paypal />
          </div>
          <div className='flex justify-between items-center bg-gray-100 bg-opacity-50 rounded-lg p-4 mt-5'>
            <div className='flex gap-2 justify-center items-center'>
              <input
                type='radio'
                name='payment'
                id='bitcoin'
                className='w-4 h-4'
              />
              <label htmlFor='bitcoin'>Bitcoin</label>
            </div>
            <BitCoin />
          </div>
        </article>
        <article className='bg-white p-6 rounded-md text-xs text-slate-400'>
          <div className='w-full'>
            <span className='text-lg font-bold text-black'>Confirmation</span>
            <div className='flex justify-between items-center'>
              <p>
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
              <span>Step 4 of 4</span>
            </div>
          </div>
          <div className='flex items-center bg-gray-100 bg-opacity-50 rounded-lg p-4 mt-5'>
            <div className='flex gap-5 justify-center items-center'>
              <ModifiedCheckBox
                name='newsletters'
                handleFilter={() => console.log()}
              />
              <label
                htmlFor='newsletters'
                className='text-sm text-black font-semibold'
              >
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </label>
            </div>
          </div>
          <div className='flex items-center bg-gray-100 bg-opacity-50 rounded-lg p-4 mt-5'>
            <div className='flex gap-5 justify-center items-center'>
              <ModifiedCheckBox
                name='terms'
                handleFilter={() => console.log()}
              />
              <label
                htmlFor='terms'
                className='text-sm text-black font-semibold'
              >
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='bg-[#3563E9] text-white text-sm my-5 font-medium  flex justify-center items-center rounded-[5px] w-[130px] h-[50px] hover:bg-opacity-90 transition-all'
          >
            Rent Now
          </button>
          <div className='flex flex-col gap-2 mt-10 md:mt-0'>
            <SecurePayment />
            <span className='text-sm text-black font-semibold'>
              All your data are safe
            </span>
            <span>
              We are using the most advanced security to provide you the best
              experience ever.
            </span>
          </div>
        </article>
      </form>
      <InfoCarRent car={car} layers={layers} />
    </section>
  )
}

export function InfoCarRent({ car, layers }) {
  return (
    <section className='w-full md:w-[55%] h-[490px] p-5 bg-white text-sm  flex flex-col gap-4 text-slate-400 rounded-md'>
      <div>
        <h3 className='text-lg font-bold text-black '>Rental Summary</h3>
        <p className='mt-1 text-xs'>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>
      <aside className='flex gap-4 items-center mt-4'>
        <div className='w-[130px] h-[100px] rounded-lg bg-[#3563E9] flex justify-center items-center'>
          <img
            src={`https://morent-website.vercel.app/${car?.image}`}
            width={110}
            alt={car?.name}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold text-black'>{car?.name}</h2>
          <div className='flex gap-2 items-center'>
            <div className='flex gap-1'>{layers}</div>
            <span className='text-xs'>{car?.reviews}+Reviewer</span>
          </div>
        </div>
      </aside>
      <hr className='my-2 border-slate-100' />
      <aside className='flex gap-2 justify-between items-center'>
        <span>Subtotal</span>
        <span className='font-semibold text-black'>$ {car?.price}.00</span>
      </aside>
      <aside className='flex gap-2 justify-between items-center'>
        <span>Tax</span>
        <span className='font-semibold text-black'>$ 0</span>
      </aside>
      <div className='flex gap-2 justify-between items-center my-3 bg-gray-100 bg-opacity-50 rounded-lg p-4'>
        <span className='text-xs'>Apply Promo Code</span>
        <Link className='font-semibold text-black'>Apply Now</Link>
      </div>
      <div className='flex gap-2 justify-between items-center'>
        <div>
          <h2 className='text-lg font-bold text-black'>Total Rental Price</h2>
          <p className='text-slate-400 text-xs'>
            Overall price and includes rental discount
          </p>
        </div>
        <strong className='text-3xl font-semibold text-black'>
          ${car?.price}.00
        </strong>
      </div>
    </section>
  )
}
