---
title: El Event Loop
description: Un mecanismo fundamental para la ejecución no bloqueante.
sidebar:
  label: Runtime
  order: 1
---

JavaScript es un lenguaje de programación de un solo subproceso, lo que significa que ejecuta una tarea a la vez. (bloqueante)
Sin embargo, gracias al modelo de concurrencia basado en el event loop, puede lograr el efecto de ejecución no bloqueante.




# El Event Loop 

el event loop Funciona como un bucle que verifica constantemente si hay tareas pendientes en la cola de mensajes (también conocida como message queue).

El Event Loop (ciclo de eventos) es un componente crucial en el runtime de JavaScript, responsable de la ejecución asíncrona de código y el manejo de eventos. Es como un organizador infatigable que mantiene el flujo de trabajo, garantizando que las tareas se ejecuten de manera eficiente y sin bloquear el navegador.




## ¿Cómo funciona el Event Loop de JavaScript?

1. Cola de Eventos: El Event Loop mantiene una cola donde se almacenan los eventos que se generan, como clics del mouse, solicitudes de red o temporizadores.

2. Procesamiento de Eventos: El Event Loop toma un evento de la cola y lo procesa, ejecutando el código asociado a ese evento.
   
3. Tareas Asíncronas: Si el evento involucra una tarea asíncrona, como una solicitud de red, el Event Loop la delega a un pool de hilos o a un web worker para que se ejecute en segundo plano.
   
4. Devolución de Control: Una vez que la tarea asíncrona se completa, el Event Loop recibe una notificación y programa una callback (función de retorno de llamada) para que se ejecute en un momento posterior.
   
5. Repetición del Ciclo: El Event Loop repite este proceso, tomando eventos de la cola, procesándose y manejando tareas asíncronas de manera no bloqueante.

## Componentes del Event Loop:

Cola de Eventos: Almacena los eventos que esperan ser procesados.

Pool de Hilos: Un grupo de hilos de ejecución que se encargan de las tareas asíncronas computacionalmente intensivas.
Web Workers: Hilos de ejecución independientes que permiten ejecutar código JavaScript en segundo plano sin bloquear el hilo principal.

Callback: Funciones que se ejecutan cuando una tarea asíncrona se completa.

API de Asincronía: Proporciona mecanismos para manejar tareas asíncronas, como setTimeout, XMLHttpRequest y Promises.


## Orden de Ejecución:

#### 1.- Código Síncrono: 
El código síncrono se ejecuta línea por línea, bloqueando el Event Loop hasta que finalice. 
```js
console.log('1. Ingreso al código síncrono'); // Se ejecuta inmediatamente
function mostrarNombre(nombre) {
  console.log('2. Función síncrona:', nombre);
}
mostrarNombre('Juan'); // Se ejecuta inmediatamente
console.log('3. Salida del código síncrono'); // Se ejecuta después de la función
```


#### 2.-  Eventos: 
Cuando ocurre un evento, se agrega a la cola de eventos y espera su turno para ser procesado. 

```js
document.addEventListener('click', function() {
  console.log('4. Evento click detectado'); // Se ejecuta cuando se hace clic en el elemento
});

console.log('5. Código posterior al evento'); // Se ejecuta antes del evento click
// Simulando un clic
document.dispatchEvent(new Event('click'));
```

#### 3.-  Tareas Asíncronas: 
Las tareas asíncronas se delegan al pool de hilos o a un web worker y se ejecutan en segundo plano. El Event Loop las programa para que se ejecuten en un momento posterior mediante callbacks. 
```js
console.log('6. Inicio de tarea asíncrona'); // Se ejecuta inmediatamente

setTimeout(function() {
  console.log('8. Tarea asíncrona completada'); // Se ejecuta después de 2 segundos
}, 2000);

console.log('7. Código posterior a la tarea asíncrona'); // Se ejecuta inmediatamente
```

#### 4.- Callbacks:
Las callbacks se ejecutan cuando las tareas asíncronas se completan, permitiendo que el código continúe su flujo. 
```JS
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('9. Promesa resuelta'); // Se ejecuta después de 2 segundos
  }, 2000);
});

promesa.then(function(resultado) {
  console.log(resultado); // Se ejecuta después de que la promesa se resuelva
});

console.log('10. Código posterior a la promesa'); // Se ejecuta inmediatamente
```


---
## ¿JavaScript es siempre un lenguaje bloqueante?
No, JavaScript no es un lenguaje inherentemente bloqueante. El Event Loop permite que el código JavaScript se ejecute de manera no bloqueante, mientras que las tareas asíncronas se ejecutan en segundo plano.

Sin embargo, existen algunas situaciones en las que el código JavaScript puede bloquear el Event Loop, como:

### Ejecución de código síncrono: 
La ejecución de código síncrono, como cálculos intensivos o bucles infinitos, puede bloquear el Event Loop y evitar que se procesen otros eventos, normalmente se puede solucionar con el uso de los web worker's.

### Uso inadecuado de APIs asíncronas: 
Si no se utilizan correctamente las callbacks o promesas, el código asíncrono puede bloquear el Event Loop y generar un comportamiento no deseado.


---
## ¿El Event Loop de JavaScript se comporta igual en todos los runtimes?

En general, el concepto fundamental del Event Loop es similar en la mayoría de los runtimes de JavaScript. Sin embargo, existen algunas diferencias sutiles en la implementación y optimización del Event Loop entre diferentes runtimes, como:

Eficiencia del pool de hilos: La eficiencia con la que se manejan las tareas asíncronas en el pool de hilos puede variar entre runtimes.
Optimizaciones específicas: Algunos runtimes pueden incluir optimizaciones específicas para ciertos tipos de eventos o tareas asíncronas.
Compatibilidad con APIs: La compatibilidad con APIs asíncronas específicas del navegador o del sistema operativo puede variar entre runtimes.





{/* 



El Event Loop de JavaScript es un mecanismo esencial que permite la ejecución no bloqueante del código y el manejo eficiente de eventos. Si bien el concepto fundamental es similar en la mayoría de los runtimes, existen algunas diferencias sutiles en la implementación y optimización. JavaScript no es un lenguaje inherentemente bloqueante, pero la ejecución de código síncrono o el uso inadecuado de APIs asíncronas pueden bloquear el Event Loop.


Cuando una tarea asíncrona, como un setTimeout o una solicitud de red, se completa, se coloca en la cola de mensajes.

El event loop toma las tareas de la cola y las ejecuta en el orden en que llegaron, asegurando que el programa sea reactivo y no se bloquee mientras espera tareas largas.

característica agregada por los navegadores a JavaScript para realizar operaciones asincrónas
sin bloquear la ejecución, distribuyendo el orden de prioridad de la cola de tareas enviandolos al stack 
la prioridad es, tareas de js > tareas web Apis > micro tareas webApis

### Bucle de Eventos (Event Loop):
El event loop es un bucle constante que monitorea tanto la cola de mensajes como la pila de llamadas.
Si la pila no está vacía, el event loop espera hasta que lo esté y luego coloca la siguiente función de la cola en la pila.
Si la cola está vacía, el event loop espera a que llegue un nuevo mensaje.
El procesamiento de funciones continúa hasta que la pila esté nuevamente vacía.
En resumen, el event loop coordina la ejecución de tareas asíncronas en JavaScript, asegurando que las operaciones no bloqueen la aplicación y manteniendo la capacidad de respuesta



### Pila de Llamadas (Call Stack):
La pila de llamadas es una estructura de datos que rastrea las llamadas a funciones en un programa.
Cada vez que se llama a una función, se agrega un marco de pila que contiene referencias a los argumentos y variables locales de esa función.
Cuando una función se completa, su marco se elimina de la parte superior de la pila.
El orden de ejecución sigue el principio “último en entrar, primero en salir” (LIFO).
Ejemplo: Si llamamos a la función bar, se crea un marco de pila para ella, y si bar llama a foo, se crea otro marco de pila para foo encima del de bar.
el registro guarda en memoria los datos de el [execution context](#execution-context) y su entorno léxico durante la ejecución
guarda el orden de ejecucion de las funciones, la creacion y destrucion del entorno lexico y su registro en memoria

### Objetos en el Montón (Heap):
Los objetos en JavaScript se asignan en el montón, que es una región grande de memoria.
El montón almacena objetos de forma no estructurada y se gestiona automáticamente por el motor V8.
Los objetos en el montón persisten incluso después de que se eliminen los marcos de pila.

### Cola de Mensajes (Message Queue):
La cola de mensajes es una lista de mensajes que deben procesarse.
Cada mensaje tiene una función asociada que se ejecutará para manejarlo.
Durante el event loop, el motor de JavaScript procesa los mensajes en la cola, comenzando por el más antiguo.
Cuando se procesa un mensaje, se elimina de la cola y se llama a la función correspondiente.
Ejemplos de tareas en la cola incluyen setTimeout, fetch y eventos del DOM.

### cola de tareas
determina el orden de prioridad de ejecucion de las tareas web api
el orden de ejecucion de tareas del call stack es el siguiente 
1. tarea [javascript puro]
2. micro tarea web-api 
3. Tarea web-api

## las WEB API's
son características no propias de js si no del navegador que permiten manejar funciones mas lentas sin bloquear la ejecución
distribuye el orden de ejecución en la [cola de tareas]() dependiendo de su prioridad

- tarea
  - setTimeout | setInterval
  - fetch
  - Intersection DOM
- micro tarea
  - Promise
  - async await
  - process.NextTick
  - mutation observer
  - insertection

 */}

