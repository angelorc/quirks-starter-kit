<template>
  <pre></pre>
</template>

<script setup lang="ts">
import { useWalletEvents } from "@quirks/vue";

//const user = useUser();

useWalletEvents("keystorechange", () => {
  console.log("Keystore Changed");
});
</script>