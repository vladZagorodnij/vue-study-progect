<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form ref="form" v-model="valid" validation class="mb3">
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is required']"
                            v-model="title"
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Ad description"
                            type="text"
                            :rules="[v => !!v || 'Description is required']"
                            v-model="description"
                            multi-line
                    ></v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn
                                class="warning"
                        >
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                label="Add to promo?"
                                v-model="promo"
                                color="primary"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :loading="loading"
                                class="success"
                                @click="createAd"
                                :disabled="!valid || loading"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'http://geoped.in.ua/wp-content/uploads/2016/05/%D0%BB%D0%B5%D0%B2-%D0%B2%D0%B8%D0%BC%D0%B5%D1%80%D0%BB%D1%96-%D1%82%D0%B2%D0%B0%D1%80%D0%B8%D0%BD%D0%B8-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8.jpg'
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>

<style scoped>

</style>
