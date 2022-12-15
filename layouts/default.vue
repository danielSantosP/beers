<template>
  <div class="layout">
    <header>
      <h1>Beers</h1>
    </header>
    <slot />
    <footer class="footer">
      <span>
        &copy; <b>Copyright {{ new Date().getFullYear() }}</b>
      </span>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer {
  display: flex;
  font-size: 1.15rem;
  justify-content: center;
  align-content: center;
}
</style>
