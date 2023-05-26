import { LugaresProvider, MapProvider } from './context';
import Inicio from './components/Inicio';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <LugaresProvider>
        <MapProvider>
          <Inicio />
        </MapProvider>
      </LugaresProvider>
      <Footer/>
    </>
  );
}

export default App
