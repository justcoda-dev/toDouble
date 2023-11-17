import './App.scss';
import Header from './components/Header/Header';
import CartBlock from './components/CartBlock/CartBlock';
import ServiceTypesBlock from './components/ServiceTypesBlock/ServiceTypesBlock';
import CarouselBlock from './components/CarouselBlock/CarouselBlock';
import ExamplesBlock from './components/ExamplesBlock/ExamplesBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';
import FormBlock from './components/FormBlock/FormBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';

export const HOST = 'https://todouble-73e02.web.app/';

function App() {
  return (
    <div className="App">
      <Header />
      <CartBlock />
      <ServiceTypesBlock />
      <CarouselBlock />
      <ExamplesBlock />
      <InfoBlock />
      <FormBlock />
      <FooterBlock />
    </div>
  );
}

export default App;
