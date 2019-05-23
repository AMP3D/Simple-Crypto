<template>
    <div>
        <ion-item-group>
        <ion-item>
            <ion-input inputmode="password" placeholder="Enter Password" required="true" 
                :type="showPassword ? 'text' : 'password'" @ionChange="pwd = $event.target.value" :value="pwd"></ion-input>
        </ion-item>

        <ion-item lines="full">          
            <ion-toggle @click="showPassword = !showPassword"></ion-toggle>          
            <ion-label> Show Password</ion-label>
        </ion-item>
        </ion-item-group>

        <ion-item-group>
        <ion-item>
            <ion-textarea placeholder="Enter content here..." rows="10" :value="contentText"
                @ionChange="contentText = $event.target.value"></ion-textarea>
        </ion-item>

        <ion-item lines="full">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-button color="primary" @click="$emit('invoke', pwd, contentText)" :disabled="!enableEncryptBtn">
                            {{ mode === 'encrypt' ? 'Encrypt' : 'Decrypt' }}
                        </ion-button>                        
                    </ion-col>
                    <ion-col>
                        <interaction-tools :copyText="contentText" @pasted="paste" />
                    </ion-col>                    
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button color="light" @click="openHtmlViewModal" float-right>View As HTML</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-item>
        </ion-item-group>
    </div>
</template>

<script>
import HtmlView from '@/components/html-view';
import InteractionTools from '@/components/interaction-tools';

export default {
    components: {
        interactionTools: InteractionTools
    },
    props: {        
        mode: {
            type: String,
            required: true,
            validator: function(val) {
                return val === 'encrypt' || val === 'decrypt';
            }
        },
        text: String
    },
    created() {
        if(this.$route.params) {
            this.contentText = this.$route.params.contextText != null ? this.$route.params.contextText : '';
            this.pwd = this.$route.params.pwd != null ? this.$route.params.pwd : '';
        }
    },
    computed: {
        enableEncryptBtn: function() {
            return !this.$isNullOrWhitespace(this.contentText) && !this.$isNullOrWhitespace(this.pwd);
        }
    },
    watch: {
        text: function(val) {            
            this.contentText = val;
        }
    },
    data() {
        return {
            contentText: '',
            pwd: '',
            showPassword: false
        };
    },
    methods: {
        openHtmlViewModal() {
            return this.$ionic.modalController
                .create({
                    component: HtmlView,
                    componentProps: {
                        propsData: {
                            text: this.contentText
                        }
                    }
                })
                .then(m => m.present());
        },
        paste: function(val) {
            this.contentText = val;
        }
    }
}
</script>

<style scoped>
</style>