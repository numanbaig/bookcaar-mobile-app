import Route from "./src/route"
import { store } from "./src/store"
import { Provider as ReduxProvider } from "react-redux"
Blob.prototype[Symbol.toStringTag] = "Blob"
File.prototype[Symbol.toStringTag] = "File"

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Route />
    </ReduxProvider>
  )
}
