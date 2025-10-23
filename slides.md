  <!-- Imagen de fondo -->

<img 
    src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332" 
    class="absolute inset-0 w-full h-full object-cover"
  />

  <!-- Overlay oscuro -->
  <div class="absolute inset-0 bg-black opacity-30"></div>

  <!-- Contenido encima -->
  <div class="relative z-10 text-white">
    <h1 class=" text-center text-6xl font-bold ">Arquitectura de Cebolla</h1>
    <h2 class=" text-center text-4xl mt-5">(Onion Architecture)</h2>

<div class="pt-6">
      <span
        @click="$slidev.nav.next"
        class="continue-btn flex justify-center items-center gap-2 text-lg"
      >
        Presiona <kbd>Espacio</kbd> para continuar
        <div class="i-carbon:arrow-right inline-block"></div>
      </span>
    </div>
  </div>

---

# ¿Qué es la Arquitectura de Cebolla?

- Propuesta por **Jeffrey Palermo** 🧑‍💻
- Se basa en **capas concéntricas** (como una cebolla)
- Busca **separar responsabilidades** (Separation of Concerns)
- Invierte el flujo de dependencias tradicional

> 💡 El **núcleo (Dominio)** no depende de nada externo. Las capas externas dependen de las internas.
> ![Computadora encendida](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170){.rounded .shadow-lg .w-12 .h-12 object-cover}

---

<div class="slidev-slide flex flex-row justify-between items-center h-screen w-full text-left">
  <!-- Columna izquierda: texto -->
  <div class="w-1/2 pb-30">
    <h1 class="text-4xl font-bold mb-2">El Problema que Resuelve</h1>
    <ul class="list-disc list-inside text-lg ">
      <li><strong>Acoplamiento Fuerte:</strong> En arquitecturas tradicionales, la lógica de negocio (el "cómo") suele estar mezclada con la infraestructura (BD, APIs, Frameworks).</li>
      <li><strong>Dificultad para Probar:</strong> Es difícil probar la lógica de negocio sin levantar una base de datos o un servidor web.</li>
      <li><strong>Mantenimiento Complejo:</strong> Un cambio en la base de datos puede forzar cambios en la lógica de negocio.</li>
    </ul>
  </div>

  <!-- Columna derecha: imagen -->
  <div class="w-1/2 flex justify-center">
    <img 
      src="https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1128" 
      alt="Representación del núcleo" 
      class="rounded shadow-lg w-200 h-200 object-cover ml-28"
    />
  </div>
</div>

---

<div class="slidev-slide flex flex-row justify-between items-start h-screen w-full text-left ">
  <!-- Columna derecha: imagen -->
  <div class="w-1/2 flex justify-center">
    <img 
      src="https://images.unsplash.com/vector-1761074651005-97a2e57eef29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" 
      alt="Principios de Onion Architecture" 
      class="rounded  w-140 h-130 object-cover mr-30"
    />
  </div>

  <!-- Columna izquierda: texto -->
  <div class="w-1/2 pt-10">
    <h1 class="text-4xl font-bold mb-4">Principios Básicos</h1>
    <ul class="list-disc list-inside text-lg space-y-2">
      <li>🧩 <strong>Independencia de Frameworks:</strong> El núcleo no sabe qué framework UI o de BD se usa.</li>
      <li>🧪 <strong>Alta Capacidad de Pruebas (Testability):</strong> El dominio se puede probar de forma aislada.</li>
      <li>🧲 <strong>Inversión de Dependencias:</strong> Todas las dependencias fluyen hacia el centro.</li>
      <li>🧭 <strong>Separación de Responsabilidades:</strong> Cada capa tiene un único propósito.</li>
    </ul>
    <p class="mt-4 italic">El código del Dominio (Core) debe ser "puro", sin referencias externas.</p>
  </div>
</div>

---

<div class="slidev-slide flex flex-row justify-between items-start h-screen w-full text-left">
  <!-- Columna izquierda: lista de capas -->
  <div class="w-1/2 ">
    <h1 class="text-2xl font-bold">Estructura de Capas</h1>
    <ol class="list-decimal list-inside text-lg">
      <li>
        <strong>Dominio (Core)</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Entidades del negocio (Ej: <strong>Pedido</strong>, <strong>Cliente</strong>)</li>
          <li>Reglas de negocio puras</li>
          <li><strong>Interfaces</strong> de repositorios (Ej: <strong>IPedidoRepository</strong>)</li>
        </ul>
      </li>
      <li>
        <strong>Aplicación</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Casos de uso (Ej: <strong>CrearPedidoUseCase</strong>)</li>
          <li>Lógica de la aplicación (orquestación)</li>
          <li>Depende del Dominio</li>
        </ul>
      </li>
      <li>
        <strong>Infraestructura y Presentación (Capas Externas)</strong>
        <ul class="list-disc list-inside ml-4">
          <li>UI, API REST, Controladores</li>
          <li>Implementaciones de Repositorios (Ej: <strong>PedidoRepositorySQL</strong>)</li>
          <li>Servicios externos, SDKs</li>
          <li>Dependen de la Aplicación</li>
        </ul>
      </li>
    </ol>
  </div>

  <!-- Columna derecha: imagen -->
  <div class="w-1/2 flex justify-center">
    <img 
      src="https://plus.unsplash.com/premium_vector-1734127305687-4440bad6d7a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025" 
      alt="Arquitectura en capas" 
      class="rounded shadow-lg w-120 h-130 object-cover ml-27"
    />
  </div>
</div>


---

<div class="slidev-slide flex flex-col justify-start items-center h-screen w-full text-left px-16 pt-6">

  <!-- Título arriba -->
  <h1 class="text-4xl font-bold mb-10 text-center w-full">🧾 Ejemplo: Sistema de Pedidos</h1>

  <!-- Contenedor de las dos columnas -->
  <div class="flex flex-row justify-between items-start w-full gap-">
    <div class="w-1/2 max-w-[48%]">
      <h2 class="text-2xl font-semibold mb-2">Dominio</h2>
      <ul class="list-disc list-inside text-lg ml-4">
        <li>Entidad <code>Pedido</code></li>
        <li>Interface <code>IPedidoRepository</code> (con método <code>Guardar(Pedido p)</code>)</li>
        <li>Caso de Uso <code>RegistrarPedido(datos)</code></li>
        <li>Llama a <code>IPedidoRepository.Guardar(...)</code></li>
      </ul>
    </div>
    <div class="w-1/2 max-w-[48%]">
      <h2 class="text-2xl font-semibold mb-2">Infraestructura</h2>
      <ul class="list-disc list-inside text-lg ml-4">
        <li><code>&lt;PedidoRepositorySQL&gt;</code> (implementa <code>&lt;IPedidoRepository&gt;</code>)</li>
        <li>Usa Entity Framework o SQL puro para guardar en la BD</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-2">Presentación</h2>
      <ul class="list-disc list-inside text-lg ml-4">
        <li><code>&lt;PedidosController&gt;</code> (API REST)</li>
        <li>Recibe el JSON, llama al Caso de Uso <code>&lt;RegistrarPedido&gt;</code></li>
      </ul>
    </div>

  </div>

</div>

---

# Ventajas vs. Desventajas

<div class="col-left mt-10">

## Ventajas

- **Mantenible:** Código limpio y desacoplado
- **Testable:** Pruebas unitarias fáciles para el Dominio y la Aplicación (puedes "mockear" la infraestructura)
- **Flexible:** Fácil cambiar la base de datos (de SQL a Mongo) o la UI (de Web a App Móvil) sin tocar el núcleo
- **Escalable:** Las responsabilidades claras ayudan a crecer

</div>

<div class="col-right mt-10">

## Desventajas

- **Complejidad Inicial:** Más "ceremonia" o archivos (clases, interfaces) al principio
- **Curva de Aprendizaje:** Requiere entender bien la Inyección de Dependencias
- **Excesivo (Overhead):** Puede ser demasiado para proyectos muy pequeños o simples (Ej: un CRUD simple)

</div>
