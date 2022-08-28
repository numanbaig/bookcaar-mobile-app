import Route from "./src/route"
import { store } from "./src/store"
import { Provider as ReduxProvider } from "react-redux"

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Route />
    </ReduxProvider>
  )
}
