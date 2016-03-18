import {shortenUrl, form} from './shortenUrl'
import 'whatwg-fetch'

form.addEventListener('submit', shortenUrl)

fetch('/urls.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    displayTopList(json)
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })

function displayTopList (list) {
  let topList = document.getElementById('topList')
  let html = ''

  list.sort(compareTop).slice(0, 5).map((item) => {
    html += `<li class="top__item">
      <a href="${item.shortUrl}" class="c-shortener-link" target="_blanc">${item.shortUrl}</a>
      <span class="u-secondary">${item.hits}</span>
    </li>`
  })

  topList.innerHTML = html
}

function compareTop (a, b) {
  if (a.hits < b.hits) {
    return 1
  }
  if (a.hits > b.hits) {
    return -1
  }
  return 0
}
