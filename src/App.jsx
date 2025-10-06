import './App.css' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'; {/*Import della libreria di ReactRouter*/}
import Homepage from "./pages/Homepage"; {/*Import della pagina di riferimentor*/}
import ChiSiamo from "./pages/ChiSiamo"; {/*Import della pagina di riferimentor*/}
import Prodotti from "./pages/Prodotti"; {/*Import della pagina di riferimentor*/}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/chisiamo" element={<ChiSiamo/>}/>
          <Route path="/prodotti" element={<Prodotti/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
