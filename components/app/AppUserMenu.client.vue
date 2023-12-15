<template>
  <div v-if="connected" class="d-flex align-center">
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-list style="cursor: pointer;" v-bind="props" bg-color="transparent" variant="text" density="comfortable"
          rounded="pill">
          <v-list-item :prepend-avatar="defaultImage" :title="formatShortAddress(address, 6)" subtitle="0 BTSG">
          </v-list-item>
        </v-list>
      </template>

      <v-card min-width="300">
        <div class="py-3 text-center flex-grow-1">
          <v-avatar size="80">
            <v-img :src="defaultImage" :alt="accountName"></v-img>
          </v-avatar>
          <v-card-title>
            {{ accountName }}
          </v-card-title>
          <v-btn icon="mdi-pencil" size="small" variant="flat" rounded="pill"></v-btn>
          <v-btn icon="mdi-refresh" size="small" variant="flat" rounded="pill"></v-btn>
          <v-btn icon="mdi-content-copy" size="small" variant="flat" rounded="pill"></v-btn>
        </div>
        <v-divider></v-divider>
        <v-list density="comfortable">
          <v-list-item append-icon="mdi-account" to="/profile" @click="menu = false">
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item>
          <v-list-item append-icon="mdi-cogs" to="/profile" @click="menu = false">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-btn @click.stop="disconnect" prepend-icon="mdi-logout" block rounded="pill" variant="outlined"
            color="primary">Disconnect</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import defaultImage from "@/assets/images/default.png";
const { address, accountName } = useChain("bitsong")
const { disconnect, connected } = useConnect();

const menu = ref(false);
</script>