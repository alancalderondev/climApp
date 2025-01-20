# **CLIMA APP**

**Clima App** es una aplicación web que permite a los usuarios consultar el clima actual de su ciudad, utilizando datos proporcionados por la API de OpenWeatherMap.

Puedes acceder a la aplicación en el siguiente enlace: [Clima App](https://clima-appweb.netlify.app/)

## **Tecnologías utilizadas**

- **HTML**: Estructura básica de la página web.
- **CSS**: Diseño y estilo de la aplicación.
- **JavaScript**: Lógica de la aplicación y manejo de la API.
- **API de OpenWeatherMap**: Obtención de datos climáticos.

## **Características del proyecto**

La aplicación incluye las siguientes funcionalidades:

- **Hora actual**: Muestra la hora local actual en la ciudad del usuario.
- **Ciudad detectada**: Identificación de la ciudad utilizando la geolocalización del usuario.
- **Temperatura actual**: Muestra la temperatura en grados Celsius.
- **Temperatura máxima y mínima**: Muestra la temperatura máxima y mínima para el día.
- **Humedad**: Muestra el nivel de humedad actual.
- **Nubes**: Información sobre la cobertura de nubes en el cielo.
- **Viento**: Muestra la velocidad del viento.
- **Bandera de la ciudad**: Muestra la bandera correspondiente a la ciudad.

## **APIs utilizadas**

1. **API Key de OpenWeatherMap**:
   - Regístrate en [OpenWeatherMap](https://openweathermap.org/api) para obtener tu **API Key**.
   - Ejemplo de clave: `API_KEY = 'TU_API_KEY'`
   
2. **Geolocalización de la ciudad**:
   - Endpoint para obtener la ciudad a partir de latitud y longitud:
     ```
     API_CityName = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API_KEY}'
     ```

3. **Clima de la ciudad**:
   - Endpoint para obtener los datos climáticos de la ciudad por nombre:
     ```
     API_ClimaCity = 'https://api.openweathermap.org/data/2.5/weather?q={City_Name}&appid={API_KEY}'
     ```

4. **Bandera de la ciudad**:
   - URL para obtener la bandera de la ciudad:
     ```
     URL_FLAG = 'https://flagpedia.net/download/api'
     ```

## **Pasos para la implementación**

A continuación, se describen los pasos necesarios para construir la aplicación:

1. **Obtener la latitud y longitud del usuario**:
   Utiliza la geolocalización del navegador para obtener la latitud y longitud de la ubicación actual del usuario.

2. **Obtener la ciudad del usuario**:
   Usando la latitud y longitud obtenidas, realiza una solicitud a la API de OpenWeatherMap para obtener el nombre de la ciudad.

3. **Obtener la temperatura actual**:
   Realiza una solicitud a la API de OpenWeatherMap para obtener la temperatura actual en la ciudad del usuario.

4. **Obtener la temperatura máxima y mínima**:
   Extrae la temperatura máxima y mínima para el día desde los datos proporcionados por la API.

5. **Obtener la humedad actual**:
   Muestra el porcentaje de humedad actual.

6. **Obtener las nubes en el aire**:
   Muestra el porcentaje de cobertura de nubes en el cielo.

7. **Obtener la velocidad del viento**:
   Muestra la velocidad del viento en la ciudad.

8. **Obtener la bandera de la ciudad**:
   Utiliza el código de país de la ciudad para mostrar la bandera correspondiente utilizando la API de Flagpedia.

9. **Mostrar la hora actual**:
   Muestra la hora local de la ciudad utilizando JavaScript.

## **Instalación y uso**

1. Clona este repositorio a tu máquina local:

```bash
   git clone https://github.com/tu_usuario/ClimaApp.git
```

2. Navega a la carpeta del proyecto:

```bash
cd ClimaApp
```


3.Abre el archivo index.html en tu navegador.

4. No olvides reemplazar 'TU_API_KEY' con tu clave de API de OpenWeatherMap en el archivo app.js.

### **Contribuciones**

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork de este repositorio.
Crea una rama para tu cambio (git checkout -b feature/mi-nueva-funcionalidad).
Realiza tus cambios y haz commit de los mismos (git commit -am 'Agregué nueva funcionalidad').
Empuja tus cambios a tu fork (git push origin feature/mi-nueva-funcionalidad).
Crea un pull request.
