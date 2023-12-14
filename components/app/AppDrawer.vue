<template>
  <v-navigation-drawer :permanent="mdAndUp" :temporary="mdAndDown" v-model="drawer">
    <template #prepend>
      <div class="d-flex pt-3 pb-1 pl-4">
        <div><app-logo> </app-logo></div>
        <div class="ml-3 text-h5 d-flex align-center mr-2">Podcast</div>
        <div class="d-flex align-center">
          <v-chip color="primary" class="text-capitalize">{{ network }}</v-chip>
        </div>
      </div>
    </template>

    <div v-if="connected">
      <v-list class="pb-0">
        <v-list-item class="pr-1" :title="accountName" :subtitle="formatShortAddress(address, 6)">
          <template v-slot:append>
            <app-copy-btn :text="address ?? ``"></app-copy-btn>
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

    <!--<template #append>
      <v-container>
        <v-row>
          <v-col>
            <v-select v-model="selectedChain" :items="chains" :item-props="chainProps" variant="outlined"></v-select>
          </v-col>
        </v-row>
      </v-container>
    </template>-->
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";
import { storeToRefs } from "pinia";
import {
  bitsong,
  osmosis,
} from "@nabla-studio/chain-registry";

const selectedChain = ref({ chain_id: bitsong.chain_id, name: bitsong.chain_name })

const chains = computed(() => {
  return [
    { chain_id: bitsong.chain_id, name: bitsong.chain_name },
    { chain_id: osmosis.chain_id, name: osmosis.chain_name },
  ];
});

const chainProps = (chain: { name: string; chain_id: string }) => {
  return {
    title: chain.name,
    subtitle: chain.chain_id,
  }
}

const { mdAndUp, mdAndDown } = useDisplay();

const { drawer } = storeToRefs(useAppStore());
const loading = ref(false);
const balance = ref(0);
const { connected, disconnect } = useConnect();

const { address, accountName } = useChain(selectedChain.value.name)

const getBalance = async () => {
  if (!address) return;

  loading.value = true;

  try {
    const denom = (await import("@quirks/store")).getChain(selectedChain.value.name)?.staking?.staking_tokens[0].denom
    const getAddress = (await import("@quirks/store")).getAddress;
    const address = getAddress(selectedChain.value.name);
    console.log(address)

    const { $client } = useNuxtApp()
    const coin = await $client.getBalance(address!, denom || 'ubtsg');
    console.log(coin)
    if (coin === undefined) {
      balance.value = 0;
      return;
    }

    balance.value = Number(coin.amount) / 1000000;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  drawer.value = mdAndUp.value;
  getBalance();
});

watch(selectedChain, async () => {
  const { setChain } = useAppStore();
  setChain(selectedChain.value.name)

  await new Promise(resolve => setTimeout(resolve, 1000));

  getBalance();
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
