import List from "components/List";
import { useState } from "react";
import ModalDetails from "./ModalDetails";
import ModalRegisterUpdate from "./ModalRegisterUpdate";

function Main({ registerUpdateModalState, closeRegisterUpdateModal }) {
  const [detailsModalState, setDetailsModalState] = useState(false);
  const [id, setIdState] = useState('');

  function openDetailsModal(id) {
    setDetailsModalState(true)
    setIdState(id);
  }

  console.log(detailsModalState, id)

  return (
    <main className="container mx-auto p-2 min-h-[40rem] sm:min-h-[60rem]">
      <section id="chosenMedic">
        {detailsModalState && <ModalDetails id={id} />}
      </section>

      {registerUpdateModalState[0] && (
        <ModalRegisterUpdate
          registerUpdateModalState={registerUpdateModalState}
          closeRegisterUpdateModal={closeRegisterUpdateModal}
        />
      )}

      <List openDetailsModal={openDetailsModal}/>
    </main>
  );
}

export default Main;
