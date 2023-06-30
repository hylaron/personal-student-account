import React from 'react';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {BodyMain, BodyShedule, BodyGrade, PagePay, BodySupport, BodyPersonalAccount} from './components/Body/Body'
import Header from './components/Header/Header'



// Ссылка Route зависит от наименования пункта меню. 
function App() { 
    return(
    <React.StrictMode>
      <BrowserRouter>
      <Header />
          <Routes>
            <Route exact path="/" element={<BodyMain />}/>
            <Route exact path="/vhod" element={<BodyMain />}/>
            <Route exact path="/raspisanie" element={<BodyShedule />}/>
            <Route exact path="/uspevaemost" element={<BodyGrade />}/>
            <Route exact path="/prikazi" element={<BodyPersonalAccount />}/>
            <Route exact path="/oplata_za_obuchenie" element={<PagePay />}/>
            <Route exact path="/slujba_podderjki" element={<BodySupport />}/>
          </Routes>
      </BrowserRouter>
    </React.StrictMode>
    )
}

export default App