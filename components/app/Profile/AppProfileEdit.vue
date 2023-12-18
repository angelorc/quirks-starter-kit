<template>
  <v-dialog persistent width="585" :model-value="props.modelValue"
    @update:model-value="$emit('update:modelValue', $event)">
    <v-card>
      <v-toolbar color="transparent">
        <v-toolbar-title>Edit Profile</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card variant="text">
        <v-img cover :src="props.cover" height="250" class="d-flex align-center text-center">
          <v-btn icon="mdi-camera" @click.stop="handleClose" variant="text">
          </v-btn>
        </v-img>
        <div class="d-flex justify-space-between mx-4">
          <v-avatar v-if="!avatar" color="surface-variant" size="125" class="profile-avatar"></v-avatar>
          <v-avatar v-else size="125" class="profile-avatar" :src="avatar"></v-avatar>
        </div>
      </v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded="pill" color="primary" variant="flat" @click.stop="handleSave">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <AppProfileEditDiscard v-model="discardAlert" @discard-changes="onDiscardChanges" />
  </v-dialog>
</template>

<script lang="ts" setup>
import defaultCover from "~/assets/images/default-cover.png";

interface Props {
  modelValue: boolean;
  cover?: string;
  avatar?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cover: defaultCover,
  avatar: undefined,
});

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const discardAlert = ref(false);

const handleClose = () => {
  discardAlert.value = true;
};

const handleSave = () => {
  emits("update:modelValue", false);
};

const onDiscardChanges = (value: boolean) => {
  if (value) {
    emits("update:modelValue", false);
  }
};
</script>

<style scoped>
.profile-avatar {
  margin-top: -58px;
  border: 2px solid white;
}
</style>