import logo from './logo.png';
import HeaderApp from './HeaderApp'
import PresenceShare from './PresenceShare'
import PriceEvolution from './PriceEvolution'
import ProductTable from './ProductTable'

function App() {
  return (
    <div className="App">
      <HeaderApp logo={logo}></HeaderApp>
      <PriceEvolution></PriceEvolution>
    </div>
  );
}

export default App;
