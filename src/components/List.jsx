import { useEffect, useState } from "react";
import { MedicService } from "services/MedicService";

function List() {
  const [medicList, setMedicList] = useState([]);

  const getList = async () => {
    const response = await MedicService.getList();
    setMedicList(response);
  };

  useEffect(() => {
    getList();
  });
  {
    /*onClick="findMedicById('${item._id}'); openModalDetails();"*/
  }

  return (
    <section
      id="medicList"
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
    >
      {medicList.map((item) => (
        <div
          id="medic${item.id}"
          key={item.id}
          className="flex flex-col items-center gap-4 p-2 rounded bg-blue-500 shadow-lg shadow-blue-500/80 transition delay-300 duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          <img src="assets/foto.jpg" alt="image not loaded" />
          <div>
            <p>{item.name}</p>
            <p>CRM: {item.CRM}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default List;
