import MainForm from "./components/MainForm"
import Navigation from "./components/Navigation"


function App() {

  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-FlightGray">
        <section className="flex justify-between items-start p-4 w-[70%] h-[80vh] bg-white rounded-md">
            <div className="w-4/12 h-full">
              <Navigation />
            </div>
            <div className="w-8/12 h-full mt-6 mx-28 ">
              <MainForm />
            </div>
        </section>
    </main>
  )
}

export default App
