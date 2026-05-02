<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <span class="navbar-brand">📋 Panel Admin</span>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard/productos" class="nav-link">📦 Productos</router-link>
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link" style="cursor: pointer;">🚪 Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('logueado')
      this.$router.push('/')
    }
  }
}
</script>