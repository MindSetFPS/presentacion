# Domain Driven Design

---

## ¿Qué es Domain-Driven Design (DDD)?

<div class="grid grid-cols-2 gap-4">
<div>

Es un enfoque de desarrollo de software que se centra en modelar el software para que coincida con el dominio de negocio al que sirve.

El objetivo principal es alinear el software más estrechamente con las necesidades del negocio que aborda.

</div>
<div>

</div>
</div>

---

## Conceptos Clave de DDD

DDD se divide en dos categorías principales:

- **Diseño Estratégico:** Se ocupa de la arquitectura y organización de alto nivel del sistema.
- **Diseño Táctico:** Se centra en los detalles de implementación dentro de un único contexto delimitado.

---

## Diseño Estratégico


Define el espacio del problema y descompone un sistema grande en partes manejables.

- **Dominio (Domain):** El área temática a la que se aplica el software.
- **Subdominio (Subdomain):** Descomposición de dominios grandes en partes más pequeñas (Core, Supporting, Generic).
- **Lenguaje Ubicuo (Ubiquitous Language):** Un lenguaje común y compartido por desarrolladores, expertos en el dominio y partes interesadas.
- **Contexto Delimitado (Bounded Context):** Un límite claro dentro del cual se define y es consistente un modelo de dominio específico.
- **Mapa de Contexto (Context Map):** Un diagrama que ilustra las relaciones entre diferentes contextos delimitados.


---

## Diseño Táctico

Proporciona un conjunto de patrones para construir el modelo de dominio.

- **Entidad (Entity):** Un objeto con una identidad única que permanece consistente a lo largo del tiempo.
- **Objeto de Valor (Value Object):** Un objeto inmutable definido por sus atributos en lugar de una identidad única.
- **Agregado (Aggregate):** Un clúster de entidades y objetos de valor asociados que se tratan como una sola unidad para los cambios de datos.
- **Repositorio (Repository):** Proporciona una interfaz para acceder y persistir agregados.
- **Servicio de Dominio (Domain Service):** Operaciones o lógica que no encajan de forma natural en una entidad u objeto de valor.
- **Evento de Dominio (Domain Event):** Un objeto que representa algo que sucedió en el dominio.
