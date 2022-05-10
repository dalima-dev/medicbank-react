import List from "components/List";
import { useState } from "react";
import ModalDetails from "./ModalDetails";
import ModalRegisterUpdate from "./ModalRegisterUpdate";

function Main() {
  {
    /*onClick="closeModalRegisterUpdate()"*/
  }

  const [isModalOpen, set] = useState();

  function closeModalRegisterUpdate() {}

  return (
    <main className="container mx-auto p-2 min-h-[40rem] sm:min-h-[60rem]">
      <section id="chosenMedic"><ModalDetails /></section>

      <ModalRegisterUpdate />

      <List />
    </main>
  );
}

export default Main;
