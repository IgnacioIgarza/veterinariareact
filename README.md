# React-eCommerce
## Página de e-commerce de una veterinaria ficticia usando React
![Vista de la app](https://github.com/IgnacioIgarza/veterinariareact/blob/main/appVeteReact.bmp)
## Este es una actividad de un curso de React, ofrecido por Talento Tech, Buenos Aires, Argentina. 
## Es una aplicación web que interacciona con el usuario en un eCommerce con fines de aprendiaje. Contiene: 
### - un carrito de compras con gestión de cantidades,
### - modularización de componentes,
### - consulta a una API remota realizada con MockAPI,
### - uso de hooks useState y useEffect, 
### - uso de React Router, 
### - uso de rutas estáticas, dinámicas y protegidas,
### - estilo con CSS básico y Bootstraps.

## Estructura del proyecto:
### - index.html
### - package.json
### - README.md
### - src (carpeta con la lógica del programa)
| Carpeta | Archivo | Tipo | Contenido |
| :------ | :------ | :--- | :-------- |
|       | main | jsx |       |
|       | app | jsx |        |
|       | index | css | Estilo de los componentes |
| assets | LoreVete1 | jpg | Foto que hace de logo |
| assets | stock | json | back-up de  los productos y sus detalles |
| components | FormularioProducto | jsx | Lógica para cargar/editar producto (administrador) |
| components | EliminarProducto | jsx | Lógica para eliminar producto (administrador) |
| components | Layout | jsx | Componente con meta keywords |
| context | AuthContext | jsx | Contexto de autentificación |
| context | CrtContext | jsx | Contexto del carrito de compras|
| context | ProductsContext | jsx | Contexto de productos|
| pages | Navbar | jsx | Barra de navegación interactiva |
| pages | Footer | jsx | Contenido a pie de página|
| pages | IniciarSesion | jsx | Iniciar sesión como público para comprar o como administrador |
| pages | RutaProtegida | jsx | Lógica de protección de rutas |
| pages | Dashboard | jsx | Al ingresar como administrador, muestra funciones de edición de productos |
| pages | Inicio | jsx | Página inicial, se muestran servicios ofrecidos |
| pages | Productos | jsx | Productos para comprar o editar (si se ingresa como administrador) |
| pages | DetalleProducto | jsx | Detalles de un producto en particular |
| pages | Carrito | jsx | Lógica del carrito de compras |
| pages | Pagar | jsx | Lógica para pagar un producto en el carrito de compras |
| pages | Ozonoterapia | jsx | Información sobre ozonoterapia |

## Para iniciar se escribe en la terminal: 
```bash
npm install 
```
```bash
npm run dev 
```



