import CryptoJS from "crypto-js";
import { Plugins } from '@capacitor/core';

export default {
  methods: {
    $clipboardCopy: async function(val) {
      Plugins.Clipboard.write({ string: val });
    },
    $clipboardPaste: async function() {
      let pasteRes = await Plugins.Clipboard.read({ type: "string" });
      let val = pasteRes != null ? pasteRes.value : '';

      return val;
    },
    $decrypt: function(content, key) {
      let bytes = CryptoJS.AES.decrypt(content.toString(), key);
      let decrypted = bytes.toString(CryptoJS.enc.Utf8);

      return decrypted;
    },
    $encrypt: function(content, key) {
      let encrypted = CryptoJS.AES.encrypt(content, key).toString();

      return encrypted;
    },
    $isNullOrWhitespace(val) {
      let isNullOrWhitespace =
        val == null || val.toString().match(/^ *$/) !== null;

      return isNullOrWhitespace;
    },
    $share: async function(val) {
      await Plugins.Share.share({
        text: val
      });
    }
  }
};