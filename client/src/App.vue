<template>
  <div id="app">
    <header class="page-header">
      <nav class="main-nav">
        <router-link to="/">
          <h1 class="page-title">Clock challenge</h1>
        </router-link>
        <a class="github-link" href="https://github.com/mariedevweb/clock" target="_blank">
          See on github
          <span class="visually-hidden">This link will open in a new tab</span>
        </a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
