import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';
import Films from './components/films';
import Movies from './components/movies';
import Speakers from './components/speakers';
import Ticket from './components/tickets';
import Video from './components/video';
import Magazine from './components/magazine';
import Logos from './components/logos';
import Pass from './components/pass';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Movies></Movies>
      <Ticket></Ticket>
      <Video></Video>
      <Films></Films>
      <Magazine></Magazine>
      <Speakers></Speakers>
      <Pass></Pass>
      <Logos></Logos>
      <Footer></Footer>
    </>
  );
}

export default App;
