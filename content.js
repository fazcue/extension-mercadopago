// elementos a ocultar (clases)
const SELECTORS = ['activities__list', 'banking-balance', 'banking-balance__assets']

// Crear elementos
const span = document.createElement('span')
span.innerText = 'hide'
span.id = 'status'
span.style.display = 'none'

const button = document.createElement('button')
button.innerText = 'Mostrar Datos'
button.id = 'showhide'
Object.assign(button.style, {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer'
})

// Añadir evento al botón
button.addEventListener('click', () => {
  // status
  const status = document.querySelector('#status')
  const isHidden = status.innerText === 'hide'

  // mostrar / ocultar selectores
  SELECTORS.forEach(selector => {
    let isActive = true

    chrome.storage.local.get([selector]).then((result) => {
      isActive = result[selector]
      
      if (isActive) {
        const curr = document.querySelector(`.${selector}`)
        if (curr) curr.style.display = isHidden ? '' : 'none'
      }
    })
  })

  // actualizar elementos
  status.innerText = isHidden ? 'show' : 'hide'
  button.innerText = isHidden ? 'Ocultar Datos' : 'Mostrar Datos'
})

// Ocultar información al cargar la página
SELECTORS.forEach(selector => {
  const curr = document.querySelector(`.${selector}`)
  if (curr) curr.style.display = 'none'
})

// Añadir elementos al DOM
document.body.appendChild(button)
document.body.appendChild(span)
