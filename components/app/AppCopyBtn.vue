<template>
  <v-btn v-bind="$attrs" color="grey-lighten-1" icon="mdi-content-copy" size="small" variant="text"
    @click.stop="copy(text)"></v-btn>
</template>

<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";

const { success } = useNotify();
const { copy, copied } = useClipboard();

defineProps<{
  text: string;
}>();

watchEffect(() => {
  if (copied.value) success("Copied to clipboard")
});
</script>
