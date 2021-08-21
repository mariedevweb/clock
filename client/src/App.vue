<template>
  <div id="app">
    <header class="page-header">
      <nav class="main-nav">
        <a class="github-link" href="https://github.com/mariedevweb/clock" target="_blank">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-icon="github-alt" data-prefix="fab" viewBox="0 0 480 512">
              <path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8a214 214 0 01-20.2-95 172 172 0 0141.5-113.6 156.5 156.5 0 01-7.7-48.8c0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36a383 383 0 0188.7-10c27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6a293.8 293.8 0 01-45.1 3.2c-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/>
          </svg>
          <span class="visually-hidden">This link will open in a new tab</span>
        </a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
.github-link {
  display: inline-block;
  position: fixed;
  padding: 54px 120px 16px;
  right: -105px;
  top: -25px;
  transform: rotate(45deg);
  background-color: rgba(#fff8f5, 0.85);
  color: #9c7887;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 20px 6px rgba(black, 0.25);
  @media (min-width: 768px) {
    padding-top: 65px;
    right: -105px;
    top: -25px;
    &:hover {
      right: -100px;
      top: -20px;
    }
  }
}
.icon {
  width: 28px;
  display: block;
  @media (min-width: 768px) {
    width: 40px;
  }
}
</style>
