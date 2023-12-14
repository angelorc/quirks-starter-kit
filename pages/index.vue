<template>
  <app-page>
    <template #body>
      <v-container>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-row>
              <v-col cols="auto">
                <NuxtImg height="340" width="340"
                  src="https://image.simplecastcdn.com/images/c755dd62-dcde-4872-9a66-99ab36749c8e/94090afe-8545-4dc3-8af8-1cd2c6c9a30a/640x640/frame-1-1.jpg" />
              </v-col>
              <v-col>
                <h1 class="text-h4 font-weight-bold py-4">
                  Interchain.FM
                </h1>
                <h2 class="text-body-2 text-grey pt-2">By bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2</h2>
                <p class="text-grey-lighten-1 text-body-2 pt-2">Interchain.FM is the Cosmos Radio Station which shines a
                  light
                  on the protocols that solve the hardest problems in Web3. It's a technical podcast that uncovers the
                  vibrant
                  world of bleeding edge technology built in the pursuit of anti-censorship, freedom, and preserving the
                  privacy of the sovereign individual. Become an Interchain.FM🥩 staker on Osmosis, Comdex, and Umee!
                </p>
                <div class="pt-6">
                  <v-btn size="small" variant="plain" icon="fa:fas fa-link"></v-btn>
                  <v-btn size="small" variant="plain" icon="fa:fas fa-brands fa-twitter"></v-btn>
                  <v-btn size="small" variant="plain" icon="fa:fas fa-brands fa-instagram"></v-btn>
                </div>

                <div class="pt-6 d-flex flex-columns align-center">
                  <h3 class="text-h6">Available on</h3>
                  <v-btn size="small" variant="plain" icon="fa:fas fa-brands fa-spotify"></v-btn>
                  <v-btn size="small" variant="plain" icon="fa:fas fa-brands fa-soundcloud"></v-btn>
                  <v-btn size="small" variant="plain" icon="fa:fas fa-brands fa-itunes"></v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row v-for="episode in episodes">
          <v-col cols="8" class="mx-auto">
            <v-card class="episode-card" variant="outlined" rounded="lg">
              <v-container>
                <v-row>
                  <v-col cols="auto" class="d-flex flex-column text-body-2 text-grey-lighten-1 text-center">
                    <NuxtImg width="55" height="55" :src="episode.image" />
                    <div class="pt-2">{{ episode.duration }}</div>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-col class="text-h6 pb-0">
                        <NuxtLink to="/episode" class="text-decoration-none text-white">
                          {{ episode.title }}
                        </NuxtLink>
                      </v-col>
                      <v-col class="text-right text-body-2 text-grey-lighten-1 pb-0" cols="2">
                        {{ episode.date }}
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="text-grey-lighten-1 text-body-2">
                        {{ episode.description }}
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

    </template>
  </app-page>
</template>

<script setup lang="ts">
//const dialog = ref(false);

definePageMeta({
  layout: 'layout2'
})

const episodes = computed(() => {
  return [
    {
      title: '#92 - How Akash Skynet will unleash an AI future no one is prepared for',
      date: '12 dec 2023',
      duration: '01:50:02',
      image: 'https://image.simplecastcdn.com/images/c755dd62-dcde-4872-9a66-99ab36749c8e/94090afe-8545-4dc3-8af8-1cd2c6c9a30a/640x640/frame-1-1.jpg',
      description: '✨About Akash AI Supercloud ✨\nThere is no denying the state of the world we live in. Just as the success of the Manhattan Project transitioned the old world into the new with the atomic bomb, AI is similarly shifting our\'s out of the Information Age into the AI Age....'
    }, {
      title: '#92 - How Akash Skynet will unleash an AI future no one is prepared for',
      date: '12 dec 2023',
      duration: '01:50:02',
      image: 'https://image.simplecastcdn.com/images/c755dd62-dcde-4872-9a66-99ab36749c8e/94090afe-8545-4dc3-8af8-1cd2c6c9a30a/640x640/frame-1-1.jpg',
      description: '✨About Akash AI Supercloud ✨\nThere is no denying the state of the world we live in. Just as the success of the Manhattan Project transitioned the old world into the new with the atomic bomb, AI is similarly shifting our\'s out of the Information Age into the AI Age....'
    }, {
      title: '#92 - How Akash Skynet will unleash an AI future no one is prepared for',
      date: '12 dec 2023',
      duration: '01:50:02',
      image: 'https://image.simplecastcdn.com/images/c755dd62-dcde-4872-9a66-99ab36749c8e/94090afe-8545-4dc3-8af8-1cd2c6c9a30a/640x640/frame-1-1.jpg',
      description: '✨About Akash AI Supercloud ✨\nThere is no denying the state of the world we live in. Just as the success of the Manhattan Project transitioned the old world into the new with the atomic bomb, AI is similarly shifting our\'s out of the Information Age into the AI Age....'
    }
  ]
})
</script>

<style>
.episode-card {
  border: 1px solid #646464
}
</style>