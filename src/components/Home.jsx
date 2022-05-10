import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react';

function Home() {

  const [openModal, setOpenModal] = useState('hidden')

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
