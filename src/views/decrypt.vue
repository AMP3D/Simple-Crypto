<template>
  <div>
      <crypto mode="decrypt" :text="contentText" @invoke="decrypt"></crypto>
  </div>
</template>

<script>
import Crypto from '@/components/crypto'

export default {
  components: {
    crypto: Crypto
  },  
  data() {
    return {
      contentText: ''
    };
  },
  methods: {
    decrypt: function(pwd, contentText) {      
      this.contentText = this.$decrypt(contentText, pwd);

      this.$router.push({name: 'encrypt', params: { contextText: this.contentText, pwd: pwd }});
    }
  }
}
</script>

<style scoped>
</style>