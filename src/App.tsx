import Routes from '@/router/index';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import './global.css'

import { atom, useAtom } from "jotai";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </>
  )
}

export default App
