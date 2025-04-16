import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contact from './Contact.tsx'
import Counter from './Counter.tsx'
import ReactStrict from './ReactStrict.tsx'
import Objects from './useState/objects.tsx'
import NestedObject from './useState/NestedObject.tsx'
import Props from './props/Props.tsx'
import Gallery from './props/01_extractProfile/Gallery.tsx'
import Colorchange from './useState/01_colorChanger/Colorchange.tsx'
import PasswordGenerate from './passwordGenrator/PasswordGenerate.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <Contact/> */}
    {/* <ReactStrict/> */}
    {/* <Objects/> */}
    {/* <NestedObject/> */}
    {/* <Props/> */}
    {/* <Gallery/> */}
    {/* <Colorchange/> */}
    <PasswordGenerate/>
   
  </StrictMode>,
)
