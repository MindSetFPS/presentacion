# Arquitectura Hexagonal

<div class="grid grid-cols-2 gap-4">
<div>

También conocida como el patrón de "puertos y adaptadores", es un patrón de diseño de software que aísla la lógica de negocio central de una aplicación de los componentes externos.

El objetivo principal es crear un sistema poco acoplado en el que la aplicación central pueda desarrollarse y probarse de forma aislada de los servicios que consume o por los que es consumida.

</div>
<div>

<img src="/ImagesClean/api.png" alt="API" style="height: 300px; width: auto; margin: auto;"/>

</div>
</div>

---

## Conceptos Fundamentales

El nombre "hexagonal" proviene de la representación visual del núcleo de la aplicación como un hexágono, con las diferentes partes externas interactuando con él a través de sus lados.

- **El Núcleo (o Hexágono):** Es la parte central de la aplicación, que contiene la lógica de negocio y el modelo de dominio.
- **Puertos:** Son interfaces definidas por la aplicación central. Actúan como contratos que especifican cómo el núcleo se comunica con el mundo exterior.
- **Adaptadores:** Son las implementaciones concretas de los puertos. Actúan como el pegamento entre el núcleo y el mundo exterior.

---

## Tipos de Puertos

<div class="grid grid-cols-2 gap-4">
<div>

### Puertos Primarios (Driving)

Son APIs expuestas por el núcleo que permiten a los actores externos (como una interfaz de usuario o un framework de pruebas) impulsar la aplicación.

</div>
<div>

### Puertos Secundarios (Driven)

Son interfaces que el núcleo requiere para conectarse a servicios externos que necesita, como bases de datos, APIs externas o colas de mensajes.

</div>
</div>

<img class="h-64 mx-auto" src="https://miro.medium.com/v2/resize:fit:1400/0*3FZGIgynXuegHO4Y.">

---

## Beneficios de la Arquitectura Hexagonal

<div class="grid grid-cols-2 gap-4">
<div>

- **Separación de Preocupaciones:** Crea una clara separación entre la lógica de negocio central y las preocupaciones de infraestructura.
- **Mejora de la Testeabilidad:** La lógica del núcleo puede ser fácilmente probada con pruebas unitarias utilizando implementaciones simuladas de los puertos.
- **Flexibilidad y Adaptabilidad:** Las tecnologías externas, como las bases de datos o los frameworks web, pueden intercambiarse con un impacto mínimo en la aplicación central.
- **Decisiones Tecnológicas Retrasadas:** El desarrollo puede comenzar en la lógica de negocio central sin tomar decisiones finales sobre qué base de datos o framework web utilizar.
- **Mantenibilidad Mejorada:** La naturaleza desacoplada de la arquitectura hace que el sistema sea más fácil de entender, mantener y escalar.

</div>
<div>


</div>
</div>

---

# Ejemplo

<img src="/ImagesClean/image.png" alt="Aplicaciones" style="height: auto; width: auto; margin: auto;"/>

---

## Casos de Uso

La arquitectura hexagonal es particularmente adecuada para:

- Sistemas complejos que necesitan integrarse con múltiples servicios externos.
- Aplicaciones empresariales a largo plazo que se espera que evolucionen.
- Microservicios, ya que ayuda a mantener cada servicio independiente y modular.
- Modernización de sistemas heredados encapsulando la lógica de negocio existente.
