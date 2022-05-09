import { MedicService } from "../services/MedicService";

async function Lista() {
  const medicList = await MedicService.getList();

  return (
    <section
      id="medicList"
      classNameName="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
    >
      {medicList.map((item) => (
        <div
          id="medic${item.id}"
          onClick="findMedicById('${item._id}'); openModalDetails();"
          className="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          <img src="./assets/foto.jpg" alt="image not loaded" />
          <div>
            <p>${item.name}</p>
            <p>CRM: ${item.CRM}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Lista;
