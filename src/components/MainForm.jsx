import { useState } from "react"
import Personal from "./Personal"
import Addon from "./Addon"
import Plan from "./Plan"
import Summary from "./Summary"
import Success from "./Success"

function MainForm() {
  const [form, setForm] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        yearly: true,
  })

  const FormTitles = [
    'Personal info',
    'Select your plan',
    'Pick addons',
    'Finishing up'
  ];
  
  const FormSubtitles = [
    'Please provide your name, email address, and phone number.',
    'You have the option of monthly or yearly billing.',
    'Add-ons help enhance your gaming experience.',
    'Double-check everything looks OK before confirming.'
  ];

  const FormDisplay = () => {
    if (form === 0) {
      return <Personal formData={formData} setFormData={setFormData} />
    } else if (form === 1) {
      return <Plan />
    } else if (form === 2) {
      return <Addon />
    } else if (form === FormTitles.length - 1 && FormSubtitles.length - 1 && submitted === true) {
      return <Success />
    } else {
      return <Summary />
    }
  };

  function isFirstStep() {
    return form === 0
  }

  function isLastStep() {
    return form === FormTitles.length - 1
  }

  function next() {
    setForm((i) => {
      if (i >= FormTitles.length - 1) return i
      return i + 1
    });
  }

  function back() {
    setForm((i) => {
      if (i <= 0) return i;
      return i - 1
    });
  }

  function onSubmit(e) {
    e.preventDefault()
    if (isLastStep()) {
      setSubmitted(true)
    } else {
      next()
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full h-full relative">
      {!submitted && (
        <>
          <h1 className="text-3xl font-bold text-FmarineBlue">{FormTitles[form]}</h1>
          <h2 className="font-bold text-FcoolGray">{FormSubtitles[form]}</h2>
        </>
      )}
      <div className="flex justify-center item">{FormDisplay()}</div>
      <div className="absolute bottom-12 flex justify-start items-center w-full ">
        <div className="flex justify-between items-center">
          {!isFirstStep() && !submitted && (
            <button type="button" onClick={back} className="text-base text-FcoolGray font-bold bg-transparent border-none px-4 py-2">
              Go Back
            </button>
          )}
          {!submitted && (
            <button type="submit" className="absolute right-0 bottom-0 bg-FmarineBlue px-4 py-2 border-none rounded-md text-white text-base flex justify-end">
              {isLastStep() ? "Confirm" : "Next Step"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default MainForm;
