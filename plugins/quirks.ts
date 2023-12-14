import {
  bitsong,
  bitsongAssetList,
  osmosis,
  osmosisAssetList,
} from "@nabla-studio/chain-registry";
import type { Config } from "@quirks/store";
import { keplrExtension, leapExtension, cosmostationExtension } from "@quirks/wallets";

import { assertIsDefined, getEndpoint } from "@quirks/core";
import type { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useAppStore } from "~/store/app";

const config: Config = {
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
};

declare module "#app" {
  interface NuxtApp {
    $client: CosmWasmClient;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $client: CosmWasmClient;
  }
}

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(quirksPlugin, config);

  const appStore = useAppStore();
  const { chain: chainName } = storeToRefs(appStore);

  const client = ref<CosmWasmClient>();

  const chain = getChain(chainName.value);
  assertIsDefined(chain);

  let endpoint = getEndpoint(chainName.value, config.chains);
  if (chainName.value === 'bitsong') {
    endpoint = {
      rpc: {
        address: 'https://rpc.explorebitsong.com',
      },
      rest: {
        address: 'https://lcd.explorebitsong.com',
      },
    }
  }

  const CosmWasmClient = (await import("@cosmjs/cosmwasm-stargate"))
    .CosmWasmClient;
  client.value = await CosmWasmClient.connect(endpoint.rpc.address)

  if (process.client) {
    watch(chainName, async () => {
      console.log('changed', chainName.value)
      const chain = getChain(chainName.value);
      assertIsDefined(chain);

      let endpoint = getEndpoint(chainName.value, config.chains);
      if (chainName.value === 'bitsong') {
        endpoint = {
          rpc: {
            address: 'https://rpc.explorebitsong.com',
          },
          rest: {
            address: 'https://lcd.explorebitsong.com',
          },
        }
      }
      console.log(endpoint)

      const CosmWasmClient = (await import("@cosmjs/cosmwasm-stargate"))
        .CosmWasmClient;
      client.value = await CosmWasmClient.connect(endpoint.rpc.address)
    }, { immediate: true })
  }

  nuxtApp.vueApp.provide("$client", client);
  nuxtApp.provide("client", unref(client));

});