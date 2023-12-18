<template>
  <v-dialog persistent width="585" :model-value="props.modelValue"
    @update:model-value="$emit('update:modelValue', $event)">
    <v-card>
      <v-card variant="text">
        <v-img cover :src="props.cover" height="127" class="d-flex align-center text-center">
          <v-btn icon="mdi-camera" @click.stop="handleClose" variant="plain"></v-btn>
          <v-btn icon="mdi-close" @click.stop="handleClose" variant="plain"></v-btn>
        </v-img>
        <div class="d-flex justify-space-between mx-4">
          <v-avatar v-if="!avatar" color="surface-variant" size="86" class="profile-avatar">
            <v-btn icon="mdi-camera" @click.stop="handleClose" variant="plain"></v-btn>
          </v-avatar>
          <v-avatar v-else size="86" class="profile-avatar" :src="avatar">
            <v-btn icon="mdi-camera" @click.stop="handleClose" variant="plain"></v-btn>
          </v-avatar>
        </div>
      </v-card>
      <v-card-text>
        <v-text-field label="Username" variant="outlined"></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center px-6 py-3">
        <v-spacer></v-spacer>
        <v-btn class="w-25 pt-1" rounded="pill" color="grey-lighten-1" variant="text" @click.stop="handleClose">
          Cancel
        </v-btn>
        <v-btn class="w-25 pt-1" rounded="pill" color="primary" variant="flat" @click.stop="handleSave">
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
  margin-top: -43px;
  border: 2px solid white;
}
</style>