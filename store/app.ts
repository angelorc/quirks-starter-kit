import { defineStore } from "pinia";

interface AppState {
  drawer: boolean;
  chain: string;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    drawer: false,
    chain: "bitsong",
  }),
  actions: {
    setChain(chain: string) {
      this.chain = chain;
    },
    openDrawer() {
      this.drawer = true;
    },
    closeDrawer() {
      this.drawer = false;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
