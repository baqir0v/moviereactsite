import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';
import Films from './components/films';
import Movies from './components/movies';
import Speakers from './components/speakers';
import Ticket from './components/tickets';
import Video from './components/video';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Movies></Movies>
      <Video></Video>
      <Films></Films>
      <Speakers></Speakers>
      <Ticket></Ticket>
      <Footer></Footer>
    </>
  );
}

export default App;
