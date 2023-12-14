<template>
  <app-page>
    <template #body>
      <v-container>
        <v-row>
          <v-col cols="10" class="mx-auto">
            <v-row>
              <v-col cols="auto">
                <NuxtImg height="340" width="340" :src="episode.image" />
              </v-col>
              <v-col>

                <v-btn to="/" color="grey" prepend-icon="mdi-arrow-left" variant="text" rounded="xl"> Back to
                  Episodes</v-btn>
                <h1 class="text-h4 font-weight-bold py-4">
                  {{ episode.title }}
                </h1>


                <h2 class="text-body-2 text-grey pt-2">By bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2</h2>

                <div class="pt-8">
                  <v-row>
                    <v-col class="text-center">
                      <div class="text-grey text-body-2">Buy Price</div>
                      <div>48.3516 BTSG</div>
                      <v-btn class="mt-6" block color="green" rounded="xl" size="large" variant="elevated">
                        Buy
                      </v-btn>
                    </v-col>
                    <v-col class="text-center">
                      <div class="text-grey text-body-2">Last Price</div>
                      <div class="text-grey">38.7684 BTSG </div>
                    </v-col>
                    <v-col class="text-center">
                      <div class="text-grey text-body-2">Sell Price</div>
                      <div>37.6025 BTSG</div>
                      <v-btn class="mt-6" block color="red" rounded="xl" size="large" variant="elevated">
                        Sell
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="8" class="mx-auto">
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab value="description">Description</v-tab>
              <v-tab value="activity">Activity</v-tab>
            </v-tabs>
            <v-row class="mt-2">
              <v-col class="text-body-2" v-html="description" v-if="tab === 'description'">
              </v-col>
              <v-col v-else>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1m4enfy64krusj2nuzvh4qtp37ypfwl6sgqwhe4"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1m4enfy64krusj2nuzvh4qtp37ypfwl6sgqwhe4"
                      class="text-decoration-none text-white">bitsong1...6sgqwhe4</a><span class="text-red">
                      &nbsp;burned&nbsp; </span><span class="text-white">1</span> for <span class="text-red">38.7684
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">19 days ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">48.3516
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">20 days ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1m4enfy64krusj2nuzvh4qtp37ypfwl6sgqwhe4"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1m4enfy64krusj2nuzvh4qtp37ypfwl6sgqwhe4"
                      class="text-decoration-none text-white">bitsong1...6sgqwhe4</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">46.8975
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">21 days ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1fsmfyr2pex5ulllg6wmsvf8ul7e00n0h73xq39"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1fsmfyr2pex5ulllg6wmsvf8ul7e00n0h73xq39"
                      class="text-decoration-none text-white">bitsong1...0h73xq39</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">45.4656
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">25 days ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1r9868398lhtl5dnpt5acldpdygjh8nnaq5kuan"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1r9868398lhtl5dnpt5acldpdygjh8nnaq5kuan"
                      class="text-decoration-none text-white">bitsong1...naq5kuan</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">44.0559
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">42.6684
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">41.3031
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1xdfmjrgfvxym9x0f799utkwwtymuk93grwdefk"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1xdfmjrgfvxym9x0f799utkwwtymuk93grwdefk"
                      class="text-decoration-none text-white">bitsong1...3grwdefk</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">39.96
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1eqjprt2ekh5wd6vanjnulu7852kznyggydj5r3"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1eqjprt2ekh5wd6vanjnulu7852kznyggydj5r3"
                      class="text-decoration-none text-white">bitsong1...ggydj5r3</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">38.6391
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1597lwqeq37tc4hemdmw6tx297rnc3z2g6t0xa4"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1597lwqeq37tc4hemdmw6tx297rnc3z2g6t0xa4"
                      class="text-decoration-none text-white">bitsong1...2g6t0xa4</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">37.3404
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1m9mxeelwfxupcvg944e9mddt3wj3ykpxphmemh"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1m9mxeelwfxupcvg944e9mddt3wj3ykpxphmemh"
                      class="text-decoration-none text-white">bitsong1...pxphmemh</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">36.0639
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1xrevtntq5aszv5ywnaat7ect9s78eu0u4phpea"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1xrevtntq5aszv5ywnaat7ect9s78eu0u4phpea"
                      class="text-decoration-none text-white">bitsong1...0u4phpea</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">34.8096
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong19zzqzyprlk7dzqsm9xqsdt6yfv9ynrhnf85asw"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong19zzqzyprlk7dzqsm9xqsdt6yfv9ynrhnf85asw"
                      class="text-decoration-none text-white">bitsong1...hnf85asw</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">33.5775
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1t270xpscl8dd4eaqz9z6vf4g2mqv2mn9eqzgfd"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1t270xpscl8dd4eaqz9z6vf4g2mqv2mn9eqzgfd"
                      class="text-decoration-none text-white">bitsong1...n9eqzgfd</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">32.3676
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div><img
                            class="v-img__img v-img__img--contain"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRZEWBzuICGaoThakijhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdXFSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1AWi6baaTCTGbWxV7XhHECMKIIyYzy5iTpBR8x9c9Any9i/Es/3N/jrCatxgQEIlnmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7muePzGueiywDMjZiY9TxwhFosdrHQwK5ka8RRxVNV0yheyHquctzhrlRpr3ZO/MJTXV5a5TnMYSSxiCRJEKKihjApsxGjVSbGQpv2Ej3/I9UvkUshVBiPHAqrQILt+8D/43a1VmIx7SaEE0P3iOB+jQM8u0Kw7zvex4zRPgOAzcKW3/dUGMPNJer2tRY+A/m3g4rqtKXvA5Q4w+GTIpuxKQZpCoQC8n9E35YCBW6BvzeuttY/TByBDXaVugINDYKxI2es+7+7t7O3fM63+fgDUdHLOWw0O1wAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cDHw0zKq9HgzYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAFaElEQVR42u3UQREAAAjDMMDl/BtBAQa4REIf7SQFwC8jAYC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLlLAGDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g6AuQOYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g6AuQNg7gDmDoC5A2DuAJg7AOYOYO4AmDsA5g6AuQNg7gCYO4C5A2DuAJg7AOYOgLkDmDsA5g6AuQNg7gCYOwDmDmDuAJg7AOYOgLkDYO4A5g6AuQNg7gCYOwDmDoC5A5g7AOYOgLkDYO4AmDuAuQNg7gCYOwDmDoC5A2DuAOYOgLkDYO4AmDsA5g5g7gCYOwDmDoC5A2DuAJg7gLkDYO4AmDsA5g7AZQHtTgTzNB2MzwAAAABJRU5ErkJggg=="
                            style=""><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">31.1799
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1w63jlg9ynyasct8rmnzd890ys7cdcwlx4alq5g"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1w63jlg9ynyasct8rmnzd890ys7cdcwlx4alq5g"
                      class="text-decoration-none text-white">bitsong1...lx4alq5g</a><span class="text-red">
                      &nbsp;burned&nbsp; </span><span class="text-white">1</span> for <span class="text-red">25.0001
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1w63jlg9ynyasct8rmnzd890ys7cdcwlx4alq5g"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1w63jlg9ynyasct8rmnzd890ys7cdcwlx4alq5g"
                      class="text-decoration-none text-white">bitsong1...lx4alq5g</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">31.1799
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">30.0144
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">bitsong1...v6m3vhz6</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">10</span> for <span class="text-green">240.9255
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">1</span> for <span class="text-green">18.6591
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">bitsong1...v6m3vhz6</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">10</span> for <span class="text-green">140.8035
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1smjy2ah4clg8fq9a57z599aaxv94uav6m3vhz6"
                      class="text-decoration-none text-white">bitsong1...v6m3vhz6</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">5</span> for <span class="text-green">43.623
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
                <div class="d-flex align-center py-2">
                  <div class="mr-2"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">
                      <div class="v-avatar v-theme--testnetTheme v-avatar--density-default v-avatar--variant-flat"
                        style="width: 32px; height: 32px;">
                        <div class="v-responsive v-img v-img--booting" style="height: 32px; width: 32px;">
                          <div class="v-responsive__sizer"></div><!----><!----><!----><!----><!----><!---->
                        </div><!----><span class="v-avatar__underlay"></span>
                      </div>
                    </a></div>
                  <div class="me-auto text-grey"><a href="/account/bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2"
                      class="text-decoration-none text-white">bitsong1...842586h2</a><span class="text-green">
                      &nbsp;minted&nbsp; </span><span class="text-white">25</span> for <span class="text-green">61.3275
                      BTSG </span><!----></div>
                  <div class="text-grey text-right">a month ago</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>

    </template>
  </app-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'layout2'
})

const tab = ref('description')

const episodes = computed(() => {
  return [
    {
      title: '#93 - Catalyst AMM - Cross-chain AMM built for the modular future',
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

const episode = computed(() => episodes.value[0])

const description = `✨About Catalyst ✨

Catalyst is the permissionless cross-chain Automated Market Maker (AMM) for the modular future. It enables
easy liquidity connections and asset swaps between different blockchains, such as Ethereum, Cosmos, and
rollups like Optimism and Eclipse.

The goal of Catalyst is to create an interconnected ecosystem where users can effortlessly access assets
and applications across multiple chains, and developers can easily launch new blockchains and connect them
to existing networks and their respective users.

🔗 Useful Links 🔗

► Docs: https://docs.catalyst.exchange/docs/i...

#interchainjam #blockchaintech #technews #web3news #interchainfm #cryptocurrency #cryptopodcasts

💟 SUPPORT iFM

If you enjoy this content, please give it a thumbs up and consider subscribing to Chjango Unchained's
channel.

If you stake on Cosmos Hub, Osmosis, Canto, Umee, and/or Comdex, you can support our work by delegating to
Interchain.FM🥩!

Join Cosmos Chjango's YouTube channel to get access to exclusive perks:

/ @chjango

📻 SUBSCRIBE to Interchain.FM on your preferred radio stations:

👉 Apple Podcasts: https://podcasts.apple.com/us/podcast...
👉 Spotify: https://open.spotify.com/show/4rlsgAx...
👉 Google Podcasts: https://podcasts.google.com/feed/aHR0...
👉 Amazon Music: https://music.amazon.co.uk/podcasts/2...

🐦 OR tune in to Interchain.FM LIVE directly on Twitter at the exact moment we go on air 👉

/ chjango
`.replace(/\n/g, '<br />')

</script>

<style>
.episode-card {
  border: 1px solid #646464
}
</style>