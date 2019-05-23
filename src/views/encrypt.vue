<template>
  <div>
      <crypto mode="encrypt" :text="contentText" @invoke="encrypt"></crypto>
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
    encrypt: function(pwd, contentText) {
      this.contentText = this.$encrypt(contentText, pwd);

      this.$router.push({name: 'decrypt', params: { contextText: this.contentText, pwd: pwd }});
    }
  }
}
</script>

<style scoped>
</style>
