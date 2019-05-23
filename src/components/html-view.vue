<template>
    <div>
        <ion-group>
            <ion-item lines="full">
                <interaction-tools :copyText="rawText" hide-paste />
            </ion-item>
            <ion-item lines="full">
                <ion-textarea readonly v-html="rawText" wrap="hard"></ion-textarea>
            </ion-item>
        </ion-group>
    </div>
</template>

<script>
import InteractionTools from '@/components/interaction-tools';

export default {
    components: {
        interactionTools: InteractionTools
    },
    props: {
        text: {
            required: true,
            type: String
        }
    },
    watch: {
        text: function(val) {
            this.rawText = val;
        }
    },
    data() {
        return {
            rawText: this.text
        };
    }
};
</script>

<style scoped>
</style>