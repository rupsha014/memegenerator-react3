// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Meme from './meme';
import { Helmet } from 'react-helmet'
import logo from './daatkelano image.jpeg'


function App() {
  return (
    <div>
      <Helmet>
          <title>Meme generator</title>
          <link rel="icon"  href={logo} sizes="16x16" />
        </Helmet>
      <Header />
      <Meme />
      
    </div>
  );
}

export default App;
