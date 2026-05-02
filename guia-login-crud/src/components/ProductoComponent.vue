<template>
  <div class="container mt-4">
    <h3>Gestión de Productos</h3>
    <div class="row mb-4">
      <div class="col-md-5">
        <input v-model="nuevo.nombre" class="form-control" placeholder="Nombre del producto" />
      </div>
      <div class="col-md-3">
        <input v-model="nuevo.precio" class="form-control" placeholder="Precio" type="number" />
      </div>
      <div class="col-md-2">
        <button class="btn btn-success w-100" @click="agregar">➕ Agregar</button>
      </div>
    </div>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr><th>Nombre</th><th>Precio</th><th>Acciones</th></tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in productos" :key="i">
          <td>{{ p.nombre }}</td>
          <td>${{ p.precio }}</td>
          <td><button @click="eliminar(i)" class="btn btn-danger btn-sm">🗑️ Eliminar</button></td>
        </tr>
        <tr v-if="productos.length === 0">
          <td colspan="3" class="text-center text-muted">No hay productos</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      nuevo: { nombre: '', precio: '' }
    }
  },
  created() {
    const data = localStorage.getItem('productos')
    this.productos = data ? JSON.parse(data) : []
  },
  methods: {
    agregar() {
      if (!this.nuevo.nombre.trim() || !this.nuevo.precio) {
        alert('Completa todos los campos')
        return
      }
      this.productos.push({ ...this.nuevo })
      localStorage.setItem('productos', JSON.stringify(this.productos))
      this.nuevo = { nombre: '', precio: '' }
    },
    eliminar(index) {
      if (confirm('¿Eliminar este producto?')) {
        this.productos.splice(index, 1)
        localStorage.setItem('productos', JSON.stringify(this.productos))
      }
    }
  }
}
</script>