<template>
  <nav class="nav">
    <h4>
      <router-link to="/" class="logo">Silohiya </router-link>
    </h4>
    <div>
      <ul class="nav-items">
        <li>
          <router-link to="/#about">About</router-link>
        </li>
        <li>
          <router-link to="/menu">Menu</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  color: black;
}
.logo:hover {
  color: black;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
}

.nav-items {
  display: flex;
  gap: 1rem;
  list-style: none;
}
</style>
