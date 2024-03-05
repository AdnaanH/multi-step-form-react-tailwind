function Personal({ formData, setFormData }) {

  return (
    <div className="flex flex-col w-full gap-6 my-6">
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <label htmlFor="name" className="mb-2 text-FpurplishBlue text-base font-semibold">Name</label>
                <small className="text-sm text-FstrawberryRed font-bold hidden">This field is required</small>
            </div>
            <input 
                type="text" 
                placeholder="e.g. Stephen King" 
                value={formData.name} 
                onChange={(event) => setFormData({...formData, name: event.target.value})}
                className="w-full border-2 border-FlightGray placeholder:font-extrabold placeholder:text-FlightGray focus:border text-FpurplishBlue focus:border-FpastelBlue rounded-md"/>
        </div>
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <label htmlFor="email" className="mb-2 text-FpurplishBlue text-base font-semibold">Email Address</label>
                <small className="text-sm text-FstrawberryRed font-bold hidden">This field is required</small>
            </div>
            <input 
                type="email"
                placeholder="e.g. stephenking@lorem.com"  
                value={formData.email} 
                onChange={(event) => setFormData({...formData, email: event.target.value})}
                className="w-full border-2 border-FlightGray placeholder:font-extrabold placeholder:text-FlightGray focus:border text-FpurplishBlue focus:border-FpastelBlue rounded-md"/>
        </div>
        <div className="flex flex-col">
            <div className="flex justify-between items-center">
                <label htmlFor="phone" className="mb-2 text-FpurplishBlue text-base font-semibold">Phone Number</label>
                <small className="text-sm text-FstrawberryRed font-bold hidden">This field is required</small>
            </div>
            <input 
                type="number" 
                placeholder="e.g. +1 234 567 890" 
                value={formData.phone} 
                onChange={(event) => setFormData({...formData, phone: event.target.value})} 
                className="w-full border-2 border-FlightGray placeholder:font-extrabold placeholder:text-FlightGray focus:border text-FpurplishBlue focus:border-FpastelBlue rounded-md"/>
        </div>
    </div>
  )
}

export default Personal
