


var carta;


function guardarDatos(e) {  //guardar datos dentro de variables
    e.preventDefault();
    
    //nombre y rut
    var nombre = document.getElementById('nombre').value;
    var apellidoP = document.getElementById('Apellido-paterno').value;
    var apellidoM = document.getElementById('apellido-materno').value;
    var rut = document.getElementById('rut').value;
    //contacto
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('celular').value;
    
    //datos mas personales

    var edad = document.getElementById('edad').value;
    
    var sexo = document.getElementById('genero1').checked;
    
    console.log(sexo);


    if (sexo == false) {
        sexo = 'Femenino';
    }
    else {
        sexo = 'Masculino';
    }

    var fnacimiento = document.getElementById('fecha').value;
    var profesion = document.getElementById('Profesion').value;
    var motivacion = document.getElementById('Motivacion').value;

    
    carta="Hola,\n\n" +
    "Mi nombre es " + nombre + " " + apellidoP + " " + apellidoM + ", tengo " + edad + " años y soy " + sexo + ".\n\n"+ 
    "Mi RUT es " + rut + " y mi fecha de nacimiento es " + fnacimiento + ".\n" +
    "Actualmente trabajo como " + profesion + " y mi motivación para postular al trabajo es la siguiente:\n\n" +
    motivacion + "\n\n" +
    "Puedes contactarme a través de mi email (" + email + ") o mi celular (+56 " + telefono + ").\n\n" +
    "¡Espero tener la oportunidad de conversar contigo pronto!\n\n" +
    "Saludos cordiales,\n" +
    nombre+ " " + apellidoP;


        
    console.log('Datos guardados');

}

function MostrarCarta(e) {
    e.preventDefault();
    
    
    
    if (carta == null || carta == undefined || carta == '') {
        alert('Primero debes procesar los datos');

        return;
    }
    else{
        document.querySelector('#carta').addEventListener('click', function() {
            document.querySelector('#CartaGenerada').style.visibility = 'visible';
        });

        document.getElementById('CartaGenerada').value = carta;
    }
    

}