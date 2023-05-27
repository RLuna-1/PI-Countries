24/03/2023

TypeError: model is not a function?

Era simplemente completar los modelos

Modelos... hacemos todo string para simplificar.

CRUD -> Create Read Update Delete...

26/03/2023

Primero intenté "llenar" la base de datos mediante una ruta get a http://localhost:3001/, pero la consigna pedía que esto se realizará cada vez que se levantara el servidor. Por lo tanto, es necesario ponerla en app.js. 

Algunos country.capital[0] eran undefined y por lo tanto tiraban "TypeError: Cannot read properties of undefined (reading '0')". Se resolvió usando Optional Chaining https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining... ?.

Nunca uses mayúsculas para guardar datos en una base de datos... usa guiones bajos.

Por qué bulkCreate() y no findOrCreate()? Para ahorrarnos peticiones

28/03/2023

Cómo hago **📍 GET | /countries/name?="..."**?...

Costó, pero 

https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

https://stackoverflow.com/questions/53971268/node-sequelize-find-where-like-wildcard

https://sequelize.org/docs/v6/core-concepts/raw-queries/

Usando {[Op.ilike]: `%${name}%`}

30/03/23 Terminando con el backend...

Creo que sería buena idea dejar más bonito la paginación de countries...

Como logro que las instancias creadas en el post de activities se relacionen con muchos países...? 

Sequelize nos genera métodos cuándo definimos relaciones de muchos a muchos, en este caso como addCountries, removeCountries, setCountries and getCountries...

No tengo que usar la tabla intermedia en el método post?... No, no es necesario referenciar explicitamente la tabla intermedia en el código. Esto lo hace Sequelize automáticamente por nosotros. 

02/04/23

2 días para hacer los filtros y ordenamientos..

Order es un keyword de SQL para especificar cómo deben ser sorteados los resultados de las queries, pero...

"DESC" y "ASC" son también keywords de SQL utilizadas para ordenar los resultados de las queries en una dirección específica, pasada como query. Se puede utiliza tambien "DESCENDING" y "ASCENDING" u otras palabras que signifiquen lo mismo (no sé cuales son). No me tenía que inventar alguna formar para lograr ese ordenamiento...

Era necesario crear tanto un whereClause como un orderClause, no solamente un "options" (eso me mareó bastante, está confuso en internet). 

Aún no logro implementar el filtro por Activity...

Creo que ya sé. Si quiero filtrar por una sola actividad, tengo que usar "$activities.name$". Esto es una sintaxis de Sequelize para referenciar a columnas de una tabla "joineada". 

Si quiero filtrar múltiple actividades, tengo que splitear el string que envíe por query y usar [Op.contains]...

También tuve que crear una includeClause para filtar por activity.

04/04/23

Como hago para poder tirar multiples errores? Para que no se muestre solamente el primer error encontrado?...

Puedo hacer un array de errores, al que le puedo pushear los mismos y después simplemente devolver un nuevo objeto error con el array joineado.

/////////////////////////////////////

Llegó el momento de empezar el frontend!

...

Cómo hago para incrementar la opacidad del overlay cuando termina el video?
Tengo que usar hooks... un UseState...

05/04/23

Como hago para pasarle lo que quiero filtar a la API?...

En el metodo axios.get existe la opción "params" la cual es usada para mandar query parameters en la URL. Params espera un objeto con llaves que representan los nombres y valores de los query parameters.

Dispatch? dispatch es una funcion dada por la store de Redux que se utiliza para despachar una acción, la cuál también actualizará el Estado de la store.

Como hago para que sea asincrónica?... En redux, un creador de acción "async" retorna una función que toma un "dispatch" como argumento. Esta funcion luego puede hacer llamadas asincrónicas a la API y despachar acciones de acuerdo a la respuesta. La función "dispatch" está dada por el middleware "redux-thunk", que nos permite escribir lógica asincrónica en nuestras acciones de Redux.

Cuándo la función sea invocada, retornará una promesa que se resolverá con el resultado de la función. Esto nos permite usar el keyword "await" cuándo llamanos a la función para esperar que la función se complete y nos de un resultado. 

Por qué no me funciona el listado de cards???????????????????????????????????????????????????????????????

Bueno, al final el useSelector usa state. y la property. No era state.reducer. Tampoco estaba pudiendo mapear correctamente desde el frontend el "rows" que me venía desde el controller. Al final, simplemente cambié el findAndCountAll por findAll y listo. Luego en el paginado haré un Math.ceil

Por qué no puedo usar el estado de searchInput para filtrar????

Porque useState no actualiza la variable de estado automáticamente, sino que en el próximo render. Por lo tanto esto es incorrecto

/////////////////////////////////////////////////////////////

const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    dispatch(setFilters({...filters, official: searchInput}))
  };

  ///////////////////////////////////////////////////////////

  09/04/23

  Recién me doy cuenta que no paso las activities relacionadas a los países en su detail por el backend. Cómo se suponía que iba a renderizarlas en el front? Igual, es simple. Solamente necesitaba agregar un includes en el backend...

  Como hago para resetear los options en la home page? Puedo usar querySelectorAll("select") para seleccionar todos los selects y resetearlos...

  //////////////////////

  Valor devuelto

Una NodeList no viva que contenga un objeto Element para cada elemento que coincida con al menos uno de los selectores especificados o una NodeList vacía en caso de que no haya coincidencias.

Returns all element descendants of node that match selectors.

document.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0;
    })

/////////////////////////

Arreglar el fetch de todos los paises, ya que le estoy mandando un while de 25 pasaos al servidor. Crear un nuevo endpoint tipo /allcountries

Por qué tengo que elegir varias veces un país en la form para que se vuelva disponible el submit?????? -> Por como estaba hecha el handleChange. Estaba revisando si todos los datos requeridos estaban completos antes de settear el "completed" a true. Pero lo estaba haciendo antes de updatear el estado "formData" con el último país seleccionado 

/////////////

&&
      formData.countryIds

////////////

Fue cambiaado por 

/////////////

&&
    event.target.name === "countryIds"

/////////////



