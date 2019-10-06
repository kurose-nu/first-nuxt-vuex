// インポート
import Vuex from "vuex"

// ストアオブジェクトの作成
const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "Hello Vuex"
      }
    },
    mutations: {
      updateMessage: function(state, payload) {
        state.message = payload
      }
    },
    actions: {
      updateMessageAction(context, payload) {
        context.commit("updateMessage", payload)
      }
    }
  })
}

// プログラムで使えるようにする
export default createStore
