<template>
  <app-page>
    <template #title>
      Ciao
    </template>
    <template #body>
      <AppUserInfo />

      <v-file-input :disabled="loading" v-model="files" label="File input" outlined dense accept="image/*"></v-file-input>
      <v-btn @click.stop="upload" :loading="loading"> Upload </v-btn>

      <a v-if="cid" target="_blank" :href="`https://nftstorage.link/ipfs/${cid}`">{{ cid }}</a>
    </template>
  </app-page>
</template>

<script setup lang="ts">
const files = ref<File[]>([])
const loading = ref(false)
const cid = ref<string | undefined>(undefined)

const upload = async () => {
  loading.value = true
  cid.value = undefined

  if (files.value.length === 0) {
    loading.value = false
    return
  }

  try {
    const formData = new FormData()
    formData.append('file', files.value[0], files.value[0].name)

    const data = await $fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    cid.value = data.cid as string
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}
</script>
