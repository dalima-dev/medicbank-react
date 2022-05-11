import List from "components/List";
import { useState, useEffect } from "react";
import { MedicService } from "services/MedicService";
import ModalDetails from "./ModalDetails";
import ModalRegisterUpdate from "./ModalRegisterUpdate";

function Main({
  registerUpdateModalState,
  setRegisterUpdateModalState,
  closeRegisterUpdateModal,
  registerUpdateState,
  setRegisterUpdateState,
}) {
  const [openDetailsModalState, setOpenDetailsModalState] = useState(false);
  const [id, setIdState] = useState("");
  const [medic, setMedic] = useState({ specialties: [] });
  const [medicList, setMedicList] = useState([]);
  const [createMedic, setCreateMedic] = useState(1);
  const [updateMedic, setUpdateMedic] = useState(1);
  const [deleteMedic, setDeleteMedic] = useState(1);

  const getList = async () => {
    const response = await MedicService.getList();
    setMedicList(response);
  };

  const getById = async (id) => {
    if (id) {
      const response = await MedicService.getById(id);
      setMedic(response);
    }
  };

  const create = async (medic) => {
    await MedicService.create(medic);
    setCreateMedic(createMedic + 1);
  };

  const updateById = async (id, medic) => {
    await MedicService.updateById(id, medic);
    setUpdateMedic(updateMedic + 1);
  };

  const deleteById = async (id) => {
    await MedicService.deleteById(id);
    setDeleteMedic(deleteMedic + 1);
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  useEffect(() => {
    getList();
  }, [createMedic, updateMedic, deleteMedic]);

  function deleteButton(id) {
    deleteById(id);
    closeDetailsModal();
  }

  function submitButton(medic) {
    create(medic);
    closeRegisterUpdateModal();
  }

  function updateButton(id, medic) {
    updateById(id, medic);
    closeRegisterUpdateModal();
  }

  function openUpdateModal() {
    setRegisterUpdateState(false);
    setRegisterUpdateModalState([true, "Update medic"]);
  }

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
          <ModalDetails
            openUpdateModal={openUpdateModal}
            closeDetailsModal={closeDetailsModal}
            deleteButton={deleteButton}
            medic={medic}
          />
        )}
      </section>

      {registerUpdateModalState[0] && (
        <ModalRegisterUpdate
          registerUpdateState={registerUpdateState}
          registerUpdateModalState={registerUpdateModalState}
          closeRegisterUpdateModal={closeRegisterUpdateModal}
          submitButton={submitButton}
          updateButton={updateButton}
          id={id}
        />
      )}

      <List medicList={medicList} openDetailsModal={openDetailsModal} />
    </main>
  );
}

export default Main;
