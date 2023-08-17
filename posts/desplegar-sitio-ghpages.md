---
title: "Cómo Desplegar un Sitio Web en GitHub Pages"
subtitle: "Aprende a desplegar tu proyecto utilizando GitHub Pages"
category: "desarrollo"
date: "14-08-2023"
image: "/images/GHPages.png"
---

Si has creado un sitio web impresionante y estás listo para compartirlo con el mundo, GitHub Pages es una excelente opción. Esta plataforma gratuita y sencilla te permite alojar tu sitio directamente desde tu repositorio de GitHub. A continuación, te guiaré a través de los pasos para desplegar tu propio sitio web en GitHub Pages.

## Paso 1: Preparación del Repositorio

1. Crea un nuevo repositorio en GitHub para tu proyecto. Es muy importante que el repositorio tenga el mismo nombre que tu usuario. Un ejemplo sería : `https://<nombre-de-usuario>.github.io/<nombre-del-repo>`

<img src="/images/GH1.png" alt="GitHub Pages tutorial" width="768"  style="border-radius: 10px;">

Cuando tengas tu repo creado, es tiempo de subir los archivos de tu proyecto:

> ```bash
> git remote add origin git@github.com:<nombredelacuentadeusuario>/<nombredelrepositorio>.git
> git branch -M main
> git push -u origin main
> ```

## Paso 2: Configurar GitHub Pages

1. En tu repositorio, ve a la pestaña "Settings".
2. Desplázate hacia abajo hasta la sección "GitHub Pages".
3. En la opción "Source" y selecciona GitHub Actions.Se desplegará la opción de utilizar las acciones para Next.js.
4. Dale a la opción de Configurar.
5. Te aparecerá un archivo con las acciones para desplegar tu pagina automáticamente, si no quieres una configuración personalizada dale a hacer commit.

## Paso 3: Ver tu Sitio Web en Línea

Después de configurar GitHub Pages, tu sitio web debería estar disponible en línea. Para acceder a él, ve a la URL: `https://tuusuario.github.io/nombre-repositorio`.

¡Listo! Ahora tu sitio web estará disponible para que cualquier persona pueda visitarlo en línea. Recuerda que cada vez que realices cambios en tu repositorio y los subas, tu sitio web en GitHub Pages se actualizará automáticamente.

GitHub Pages es una forma fantástica de compartir tus proyectos y crear una presencia en línea sin costo adicional. ¡Disfruta compartiendo tu trabajo con el mundo!

Espero que esta guía te haya ayudado a desplegar tu sitio web en GitHub Pages de manera exitosa. ¡Buena suerte!
