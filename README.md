# Seguimiento de usuarios de Twitch - BUM TRAKER
Esta solución utiliza el servicio <a href="https://dev.twitch.tv/docs/api/">API Twitch</a> para buscar datos públicos de los usuarios (streamers) a partir de un lista, como sus vistas totales, seguidores y streams, y se muestran en un pagina junto con unas gráficas que muestra los TOPS 10 usuarios mas seguidos y mas vistas que tu hayas elegido, que se generan a partir de la librería `Chart.js` y `react-chartjs-2`

Deployment [BUM TRAKER](https://bumtraker.netlify.app)

![preview](https://i.postimg.cc/4NCW9v03/Captura-de-pantalla-2023-03-12-192758.png)

---

## Instalación
 1. Instalar dependencias, con el comando `yarn install`
 2. Iniciar el test, con el comando `yarn test`
 3. Existen unos usuarios por defecto, si los deseas modificar eliminar cambiar o agregar a un usuario, lo puedes hacer en el archivo que se encuentra en la ruta <code>src/data</code>, solo tienes que agregar su nombre tal cual como esta en su canal de Twitch, solo modifica el valor “streamerName” por el nombre del usuario que quieras agregar
 4. Para utilizar la API de Twitch tienes que crear tus api keys en esta [página](https://dev.twitch.tv/docs/authentication/#app-access-tokens), y agregarlas a las `variables de entorno` 
---


¡Déjame saber si surge algún problema!
