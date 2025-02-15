# Next.js Server Setup

Este documento explica cómo configurar y levantar un servidor Next.js en un entorno de desarrollo y producción.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git

# Entrar en la carpeta del proyecto
cd tu-repositorio

# Instalar dependencias con npm o yarn
npm install
# o
yarn install
```

## Modo Desarrollo

Para ejecutar el servidor en modo desarrollo con recarga en caliente, usa el siguiente comando:

```bash
npm run dev
# o
yarn dev
```

El servidor se iniciará en `http://localhost:3000` por defecto.

## Generar Build para Producción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
# o
yarn build
```

Esto generará una carpeta `.next` con los archivos optimizados.

## Ejecutar en Producción

Después de generar la build, puedes iniciar el servidor con:

```bash
npm run start
# o
yarn start
```

El servidor correrá en `http://localhost:3000` por defecto.

## Despliegue

Para desplegar tu aplicación, puedes utilizar plataformas como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Docker](https://www.docker.com/)

Si deseas ejecutar Next.js como un servidor con Node.js en producción, puedes usar un `PM2` para manejar el proceso:

```bash
npm install -g pm2
pm run build
pm start &
# o con PM2
pm install -g pm2
pm run build
pm start
pm2 start npm --name "next-app" -- run start
```

## Variables de Entorno

Puedes definir variables de entorno en un archivo `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_URL_WEBSOCKET=localhost:4000
```

Asegúrate de no subir este archivo al repositorio agregándolo al `.gitignore`.


