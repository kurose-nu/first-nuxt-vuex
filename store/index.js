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
      updateMessage: function(state) {
        state.message = "Updated"
      }
    }
  })
}

// プログラムで使えるようにする
export default createStore
