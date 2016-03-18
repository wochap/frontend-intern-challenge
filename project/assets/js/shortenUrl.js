let classie = require('desandro-classie')

let form = document.getElementById('shortenerForm')
let url = form.querySelector('.c-shortener-form__url')
let submit = form.querySelector('.c-shortener-form__submit-button')

function shortenUrl (e) {
  e.preventDefault()
  classie.add(form, 'is-submitting')

  setTimeout(function () {
    url.value = 'http://chrc.dc/xyzxyz'
    submit.innerHTML = 'Copiar'
    classie.add(form, 'is-submitted')
  }, 300)
}

export {
  shortenUrl,
  form
}
