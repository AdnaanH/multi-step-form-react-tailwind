
function Summary() {
  return (
    <div className="w-full flex flex-col">
        <div className="bg-Fmagnolia flex flex-col w-full gap-4 my-6 p-4">
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-FmarineBlue font-bold text-xl">Arcade(Yearly)</h1>
                    <span className="text-FcoolGray font-bold text-base underline cursor-pointer">Change</span>
                </div>
                <h2 className="text-xl font-bold text-FmarineBlue">$90/yr</h2>
            </div>
            <hr className="w-full border border-FlightGray" />
            <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="text-base text-FcoolGray font-bold">Online service</p>
                    <span className="text-FmarineBlue text-base font-semibold">+$10/yr</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-base text-FcoolGray font-bold">Larger storage</p>
                    <span className="text-FmarineBlue text-base font-semibold">+$20/yr</span>
                </div>
            </div>        
        </div>
        <div className="flex px-4 py-2 justify-between items-center">
            <h2 className="text-base text-FcoolGray font-bold">Total (per year)</h2>
            <h3 className="text-xl text-FpurplishBlue font-bold">$120/yr</h3>
        </div>
    </div>
    
  )
}

export default Summary
