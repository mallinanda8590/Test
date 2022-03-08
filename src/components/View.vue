
<template>
<div>
  <v-container>
       <v-card>
       <v-card-title> User Info</v-card-title>
       <v-card-context>

           <v-row dense class="orange mr-1 ml-1">
              <v-col>
                  <b>User Id</b>
              </v-col>
              <v-col>
                 <b> Title</b>
              </v-col>
              <v-col>
                 <p><b> Body</b></p>
              </v-col>
           </v-row>
           <v-row>
              <v-col>
                 {{this.result.userId}}
              </v-col>
              <v-col>
                  {{this.result.title}}
              </v-col>
              <v-col>
                  <p class="mr-2 pr-2" style="text-align: justify;text-justify: inter-word;">{{this.result.body}}</p>
              </v-col>
           </v-row>
       </v-card-context>
       </v-card>
  </v-container>
</div>
</template>

<script>
import servicescall from '../Service.js'
export default {
  mixins: [servicescall],
  data () {
    return {
      postId: '',
      result: []
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.postId = this.$route.params.id
      console.log('ID', this.postId)
      this.getIdByPost(this.postId)
    }
  },
  methods: {
    getIdByPost (id) {
      this.getPostById(id).then((response) => {
        console.log('Get All itemsBy Id', response)
        this.result = response
      }
      )
    }
  }
}
</script>
