<template>
  <app-page>
    <template #body>
      <AppProfileHeader :address="user!.address" :avatar="user!.avatar" :cover="user!.cover" :username="user!.username" />
    </template>
  </app-page>
</template>

<script setup lang="ts">

const user = useUserState()
if (!user.value) {
  navigateTo("/")
}
</script>