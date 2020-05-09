// plugin を含むルートの Vue インスタンスである app
// ユーザーを別のルートにリダイレクトさせる関数のredirectを引数でNuxtのコンテキストから受け取る
export default async function({ redirect, app }) {
  if (await app.$auth()) {
    // ログイン中だったら/にリダイレクト
    redirect("/");
  }
}
