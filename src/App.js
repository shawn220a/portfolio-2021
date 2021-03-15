import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
