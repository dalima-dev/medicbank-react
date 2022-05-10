import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const [registerUpdateModalState, setRegisterUpdateModalState] =
    useState(false);


  return (
    <>
      <Header
        changeRegisterUpdateModalState={(state) =>
          setRegisterUpdateModalState(state)
        }
        registerUpdateModalState = {registerUpdateModalState}
      />
      <Main registerUpdateModalState={registerUpdateModalState} />
      <Footer />
    </>
  );
}

export default Home;
