import './App.scss';
import Header from './components/Header/Header';
import CartBlock from './components/CartBlock/CartBlock';
import ServiceTypesBlock from './components/ServiceTypesBlock/ServiceTypesBlock';
import CarouselBlock from './components/CarouselBlock/CarouselBlock';
import ExamplesBlock from './components/ExamplesBlock/ExamplesBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

export const HOST = 'http://localhost:5000/';

function App() {
  return (
    <div className='App'>
      <Header />
      <CartBlock />
      <ServiceTypesBlock />
      <CarouselBlock />
      <ExamplesBlock />
      <InfoBlock />
    </div>
  );
}

export default App;
