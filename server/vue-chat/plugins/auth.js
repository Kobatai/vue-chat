// コンテキストの注入
export default ({ app }, inject) => {
  inject("auth", () => {
    // Promiseはresolveが必要
    // 時間のかかる処理Promise版().then((res) => {
    //   次の処理(res)
    // })

    // 同期的で簡潔にかける
    // async function asyncCall() {
    //   const res = await 時間のかかる処理Promise版()
    //   次の処理(res)
    // }

    // async/awaitで呼ぶためにPromiseでラップ
    return new Promise(resolve => {
      app.$fireAuth.onAuthStateChanged(auth => {
        resolve(auth || null);
      });
    });
  });
};
