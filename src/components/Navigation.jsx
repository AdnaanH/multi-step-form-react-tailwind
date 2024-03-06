import backgroundDesktop from '../assets/bg-sidebar-desktop.svg'

function Navigation() {
  return (
    <div className="flex flex-col p- gap-3 items-start justify-start w-full h-full rounded-md bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundDesktop})` }}>
                  <div className="flex gap-4 justify-start items-center">
                      <strong className='w-8 h-8 rounded-full text-center text-black flex items-center justify-center bg-FlightBlue border-FlightBlue'>1</strong>
                      <div className="flex justify-center items-start gap-0 flex-col">
                          <h1 className='font-semibold text-base text-FlightGray'>STEP 1</h1>
                          <h2 className='text-white font-bold text-base'>YOUR INFO</h2>
                      </div>
                  </div>
                  <div className="flex gap-4 justify-start items-center">
                      <strong className='w-8 h-8 rounded-full text-center text-black flex items-center justify-center border border-FlightBlue'>2</strong>
                      <div className="flex justify-center items-start gap-0 flex-col">
                          <h1 className='font-semibold text-base text-FlightGray'>STEP 2</h1>
                          <h2 className='text-white font-bold text-base'>SELECT PLAN</h2>
                      </div>
                  </div>
                  <div className="flex gap-4 justify-start items-center">
                      <strong className='w-8 h-8 rounded-full text-center text-black flex items-center justify-center border border-FlightBlue'>3</strong>
                      <div className="flex justify-center items-start gap-0 flex-col">
                          <h1 className='font-semibold text-base text-FlightGray'>STEP 3</h1>
                          <h2 className='text-white font-bold text-base'>ADD-ONS</h2>
                      </div>
                  </div>
                  <div className="flex gap-4 justify-start items-center">
                      <strong className='w-8 h-8 rounded-full text-center text-black flex items-center justify-center border border-FlightBlue'>4</strong>
                      <div className="flex justify-center items-start gap-0 flex-col">
                          <h1 className='font-semibold text-base text-FlightGray'>STEP 4</h1>
                          <h2 className='text-white font-bold text-base'>SUMMARY</h2>
                      </div>
                  </div>
            </div>
  )
}

export default Navigation
