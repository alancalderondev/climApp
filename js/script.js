//1. Vamos a obtener la hora actual
//1.1 Obtener el <p> para asignarle la hora
const hora_p = document.querySelector('#horaActual');
//Ocupamos la funcion DATE para obtener la hora
let dateNow = new Date();
//1.2 Actualizamos la hora actual

const actualizarHora = () => {
    const horas = dateNow.getHours().toString().padStart(2,'0');
    const minutos = dateNow.getMinutes().toString().padStart(2,'0');
    //Asignarle la hora y los minutos a mi Etiqueta <p>
    hora_p.innerHTML = `${horas}:${minutos}`;
}
//Invocamos a la funcion de Actualizar Hora para que de inicio nos detecte la hora actual de nuestro sistema
actualizarHora();

//Una vez obtenida la hora actual vamos a hacer que cada minuto esta cambie
setInterval(() =>{
    dateNow.setMinutes(dateNow.getMinutes() + 1 );
    actualizarHora();
},60000);

//2 Vamos a obtener la ciudad del usuario
//2.1 Para obtener la ciudad necesitamos la Latitud y longitud por el sistema
//Que en este caso es nuestro navegador
const getLatitudeAndLongitud = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            error => reject(error)
        );
    });
};

const API_KEY = 'bbdc1078d9f6a17e689da2f3582ec07e';
//Necesitamos resolver la promesa
getLatitudeAndLongitud()
    .then(coords =>{
        const {latitude, longitude} = coords
        const URL_CityName = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
        fetch(URL_CityName)
            .then(response => response.json())//La respuesta la formateamos a JSON
            .then(dataName => {
                const CityName = dataName[0].name;
                const cityP = document.querySelector('#tuCiudad');
                cityP.innerHTML = CityName;
                //Ahora obtenemos la bandera
                const flagCity = `https://flagcdn.com/32x24/${(dataName[0].country).toLowerCase()}.png`;
                const imgFlag = document.querySelector('#flagCity');
                imgFlag.src = flagCity;
                //Ahora vamos a obtener la temperatura
                const URL_ClimaCity = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}`;
                fetch(URL_ClimaCity)
                    .then(response => response.json())
                    .then(dataClima =>{
                        const temperatura = (parseFloat(dataClima.main.temp) - 273.15).toFixed(0);
                        const temperaturaMin = (parseFloat(dataClima.main.temp_min) - 273.15).toFixed(2);
                        const temperaturaMax = (parseFloat(dataClima.main.temp_max) - 273.15).toFixed(2);
                        const temeEtiqueta = document.querySelector('#tempFinal')
                        temeEtiqueta.innerHTML = temperatura + '°';
                        const tempMin = document.querySelector('#tempMin');
                        const tempMax = document.querySelector('#tempMax');
                        tempMin.innerHTML += temperaturaMin + '°';
                        tempMax.innerHTML += temperaturaMax + '°';
                        const humidity = (dataClima.main.humidity);
                        const humeda = document.querySelector('#humeda');
                        humeda.innerHTML = humidity + '°';
                        const nubes = (dataClima.clouds.all)
                        const cloud = document.querySelector('#nube');
                        cloud.innerHTML = nubes + '%'

                        const viento  = (dataClima.wind.speed);
                        const aire = document.querySelector('#aire');
                        aire.innerHTML = viento + ' m/s';
                    })
            })
    });