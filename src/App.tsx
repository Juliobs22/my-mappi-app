import { LugaresProvider } from './context';
import Inicio from './components/Inicio';


function App() {
  return (
    <LugaresProvider>
      <Inicio/>
    </LugaresProvider>
  );
}

export default App
