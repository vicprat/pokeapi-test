El objetivo primario es crear una aplicación que cumpla lo siguiente:
-Crear fetch poke api con react js.
-vista inicial de 20 elemntos.
-nombre
-un click para mostrar imagen
-dos clicks redireccionar a pagina mas detalla (implementar manejo de doble click event)
-paginacion de 20 en 20 hasta 151.
-cada elemento debe redireccionar a una pagina mas detalla de cada pokemon dando doble cick

Lista de objetivos para elaborar la aplicación debe cumplior con los siguientes requisitos a mi manera usando react + vite:
    1. La aplicacion debe ser estilizada con tailwindcss.
    2. La aplicacion debe hacer uso de react-router-dom para manejar las rutas.
    3. Hacer llamado de la siguiente API https://pokeapi.co/ y mostrar los resultados en una lista con un limite de 151 elementos y debe ser paginada en bloques de 20 elementos.
    4. Al hacer click en un elemento de la lista debe mostrar la imagen principal del pokemon seleccionado en un modal.
    5. El modal debe tener un botón para ir a una ruta que muestre la información del pokemon seleccionado el cual debera redirigir a al usuario haciendo doble click en el pokemon seleccionado usando el hook de useNavigate de react-router-dom.
    6. El modal debe tener un botón para cerrar el modal.
    7. La pagina de la informacion del pokemon seleccionado debe ser mostrada en una ruta dinamica segun su id o nombre. Ejemplo: /pokemon/1, /pokemon/bulbasaur
    8. La pagina de la informacion del pokemon seleccionado debe mostrar la imagen principal del pokemon seleccionado, su nombre, su id, su peso, su altura, su tipo y su habilidad.
    9. La pagina de la informacion del pokemon seleccionado debe tener un botón para regresar a la pagina principal.

Nice to have:
    1. Hacer uso de i18n para mostrar el texto en español e ingles.
    2. La aplicacion debe hacer uso de redux para manejar el estado de la aplicacion.
    3. La aplicacion debe hacer uso de redux toolkit para manejar el estado asincrono de la aplicacion y llamados a APIs.
    4. La aplicacion debe de hacer testing de los componentes y de las acciones de redux con vitest. 
