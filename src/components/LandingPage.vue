<template>
  <v-layout row wrap align-center>
    <v-flex xs10 offset-xs1 sm10 offset-sm1>
      <v-layout row wrap>
        <v-flex xs12 sm4 v-for="(value, key) in discipline" :key="value.id">
            <v-card class="subject-card" ripple>
              <v-card-media :src="value.imageURL" height="200px"></v-card-media>
              <v-card-title primary-title>
                <div class="title-container">
                  <h3 class="title">{{ value.titlu }}</h3>
                </div>
              </v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: function() {
    return {
      discipline: {}
    };
  },
  created: function() {
    firebase
      .database()
      .ref("discipline")
      .on("value", snapshot => {
        let discipline = {};
        snapshot.forEach(snap => {
          discipline[snap.key] = {
            titlu: snap.val().titlu,
            imageURL: snap.val().imageURL,
            id: snap.key
          };
        });

        this.discipline = discipline;
      });
  }
};
</script>

<style scoped>
.subject-card {
  cursor: pointer;
}

.title-container {
  width: 100%;
  display: inline-block;
}

.title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 1.5rem;
}
</style>
