export default async function({ redirect, app }) {
  // plugin を含むルートの Vue インスタンスである app(インジェクトしたため)
  if (await app.$user()) {
    redirect("/");
  }
}
