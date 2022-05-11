import foto from "assets/foto.jpg";

function ModalDetails({ medic }) {
  {
    /* const medic = {
    name: "fdasfa",
    CRM: 435234,
    landline: 435234,
    phoneNumber: 435234,
    CEP: 435234,
    specialties: ["fdasfas", "fdsafads", "fdasfdsaaf"],
  }; 
*/
  }
  return (
    <div
      id="modalDetails"
      className="flex z-[9999] absolute left-[50%] top-[65%] translate-x-[-50%] translate-y-[-50%] flex-col justify-center gap-2 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80"
    >
      <div className="flex flex-row items-center justify-between">
        <p>{medic.name}</p>
        <button className="mx-2 text-red-500 text-2xl transition-all ease-out duration-150 hover:scale-150 cursor-pointer">
          x
        </button>
      </div>
      <img src={foto} alt="Not loaded" className="object-cover w-60" />

      <div>
        <p>CRM: {medic.CRM}</p>
        <p>Landline: {medic.landline}</p>
        <p>Phone Number: {medic.phoneNumber}</p>
        <p>CEP: {medic.CEP}</p>
        <p>Specialties:</p>
        {medic.specialties.map(function (specialty) {
          return <p>{specialty}</p>;
        })}
      </div>
      <div className="flex justify-around">
        <button className="m-2 p-3 rounded bg-blue-800 shadow-lg shadow-blue-800/80 transition duration-300 ease-in-out hover:scale-110">
          UPDATE
        </button>
        <button className="m-2 p-3 rounded bg-red-500 shadow-lg shadow-red-500/80 transition duration-300 ease-in-out hover:scale-110">
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ModalDetails;
