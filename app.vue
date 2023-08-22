<template>
<div>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,500&family=Roboto:wght@100&display=swap');

  * {
    font-family: 'Josefin Sans', sans-serif;
  }

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>