let url = 'rates.json';  //if consume from json static file
import * as service from './rate=service-mock';

// use from json static file
fetch(url)
    .then(response => response.json())
    .then(rates => {
      let html = '';
      rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}</td></tr>`);
      document.getElementById('rates').innerHTML = html;
    }).catch(e => console.log(e));


service.findAll()
    .then(rates => {
      let html = '';
      rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}</td></tr>`);
      document.getElementById('rates2').innerHTML = html;
    }).catch(e => console.log(e));
