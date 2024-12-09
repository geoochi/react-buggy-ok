import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div id='react' className='big'>
      react id target
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
