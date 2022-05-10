import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const [registerUpdateModalState, setRegisterUpdateModalState] = useState([
    false,
    "",
  ]);

  function openRegisterModal() {
    const arr = [];
    arr[0] = true;
    arr[1] = "Register Medic";
    setRegisterUpdateModalState(arr);
  }

  function closeRegisterUpdateModal() {
    const arr = [];
    arr[0] = false;
    arr[1] = "";
    setRegisterUpdateModalState(arr);
  }

  console.log(registerUpdateModalState);

  return (
    <>
      <Header
        openRegisterModal={openRegisterModal}
      />
      <Main
        registerUpdateModalState={registerUpdateModalState}
        closeRegisterUpdateModal={closeRegisterUpdateModal}
      />
      <Footer />
    </>
  );
}

export default Home;
