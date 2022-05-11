import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const [registerUpdateModalState, setRegisterUpdateModalState] = useState([
    false,
    "",
  ]);
  const [registerUpdateState, setRegisterUpdateState] = useState(true);

  function openRegisterModal() {
    setRegisterUpdateState(true);
    setRegisterUpdateModalState([true, "Register medic"]);
  }

  function closeRegisterUpdateModal() {
    setRegisterUpdateModalState([false, ""]);
  }

  return (
    <>
      <Header openRegisterModal={openRegisterModal} />
      <Main
        registerUpdateState={registerUpdateState}
        setRegisterUpdateState={setRegisterUpdateState}
        registerUpdateModalState={registerUpdateModalState}
        setRegisterUpdateModalState={setRegisterUpdateModalState}
        closeRegisterUpdateModal={closeRegisterUpdateModal}
      />
      <Footer />
    </>
  );
}

export default Home;
