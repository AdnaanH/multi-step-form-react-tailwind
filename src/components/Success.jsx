function Success() {
  const success = '/icon-thank-you.svg'
  
  return (
      <div className="w-full h-full flex flex-col items-center py-16">
        <img src={success} alt="" className='w-24 h-24' />
        <h1 className="mt-4 text-center text-3xl text-FmarineBlue font-bold">Thank you!</h1>
        <p className="text-center text-base mt-2 w-full text-FcoolGray font-bold">
          Thanks for confirming your subscription! We hope you have fun using our platform.
          If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div> 
  )
}

export default Success

