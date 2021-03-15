import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container content'>
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
