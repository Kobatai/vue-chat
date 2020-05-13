//stateはメソッドで引数に入れるから値が返ってくる　store内でしか呼び出さない
// 呼び出すときはgettersを使う
export const state = () => ({
  message: null
});

export const getters = {
  message: state => state.message
};

export const mutations = {
  // messageはオブジェクトで受け取る
  setMessage(state, { message }) {
    state.message = message;
  },

  deleteMessage(state) {
    state.message = null;
  }
};
