import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import config from "./../firebaseConfig.json";

// configの値注入 ...は0個以上の引数引数受け取ることができるSpread syntax
if (!firebase.apps.length) {
  firebase.initializeApp({ ...config });
}

// 注入先は二種類　Vue インスタンス（クライアントサイド） コンテキスト（サーバーサイド）
// これはコンテキストからvueインスタンスへの注入
// injectはルートの Vue.js アプリケーションがインスタンス化される前に実行される
export default ({ app }, inject) => {
  inject("firebase", firebase);
  inject("firestore", firebase.firestore());
  inject("fireAuth", firebase.auth());
  inject("fireStorage", firebase.storage());
};
