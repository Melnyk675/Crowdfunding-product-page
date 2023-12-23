import '../pages/_app.js';
import { Header } from './Components/Header/Header';
import { MainContent } from './Components/Main';

function Home() {

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default Home;