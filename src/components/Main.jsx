import List from "components/List";
import ModalDetails from "./ModalDetails";
import ModalRegisterUpdate from "./ModalRegisterUpdate";

function Main({ registerUpdateModalState, closeRegisterUpdateModal }) {
  return (
    <main className="container mx-auto p-2 min-h-[40rem] sm:min-h-[60rem]">
      <section id="chosenMedic">
        <ModalDetails />
      </section>

      {registerUpdateModalState[0] && (
        <ModalRegisterUpdate
          registerUpdateModalState={registerUpdateModalState}
          closeRegisterUpdateModal={closeRegisterUpdateModal}
        />
      )}

      <List />
    </main>
  );
}

export default Main;
