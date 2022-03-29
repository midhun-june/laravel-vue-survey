<template>

<page-component title="Dashboard">Dashboard</page-component>

</template>


<script>
import PageComponent from '../components/PageComponent.vue'

import  { mapState }  from 'vuex'
import { computed } from 'vue'


export default{
 components:{PageComponent},
computed: {
  ...mapState(['user'])
}

}


</script>