---
title: El Runtime de JavaScript
description: Entorno de ejecución de JavaScript.
sidebar:
  # Set a custom label for the link
  label: Runtime
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 1

  # badge:
  #   text: Python
---

## ¿Que es el **runtime de JavaScript**?
En pocas palabras, el **runtime de JavaScript** (o entorno de ejecución de JavaScript) es el lugar donde se ejecuta tu código JavaScript. Es como un escenario donde se desarrolla la magia de dar vida a tus programas.

El runtime de JavaScript proporciona las funcionalidades básicas para ejecutar código JavaScript, como la gestión de memoria, la ejecución de funciones y la interpretación de instrucciones.

El runtime de JavaScript puede incluir otros componentes, como un compilador JIT (Just-In-Time), un recolector de basura y una biblioteca estándar.

---
## ¿Dónde se encuentra el runtime de JavaScript?
La ubicación del runtime de JavaScript depende del contexto en el que se ejecute el código:

#### Navegador:
Cuando ejecutas JavaScript en una página web, el código se procesa por un motor JavaScript que está integrado en el navegador que estás usando. 
Cada navegador tiene su propio motor JavaScript, diseñado para optimizar el rendimiento y las características específicas de ese navegador.
El navegador crea un entorno de ejecución para cada pestaña o ventana, donde se carga y ejecuta el código JS.

| Ejemplos:
        - V8 (Chrome)
        - SpiderMonkey (Firefox)
        - Chakra (Edge).

#### Servidor:
**Node.js:** Un entorno de ejecución de JavaScript que te permite ejecutar código JavaScript fuera del navegador, en el servidor. Node.js utiliza el motor V8 de Chrome.
    
#### Runtimes embebidos:
JavaScript también se puede embeber en otros entornos, como aplicaciones de escritorio o dispositivos móviles, utilizando runtimes específicos para cada plataforma.
Ejemplos:
    - Duktape
    - JavaScriptCore (iOS)
    - Chakra (Windows).
    

---
## Componentes principales del runtime de JavaScript:

- **Motor JavaScript:** Es el cerebro del runtime, el encargado de interpretar y ejecutar tu código línea por línea. Algunos motores conocidos son V8 (usado en Chrome), SpiderMonkey (Firefox) y Chakra (Edge).
- **Librería estándar:** Provee funciones básicas que no tienes que escribir desde cero, como trabajar con fechas, cadenas de texto y objetos.
- **Entorno global:** Proporciona acceso a variables y objetos predefinidos, como la ventana del navegador o el objeto `console`.
- **API:** Interfaz de programación de aplicaciones que te permite interactuar con el entorno externo, como el navegador, el sistema operativo o servidores remotos.
---
## En resumen:
- El runtime de JavaScript es esencial para ejecutar código JavaScript.
- Se compone de diferentes elementos que trabajan juntos para dar vida a tus programas.
- Existen diferentes tipos de runtime, dependiendo del entorno donde se ejecute el código JavaScript.


Referencia
- https://github.com/MohammedHamzaMalik/100-Days-of-JavaScript-Code
- https://www.explainthis.io/en/swe/javascript