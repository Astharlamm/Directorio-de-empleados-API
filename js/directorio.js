const API_URL = 'http://jsonplaceholder.typicode.com';

const cargarDatos = async () =>{
 let response = await fetch(`${API_URL}/users`)
 //console.log(response);
 let data = await response.json();
 let html = "";

 data.forEach(persona => {

    html +=  '<div class="card animate__backInUp">' 
    html +=   '<div class="card">'
    html +=      '<div class="card-body">'
    html +=       `<h5 class="card-title"> ${persona.name}</h5>`
    html +=        '<hr />'
    html +=        `<p class="card-text">Email: ${persona.email}</p>`
    html +=        `<p class="card-text">Ciudad: ${persona.address.city}</p>`
    html +=        `<p class="card-text">Teléfono: ${persona.phone}</p>`
    html +=        `<a href="http://www.${persona.website}" class="btn btn-primary" target="_blank">Sitio web</a>`
    html +=     '</div>'
    html +=    '</div>'
    html += '</div>'

 });

 document.querySelector("#bloque").innerHTML = html;

};


cargarDatos();


