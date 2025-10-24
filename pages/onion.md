---
layout: cover
background: https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332
backgroundDimmer: 0.3
---

# Arquitectura de Cebolla
## (Onion Architecture)

---

# ¿Qué es la Arquitectura de Cebolla?

- Propuesta por **Jeffrey Palermo** 🧑‍💻
- Se basa en **capas concéntricas** (como una cebolla)
- Busca **separar responsabilidades** (Separation of Concerns)
- Invierte el flujo de dependencias tradicional

> 💡 El **núcleo (Dominio)** no depende de nada externo. Las capas externas dependen de las internas.
> ![Computadora encendida](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170){.rounded .shadow-lg .w-12 .h-12 .object-cover}

---
layout: two-cols
---

# El Problema que Resuelve

- **Acoplamiento Fuerte:** En arquitecturas tradicionales, la lógica de negocio (el "cómo") suele estar mezclada con la infraestructura (BD, APIs, Frameworks).
- **Dificultad para Probar:** Es difícil probar la lógica de negocio sin levantar una base de datos o un servidor web.
- **Mantenimiento Complejo:** Un cambio en la base de datos puede forzar cambios en la lógica de negocio.

::right::

<div class="flex justify-center items-center h-full">
  <img 
    src="https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1128" 
    alt="Representación del núcleo" 
    class="rounded-lg shadow-lg max-h-full"
  />
</div>

---
layout: two-cols
---

<div class="flex justify-center items-center h-full">
  <img 
    src="https://images.unsplash.com/vector-1761074651005-97a2e57eef29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" 
    alt="Principios de Onion Architecture" 
    class="rounded-lg shadow-lg max-h-full"
  />
</div>

::right::

# Principios Básicos

- 🧩 **Independencia de Frameworks:** El núcleo no sabe qué framework UI o de BD se usa.
- 🧪 **Alta Capacidad de Pruebas (Testability):** El dominio se puede probar de forma aislada.
- 🧲 **Inversión de Dependencias:** Todas las dependencias fluyen hacia el centro.
- 🧭 **Separación de Responsabilidades:** Cada capa tiene un único propósito.

<p class="mt-4 italic">El código del Dominio (Core) debe ser "puro", sin referencias externas.</p>

---
layout: two-cols
---

# Estructura de Capas

1.  **Dominio (Core)**
    - Entidades del negocio (Ej: **Pedido**, **Cliente**)
    - Reglas de negocio puras
    - **Interfaces** de repositorios (Ej: **IPedidoRepository**)
2.  **Aplicación**
    - Casos de uso (Ej: **CrearPedidoUseCase**)
    - Lógica de la aplicación (orquestación)
    - Depende del Dominio
3.  **Infraestructura y Presentación (Capas Externas)**
    - UI, API REST, Controladores
    - Implementaciones de Repositorios (Ej: **PedidoRepositorySQL**)
    - Servicios externos, SDKs
    - Dependen de la Aplicación

::right::

<div class="flex justify-center items-center h-full">
  <img 
    src="https://plus.unsplash.com/premium_vector-1734127305687-4440bad6d7a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025" 
    alt="Arquitectura en capas" 
    class="rounded-lg shadow-lg max-h-full"
  />
</div>

---

# 🧾 Ejemplo: Sistema de Pedidos

<div class="grid grid-cols-2 gap-8 pt-4">
<div>

## Dominio
- Entidad `Pedido`
- Interface `IPedidoRepository` (con método `Guardar(Pedido p)`)
- Caso de Uso `RegistrarPedido(datos)`
- Llama a `IPedidoRepository.Guardar(...)`

</div>
<div>

## Infraestructura
- `PedidoRepositorySQL` (implementa `IPedidoRepository`)
- Usa Entity Framework o SQL puro para guardar en la BD

## Presentación
- `PedidosController` (API REST)
- Recibe el JSON, llama al Caso de Uso `RegistrarPedido`

</div>
</div>

---

# Ventajas vs. Desventajas

<div class="grid grid-cols-2 gap-8 pt-4">
<div>

## Ventajas

- **Mantenible:** Código limpio y desacoplado
- **Testable:** Pruebas unitarias fáciles para el Dominio y la Aplicación (puedes "mockear" la infraestructura)
- **Flexible:** Fácil cambiar la base de datos (de SQL a Mongo) o la UI (de Web a App Móvil) sin tocar el núcleo
- **Escalable:** Las responsabilidades claras ayudan a crecer

</div>
<div>

## Desventajas

- **Complejidad Inicial:** Más "ceremonia" o archivos (clases, interfaces) al principio
- **Curva de Aprendizaje:** Requiere entender bien la Inyección de Dependencias
- **Excesivo (Overhead):** Puede ser demasiado para proyectos muy pequeños o simples (Ej: un CRUD simple)

</div>
</div>

