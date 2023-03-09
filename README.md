El objetivo es crear una aplicación usando react + vite.

Primero, estas son las dependecias y sus versiones que estan instaladas actualmente y de las cuales me vas a dar información sobre su uso.
    "dependencies": {
    "@heroicons/react": "^2.0.16",
    "@reduxjs/toolkit": "^1.9.3",
    "axios": "^1.3.4",
    "i18next": "^22.4.11",
    "i18next-browser-languagedetector": "^7.0.1",
    "i18next-http-backend": "^2.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.8.2",
    "redux": "^4.2.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "standard": "^17.0.0",
    "tailwindcss": "^3.2.7",
    "vite": "^4.1.0"
  }

La aplicación debe cumplior con los siguientes requisitos:
    1. Hacer uso de i18n para mostrar el texto en español e ingles.
    2. La aplicacion debe ser estilizada con tailwindcss.
    3. La aplicacion debe hacer uso de react-router-dom para manejar las rutas.
    4. La aplicacion debe hacer uso de redux para manejar el estado de la aplicacion.
    5. La aplicacion debe hacer uso de redux toolkit para manejar el estado asincrono de la aplicacion y llamados a APIs.
    6. Hacer llamado de la siguiente API https://pokeapi.co/ y mostrar los resultados en una lista con un limite de 151 elementos y debe ser paginada en bloques de 20 elementos.
    7. Al hacer click en un elemento de la lista debe mostrar la imagen principal del pokemon seleccionado en un modal.
    8. El modal debe tener un botón para ir a una ruta que muestre la información del pokemon seleccionado el cual debera redirigir a al usuario haciendo doble click en el pokemon seleccionado usando el hook de useNavigate de react-router-dom.
    9. El modal debe tener un botón para cerrar el modal.
    10. La pagina de la informacion del pokemon seleccionado debe ser mostrada en una ruta dinamica segun su id o nombre. Ejemplo: /pokemon/1, /pokemon/bulbasaur
    11. La pagina de la informacion del pokemon seleccionado debe mostrar la imagen principal del pokemon seleccionado, su nombre, su id, su peso, su altura, su tipo y su habilidad.
    12. La pagina de la informacion del pokemon seleccionado debe tener un botón para regresar a la pagina principal.
    13. La aplicacion debe de hacer testing de los componentes y de las acciones de redux con vitest. 