export default ({ app, redirect }, inject) => {
  inject("user", async () => {
    const auth = await app.$auth();
    if (!auth) {
      redirect("/login");
    }

    // ログイン中のuidからusersコレクションを取得
    const usersSnapShot = await app.$firestore
      .collection("users")
      .doc(auth.uid)
      .get();

    // data()でsnapShotのデータが取得できる
    const user = usersSnapShot.data();
    if (!user) return null;

    return {
      uid: auth.uid,
      // arrayであるレストパラメータで渡す
      ...user
    };
  });
};
