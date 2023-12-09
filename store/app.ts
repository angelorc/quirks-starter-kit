import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    drawer: false,
  }),
  actions: {
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
