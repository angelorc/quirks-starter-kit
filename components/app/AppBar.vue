<template>
  <v-app-bar elevation="0" color="#121212">
    <v-btn v-if="mdAndDown" @click.stop="toggleDrawer" variant="text" icon="mdi-menu"></v-btn>
    <div class="d-flex pt-3 pb-1">
      <div class="ml-3 text-h5 mt-1">
        <NuxtLink to="/" class="text-white text-decoration-none">Interchain.fm</NuxtLink>
      </div>
    </div>
    <template #append>
      <client-only>
        <AppConnectBtn />
      </client-only>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";

const { toggleDrawer } = useAppStore();
const { mdAndDown } = useDisplay();
</script>
