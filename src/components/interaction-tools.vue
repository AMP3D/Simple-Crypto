<template>
    <div>
        <ion-button color="light" @click="share" float-right><ion-icon name="share"></ion-icon></ion-button>                        
        <ion-button color="medium" @click="clipPaste" float-right v-if="!hidePaste"><ion-icon name="clipboard"></ion-icon></ion-button>
        <ion-button color="dark" @click="clipCopy" float-right><ion-icon name="copy"></ion-icon></ion-button>
    </div>
</template>

<script>
export default {
    props: {
        copyText: { 
            required: true,
            type: String
        },
        hidePaste: Boolean
    },
    watch: {
        copyText: function(val) {
            this.text = val;
        }
    },
    data() {
        return {
            text: this.copyText
        };
    },
    methods: {
        clipCopy: async function() {
            this.$clipboardCopy(this.text);
        },
        clipPaste: async function() {
            let pasteValue = await this.$clipboardPaste();            
            
            this.text = pasteValue;
            this.$emit('pasted', this.text);
        },
        share: async function() {
            await this.$share(this.contentText);
        }
    }
};
</script>

<style scoped>
</style>