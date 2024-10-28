import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import LandingPage from './components/pages/LandingPage'
// import DataVisPage from './components/pages/DataVisPage'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] m-0 flex flex-col align-centre text-center'>
      <Header />
      {/* TODO: Add React Router Dom */}
      <LandingPage />
      {/* <DataVisPage /> */}
      <Footer />
    </div>
  )
}

export default App
