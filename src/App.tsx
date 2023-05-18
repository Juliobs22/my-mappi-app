import { LugaresProvider, MapProvider } from './context';
import Inicio from './components/Inicio';


function App() {
  return (
    <LugaresProvider>
      <MapProvider>
        <Inicio />
      </MapProvider>
    </LugaresProvider>
  );
}

export default App
