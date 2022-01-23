# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Por favor seguir los pasos para poder correr el proyecto.
1 - Clonar de git

2- correr en terminal npm i

3- npm start

Tambien se puede ver el link:

https://loving-bell-1718a8.netlify.app/

Explicacion del flujo de la pagina. 

CompuShop es el Brand -> al cual clickeas el nombre y es el 'Home'

- El Menu se abre y se puede elegir la categoria laptop o desktop.
- Hay un carrusel para ver 3 imagenes. (elegi 3 podrian ser mas/menos y otras si asi se desea)
- Luego se hace un una busqueda a fire base para que busque todos los items. se utiliza useMemo
- Se puede buscar por categoria (se hace un fetch con filtro porque asi nos dijeron en clase)
- se puede elegir el button + sube hasta q no hay mas stock. 
- Luego si apretas "add to cart", indica que esta agregado y si si queres podes add more to cart.
- Button "ver mas detalles" (tambien se hace un fetch para un id particular) se abre el detalle del producto:

    - 4 imagenes para ver del producto
    - Imagen principal
    - Descripcion
    - Precio
    - Stock
    
- Mismos botones que en pagina principal y mismo funcionaminto (mismo componente)
- Podes ir al cart a traves del button "Go to cart" o el Cart Widget
 
- tenes un resumen primero con total y cantidad de items
- button de check out
- y resumen con un icono trash donde podes eleiminar el producto del cart
- Check out:
    - tenes el form con los campos nombre / phone / Email (campos no tiene validacion)
    - tienen el resumen
    - confirmar la orden (si valida si hay campos vacios)
    - cuando se confirma la compra, retorna un codigo de confirmacion 

