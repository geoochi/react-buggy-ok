import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <>
      <div id='react' className='big'>
        react id target
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
