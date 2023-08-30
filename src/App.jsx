import Content from './components/Content'
import Navbar from './components/Navbar'

import reactLogo from './assets/react.svg'
import Footer from './components/Footer';


const App = () => {
  let reactLogoTextoAlt = "Logo do React";

  return (
    <>
      <Navbar/>
      <Content logo={reactLogo} alt={reactLogoTextoAlt}/>
      <Footer />
    </>
  )
}

export default App
