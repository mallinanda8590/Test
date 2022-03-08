// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/'
    }
  },
  methods: {

    getPosts () {
      return axios
        .get(this.url + 'posts', {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'

          }
        })
        .then(response => {
          return response.data
        })
    },

    getPostById (id) {
      return axios
        .get(this.url + 'posts/' + id, {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'

          }
        })
        .then(response => {
          return response.data
        })
    }

  }
}
