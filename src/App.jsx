import './App.css' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'; {/*Import della libreria di ReactRouter*/}
import Homepage from "./pages/Homepage"; {/*Import della pagina di riferimentor*/}
import ChiSiamo from "./pages/ChiSiamo"; {/*Import della pagina di riferimentor*/}
import Prodotti from "./pages/Prodotti"; {/*Import della pagina di riferimentor*/}
import DefaultLayout from './layout/Defaultlayout'; {/*Import del layout di default creato in DefaultLayout*/}
import DettaglioProdotto from './pages/DettaglioProdotto'; 

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}> {/*Inserimento della rotta genitore*/}
            <Route path="/" element={<Homepage/>}/> {/*Inserimento delle rotte figlie*/}
            <Route path="/chisiamo" element={<ChiSiamo/>}/>
            <Route path="/prodotti"> {/*Inserimento della nuova rotta padre*/}
              <Route index element={<Prodotti/>}/> {/*Inserimento della nuova sottorotta figlia*/}
              <Route path=":id" element={<DettaglioProdotto/>}/> {/*Inserimento della sottorotta dinamica con raggruppamento*/}
            </Route> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
