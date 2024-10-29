import { ContadorPage } from "./pages/contadorState"
import { ContadorReducer } from "./pages/contadorReducer"
import { ContainerCounters } from "./pages/containerCounters"

function App() {



  return (
    <>
      <ContainerCounters>
        <ContadorPage/>
        <ContadorReducer/>
      </ContainerCounters>
    </>
  )
}

export default App
