import { createStore, createLogger } from "vuex"
import info from "./modules/info"
import process from "./modules/process"

const debug = process.env.NODE_ENV !== "production"

export default createStore({
  modules: {
    info,
    process,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
