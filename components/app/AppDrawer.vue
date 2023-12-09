<template>
  <v-navigation-drawer :permanent="mdAndUp" :temporary="mdAndDown" v-model="drawer">
    <template #prepend>
      <div class="d-flex pt-3 pb-1 pl-4">
        <div><app-logo> </app-logo></div>
        <div class="ml-3 text-h5 d-flex align-center mr-2">Team</div>
        <div class="d-flex align-center">
          <v-chip color="primary" class="text-capitalize">{{ network }}</v-chip>
        </div>
      </div>
    </template>

    <!--<div v-if="isLoggedIn">
      <v-list class="pb-0">
        <v-list-item class="pr-1" :title="name" :subtitle="formatShortAddress(address, 6)">
          <template v-slot:append>
            <app-btn-copy :text="address ?? ``"></app-btn-copy>
            <v-btn icon="mdi:mdi-logout" color="grey-lighten-1" size="small" variant="text"
              @click.stop="disconnect"></v-btn>
          </template>
        </v-list-item>
        <v-list-item :subtitle="`Balance: ${balance.toLocaleString()} BTSG`">
          <template v-slot:append>
            <v-btn :loading="loading" icon="mdi-refresh" color="grey-lighten-1" size="small" variant="text"
              @click.stop="getBalance"></v-btn>
          </template>
        </v-list-item>
      </v-list>
    </div>

    <v-list nav>
      <div v-for="item in navItems" :key="item.to">
        <v-list-item :exact="item.exact" :to="item.to" :prepend-icon="item.icon" v-if="!item.onlyLoggedIn || isLoggedIn"
          rounded="lg">
          <v-list-item-title class="text-body-1">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </div>
    </v-list>-->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";
import { storeToRefs } from "pinia";

const { mdAndUp, mdAndDown } = useDisplay();

const { drawer } = storeToRefs(useAppStore());
onBeforeMount(() => {
  drawer.value = mdAndUp.value;
});

const network = computed(() => useRuntimeConfig().public.network);

interface NavItem {
  title: string;
  icon: string;
  to: string;
  onlyLoggedIn?: boolean;
  exact?: boolean;
}

const navItems = computed<NavItem[]>(() => {
  return [
    {
      title: "Home",
      icon: "mdi-home",
      to: "/",
      onlyLoggedIn: false,
      exact: true,
    },
    {
      title: "FT Distributor",
      icon: "fa:fas fa-sack-dollar",
      to: "/fantoken-distributor",
      onlyLoggedIn: true,
      exact: true,
    },
    {
      title: "Mutlisig",
      icon: "fa:fas fa-sack-dollar",
      to: "/multisig",
      onlyLoggedIn: true,
      exact: true,
    },
    {
      title: "Mutlisig Broadcast",
      icon: "fa:fas fa-sack-dollar",
      to: "/multisig-broadcast",
      onlyLoggedIn: true,
      exact: true,
    },
    {
      title: "Open Proposal",
      icon: "fa:fas fa-sack-dollar",
      to: "/proposal",
      onlyLoggedIn: true,
      exact: true,
    },
  ];
});
</script>
