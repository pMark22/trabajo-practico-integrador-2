# Trabajo Practico Integrador 2

Aplicacion web desarrollada con React y Vite para el Trabajo Practico Integrador II.

El proyecto corresponde al frontend del sistema de gestion de blog personal con autenticacion desarrollado en el Trabajo Practico Integrador I.

## Tecnologias utilizadas

* React
* Vite
* React Router
* Tailwind CSS
* JavaScript
* Fetch API

## Instalacion

Clonar el repositorio y entrar en la carpeta del proyecto:

```
git clone https://github.com/pMark22/trabajo-practico-integrador-2.git
cd trabajo-practico-integrador-2
```

Instalar las dependencias:

```
npm install
```

## Ejecucion

Iniciar el servidor de desarrollo:

```
npm run dev
```

La aplicacion se ejecuta normalmente en:

```
http://localhost:5173
```

## Backend

Este proyecto utiliza el backend desarrollado en el Trabajo Practico Integrador I.

Repositorio del backend:

https://github.com/pMark22/trabajo-practico-integrador-1

El backend debe estar ejecutandose en:

```
http://localhost:3000
```

## Funcionalidades

* Registro de usuarios.
* Inicio de sesion.
* Cierre de sesion.
* Proteccion de rutas.
* Obtencion del perfil del usuario.
* Manejo de autenticacion mediante cookies.
* Manejo de errores HTTP.
* Validaciones del backend.
* Navegacion mediante React Router.

## Estructura del proyecto

src/
componentes/ → Navbar
hooks/ → useFetch y useForm
pages/ → Login, Registro y Home
router/ → rutas y proteccion de rutas
App.jsx → componente principal
main.jsx → inicio de la aplicacion
index.css → estilos y Tailwind
