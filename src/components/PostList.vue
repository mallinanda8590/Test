<template>
<div>
<v-data-table class=" elevation-1"
dense
  :headers="headers"
  :items="result"
  :search="search"

>
<template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>
          <v-text-field
            rounded
            solo
          v-model="search"
          label="Search "
          class=" mt-6"
        ></v-text-field>

        </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
      </v-toolbar>
</template>

<template v-slot:item="row" >
         <tr >
           <td style="text-align:left"> {{ row.item.id }}</td>

           <td style="text-align:left">

             <router-link class="blue--text" :to="{ name: 'View', params: { id: row.item.id}}">
             {{row.item.title }}
             </router-link>
             </td>
              </tr>
     </template>

</v-data-table>
</div>
</template>

<script>
import servicescall from '../Service.js'
export default {
  name: 'PostList',
  mixins: [servicescall],
  data () {
    return {
      result: [],
      search: '',
      msg: 'Welcome to Your Vue.js App',
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Title', value: 'title'}
      ]
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    getItems () {
      this.getPosts().then((response) => {
        console.log('Get All items', response)
        this.result = response
      }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
