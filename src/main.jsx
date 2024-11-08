import { createElement } from 'react'
import { render } from 'react-dom'
const App = () => {
  return (
    <>
      <div id='react' className='big'>
        react id target
      </div>
    </>
  )
}

render(createElement(App), document.querySelector('#root'))
