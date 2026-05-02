<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h3 class="mb-4 text-center">Iniciar Sesión</h3>
    <input v-model="usuario" class="form-control mb-2" placeholder="Usuario" />
    <input v-model="clave" type="password" class="form-control mb-3" placeholder="Contraseña" />
    <button class="btn btn-primary w-100" @click="login">Entrar</button>
    <p v-if="error" class="text-danger mt-3 text-center">{{ error }}</p>
  </div>
</template>

<script>
import users from '@/assets/usuarios.json'

export default {
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const valido = users.find(
        (u) => u.user === this.usuario && u.pass === this.clave
      )
      if (valido) {
        localStorage.setItem('logueado', 'true')
        this.$router.push('/dashboard')
      } else {
        this.error = 'Credenciales incorrectas'
      }
    }
  }
}
</script>