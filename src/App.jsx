import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import LandingPage from './components/pages/LandingPage'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] m-0 flex flex-col align-centre text-center'>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
