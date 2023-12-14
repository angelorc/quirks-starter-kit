<template>
  <v-btn v-if="!connected" color="primary" rounded="pill" variant="flat" @click.stop="dialog = true">
    Connect
  </v-btn>
  <v-btn v-else icon="mdi-logout" rounded="pill" variant="text" @click.stop="disconnect">
  </v-btn>
  <AppConnectDialog v-model="dialog" />
</template>

<script setup lang="ts">
const { connected, disconnect } = useConnect();

const dialog = ref(false);
</script>
