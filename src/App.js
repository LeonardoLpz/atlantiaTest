import logo from './logo.png';
import HeaderApp from './HeaderApp'
import PresenceShare from './PresenceShare'
import PriceEvolution from './PriceEvolution'
import ProductTable from './ProductTable'

function App() {
  return (
    <div className="App">
      <HeaderApp ></HeaderApp>
      <PresenceShare></PresenceShare>
      <PriceEvolution></PriceEvolution>
      <ProductTable></ProductTable>
    </div>
  );
}

export default App;
