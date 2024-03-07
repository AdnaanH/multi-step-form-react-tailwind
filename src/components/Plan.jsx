import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react';

function Plan() {
  const [switch2, setSwitch2] = useState(true);

  const arcade = '/icon-arcade.svg'
  const advanced = '/icon-advanced.svg'
  const pro = '/icon-pro.svg'
  
  return (
    <div className="flex flex-col w-full gap-6 my-6">
        <div className="flex gap-6 justify-between items-center w-full">
            <div className="w-4/12 min-h-2 bg-Fmagnolia p-4 rounded-md border border-FpurplishBlue">
                <img src={arcade} alt="arcade" className='mb-6' />
                <h1 className='text-base text-FmarineBlue font-bold'>Arcade</h1>
                <h2 className='font-bold text-sm text-FcoolGray'>$90/yr</h2>
                <h3 className='text-FmarineBlue text-sm font-semibold'>2 months free</h3>
            </div>
            <div className="w-4/12 min-h-2 bg-Fmagnolia p-4 rounded-md border border-FpurplishBlue">
                <img src={advanced} alt="advanced" className='mb-6' />
                <h1 className='text-base text-FmarineBlue font-bold'>Advanced</h1>
                <h2 className='font-bold text-sm text-FcoolGray'>$120/yr</h2>
                <h3 className='text-FmarineBlue text-sm font-semibold'>2 months free</h3>
            </div>
            <div className="w-4/12 min-h-2 bg-Fmagnolia p-4 rounded-md border border-FpurplishBlue">
                <img src={pro} alt="pro" className='mb-6' />
                <h1 className='text-base text-FmarineBlue font-bold'>Pro</h1>
                <h2 className='font-bold text-sm text-FcoolGray'>$150/yr</h2>
                <h3 className='text-FmarineBlue text-sm font-semibold'>2 months free</h3>
            </div>
        </div>
        <div className="flex gap-6 justify-center items-center w-full h-10 bg-Fmagnolia">
            <p className='text-base text-FcoolGray font-bold'>Monthly</p>
            <ToggleSwitch checked={switch2}  onChange={setSwitch2} />
            <p className='text-base text-FmarineBlue font-bold'>Yearly</p>

        </div>
    </div>
  )
}

export default Plan
