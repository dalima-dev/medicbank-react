import List from "components/List";
import { useState, useEffect } from "react";
import { MedicService } from "services/MedicService";
import ModalDetails from "./ModalDetails";
import ModalRegisterUpdate from "./ModalRegisterUpdate";

function Main({ registerUpdateModalState, closeRegisterUpdateModal }) {
  const [openDetailsModalState, setOpenDetailsModalState] = useState(false);
  const [id, setIdState] = useState("");
  const [medic, setMedic] = useState({ specialties: [] });

  const getById = async (id) => {
    if (id) {
      const response = await MedicService.getById(id);
      setMedic(response);
      console.log("bug", response);
    }
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  function openDetailsModal(id) {
    setOpenDetailsModalState(true);
    setIdState(id);
  }

  function closeDetailsModal() {
    setOpenDetailsModalState(false);
  }

  return (
    <main className="container mx-auto p-2 min-h-[40rem] sm:min-h-[60rem]">
      <section id="chosenMedic">
        {openDetailsModalState && (
          <ModalDetails closeDetailsModal={closeDetailsModal} medic={medic} />
        )}
      </section>

      {registerUpdateModalState[0] && (
        <ModalRegisterUpdate
          registerUpdateModalState={registerUpdateModalState}
          closeRegisterUpdateModal={closeRegisterUpdateModal}
        />
      )}

      <List openDetailsModal={openDetailsModal} />
    </main>
  );
}

export default Main;
