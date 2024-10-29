import { ContadorPage } from "./pages/contadorState"
import { ContadorReducer } from "./pages/contadorReducer"
import { ContainerCounters } from "./pages/containerCounters"
import { CounterProvider } from "./contexts/CounterProvider"

function App() {



  return (
    <CounterProvider>
      <ContainerCounters>
        <ContadorPage />
        <ContadorReducer />
      </ContainerCounters>
    </CounterProvider>
  )
}

export default App
