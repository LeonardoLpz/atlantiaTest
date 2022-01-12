import logo from './logo.png';
import HeaderApp from './HeaderApp'
import PresenceShare from './PresenceShare'
import PriceEvolution from './PriceEvolution'
import ProductTable from './ProductTable'


function App() {
  return (
    <div className="App">
      
      <HeaderApp logo={logo}></HeaderApp>
      <p className='title-principal title-general'>General Perfomance Analysis</p>
      <div className='charts-container'>
        <PriceEvolution></PriceEvolution>
        <PresenceShare></PresenceShare>
      </div>
      <ProductTable></ProductTable>
    </div>
  );
}

export default App;
