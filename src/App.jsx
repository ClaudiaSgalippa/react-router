import './App.css' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'; {/*Import della libreria di ReactRouter*/}
import Homepage from "./pages/Homepage"; {/*Import della pagina di riferimentor*/}
import ChiSiamo from "./pages/ChiSiamo"; {/*Import della pagina di riferimentor*/}
import Prodotti from "./pages/Prodotti"; {/*Import della pagina di riferimentor*/}
import DefaultLayout from './layout/Defaultlayout'; {/*Import del layout di default creato in DefaulLayout*/}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}> {/*Inserimento della rotta genitore*/}
            <Route path="/" element={<Homepage/>}/> {/*Inserimento della rotta figlia*/}
            <Route path="/chisiamo" element={<ChiSiamo/>}/> {/*Inserimento della rotta figlia*/}
            <Route path="/prodotti" element={<Prodotti/>}/> {/*Inserimento della rotta figlia*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
