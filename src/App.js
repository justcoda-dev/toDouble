import './App.scss';
import Header from './components/Header/Header';
import CartBlock from './components/CartBlock/CartBlock';

export const HOST = 'http://localhost:5000/';

function App() {
  return (
    <div className="App">
      <Header />
      <CartBlock />
    </div>
  );
}

export default App;
