<template>
  <v-app>

    <router-view/>
   </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
    color: black;
    background: #E4EDF8;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
    font-size: 15px;

}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th:hover{
    color:#3468c0;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
}
.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr>td {
    color:black;
    border-bottom: thin solid rgba(0,0,0,.12);
    border-right: thin solid rgba(0,0,0,.12);
}
.theme--light.v-data-table tbody tr:nth-of-type(even) {
    background-color:#f0f2f5
}
.theme--dark.v-data-table tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, .5);
}
.v-data-table-header th {
  white-space: nowrap;

}
.v-data-table  tbody td {
  white-space: nowrap;
}
</style>
