<template>
  <v-card variant="text" rounded="lg">
    <v-img cover :src="props.cover" height="300"></v-img>
    <div class="d-flex justify-space-between mx-4">
      <v-avatar v-if="!avatar" color="surface-variant" size="125" class="profile-avatar"></v-avatar>
      <v-avatar v-else size="125" class="profile-avatar" :src="avatar"></v-avatar>

      <v-btn rounded="pill" class="mt-4" variant="outlined" to="/settings/profile">
        Edit Profile
      </v-btn>
    </div>
  </v-card>
  <v-card variant="text" class="mt-2">
    <v-card-title class="text-h4">
      <div class="d-flex align-center">
        <div class="text-h4" v-if="username">{{ username }}</div>
        <div class="text-h4" v-else>
          {{ formatShortAddress(address, 12) }}
          <AppCopyBtn :text="address" />
        </div>
      </div>
    </v-card-title>
    <v-card-subtitle v-if="username" class="text-h5" :style="{ lineHeight: '1.5rem' }">
      {{ formatShortAddress(address, 12) }}
      <AppCopyBtn :text="address" />
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import defaultCover from "~/assets/images/default-cover.png";

interface Props {
  address: string;
  cover?: string;
  avatar?: string;
  username?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cover: defaultCover,
  avatar: undefined,
  username: undefined,
});

</script>

<style scoped>
.profile-avatar {
  margin-top: -58px;
  border: 2px solid white;
}
</style>