<template>
  <div :class="wrapperClass">
    <table :class="tableClass">
      <thead>
      <tr>
        <!-- ici chaque colonne défi par "fields" -->
        <th>name</th>
        <th>email</th>
        <th>created_at</th>
        <th>updated_at</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Stepien</td>
        <td>stepien@email.Com</td>
        <td>08/08/1985</td>
        <td>08/08/1985</td>
      </tr>
      <tr>
        <td>Stepien</td>
        <td>stepien@email.Com</td>
        <td>08/08/1985</td>
        <td>08/08/1985</td>
      </tr>
      <tr>
        <td>Stepien</td>
        <td>stepien@email.Com</td>
        <td>08/08/1985</td>
        <td>08/08/1985</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//  import Vue from 'vue'
  export default {
    props: {
      wrapperClass: {
        type: String,
        default: function () {
          return null
        }
      },
      tableClass: {
        type: String,
        default: function () {
          return 'dataTable'
        }
      }
    },
    mounted () {
      console.log('datatable mounted!')
    }
  }
</script>

<style src="./DataTable.scss" lang="sass"></style>