import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<!--primary button with icon-->
<div>
  <button class="btn btn-primary btn-icon">
    <svg class="btn-icon-leading " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
      fill="currentColor" aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
    Button
  </button>
</div>
`

setupCounter(document.querySelector('#counter'))
