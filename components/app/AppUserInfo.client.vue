<template>
  <pre>{{ user }}</pre>
</template>

<script setup lang="ts">
import { useWalletEvents } from "@quirks/vue";

const user = useUser();

const { disconnect } = useConnect();

useWalletEvents("keystorechange", () => {
  disconnect()
});
</script>