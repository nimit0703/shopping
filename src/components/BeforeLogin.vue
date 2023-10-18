<template>
  <div class="beforeLogin">
    <div class="beforeLogin-content">
      <p>Login First</p>
      <router-link to="login">Login</router-link>
    </div>
  </div>
</template>

<style>
.beforeLogin {
  position: fixed;
  background-color: hsla(0, 0%, 0%, 0.58);
  top: 0;
  left: 20vw;
  width: 100%;
  height: 100%;
  z-index: 100;
  backdrop-filter: blur(8px);
  color: #fff;
}
.beforeLogin-content {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30vh;
  left: 30vw;
  align-items: center;
  font-size: 2vw;
}
.beforeLogin-content p {
  font-size: 3vw;
}
</style>
