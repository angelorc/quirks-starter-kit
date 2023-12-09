<template>
  <app-page>
    <template #title>
      Ciao
    </template>
    <template #body>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import { useConnect, useConfig, useChains } from "@quirks/vue";
const { wallets } = useConfig();

console.log(wallets)
</script>
