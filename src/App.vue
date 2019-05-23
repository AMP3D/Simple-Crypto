<template>
  <div id="app">
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-grid>
            <ion-row>
             <ion-col><ion-title>Simple Crypto</ion-title></ion-col> 
             <ion-col><ion-icon class="sc-close-app" name="close-circle" @click="exitApp" float-right></ion-icon>
             </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-header>

      <ion-tabs>
        <ion-tab tab="encrypt">
          <ion-content>
            <ion-vue-router class="sc-ion-content" />
          </ion-content>
        </ion-tab>
        <ion-tab tab="decrypt">
          <ion-content>
            <ion-vue-router class="sc-ion-content" />
          </ion-content>
        </ion-tab>

        <ion-tab-bar class="sc-ion-tab-bar" slot="bottom">
          <ion-tab-button class="sc-ion-tab-btn" tab="encrypt" @click="$router.push('/encrypt')">
            <ion-label>Encrypt</ion-label>
            <ion-icon name="lock"></ion-icon>            
          </ion-tab-button>

          <ion-tab-button class="sc-ion-tab-btn" tab="decrypt" @click="$router.push('/decrypt')">
            <ion-label>Decrypt</ion-label>
            <ion-icon name="unlock"></ion-icon>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-app>
  </div>
</template>

<script>
import { Plugins } from '@capacitor/core';

export default {
  name: "app",
  methods: {
    exitApp: async function() {
      let confirmRet = await Plugins.Modals.confirm({
        title: 'Confirm',
        message: 'Are you sure you\'d like to exit?'
      });
      
      if(confirmRet) {
        await Plugins.App.exitApp();
      }
    }
  }
};
</script>

<style scoped>
  .sc-close-app {
    font-size: 24px;
  }

  .sc-ion-content {
    margin-top: 60px;
  }

  .sc-ion-tab-bar {
    background-color: #edf0f4;  
    box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
    width: 100%;
  }

  .sc-ion-tab-btn {
    background-color: #edf0f4;    
  }
</style>