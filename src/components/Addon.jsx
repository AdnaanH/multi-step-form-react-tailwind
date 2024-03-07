import {Checkbox} from 'flowbite-react'


function Addon() {
  return (
    <div className="flex flex-col w-full gap-4 my-6">
        <div className="flex justify-between items-center cursor-pointer bg-Fmagnolia border-2 border-FlightGray p-2 rounded-md">
            <Checkbox id="accept" defaultChecked />
            <div className="flex flex-col w-4/6">
                <h5 className='font-bold text-FmarineBlue text-base'>Online service</h5>
                <p className='font-semibold text-base text-FcoolGray'>Access to multiplayer games</p>
            </div>
            <span className='w-1/6 text-FpurplishBlue font-semibold text-base'>+$10/yr</span>
        </div>
        <div className="flex justify-between items-center cursor-pointer bg-Fmagnolia border-2 border-FlightGray p-2 rounded-md">
            <Checkbox id="accept" defaultChecked />
            <div className="flex flex-col w-4/6">
                <h5 className='font-bold text-FmarineBlue text-base'>Online service</h5>
                <p className='font-semibold text-base text-FcoolGray'>Access to multiplayer games</p>
            </div>
            <span className='w-1/6 text-FpurplishBlue font-semibold text-base'>+$10/yr</span>
        </div>
        <div className="flex justify-between items-center cursor-pointer bg-Fmagnolia border-2 border-FlightGray p-2 rounded-md">
            <Checkbox id="disabled" disabled />
            <div className="flex flex-col w-4/6">
                <h5 className='font-bold text-FmarineBlue text-base'>Online service</h5>
                <p className='font-semibold text-base text-FcoolGray'>Access to multiplayer games</p>
            </div>
            <span className='w-1/6 text-FpurplishBlue font-semibold text-base'>+$10/yr</span>
        </div>
    </div>
  )
}

export default Addon

