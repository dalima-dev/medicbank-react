import { useEffect, useState } from "react";

function ModalRegisterUpdate({
  registerUpdateModalState,
  closeRegisterUpdateModal,
  registerUpdateState,
  submitButton,
  updateButton,
  id,
}) {
  const [name, setName] = useState("");
  const [CRM, setCRM] = useState(0);
  const [landline, setLandline] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [CEP, setCEP] = useState(0);
  const [specialties, setSpecialties] = useState([]);

  const [isAlergologyChecked, setIsAlergologyChecked] = useState(false);
  const [isAngiologyChecked, setIsAngiologyChecked] = useState(false);
  const [isBucoMaxilloChecked, setIsBucoMaxilloChecked] = useState(false);
  const [isClinicCardiologyChecked, setIsClinicCardiologyChecked] =
    useState(false);
  const [isChildrensCardiologyChecked, setIsChildrensCardiologyChecked] =
    useState(false);
  const [isHeadAndNeckChecked, setIsHeadAndNeckChecked] = useState(false);
  const [isCardiacSurgeryChecked, setIsCardiacSurgeryChecked] = useState(false);
  const [isChestSurgeryChecked, setIsChestSurgeryChecked] = useState(false);

  function selectSpecialties() {
    const checkedSpecialties = [
      isAlergologyChecked,
      isAngiologyChecked,
      isBucoMaxilloChecked,
      isClinicCardiologyChecked,
      isChildrensCardiologyChecked,
      isHeadAndNeckChecked,
      isCardiacSurgeryChecked,
      isChestSurgeryChecked,
    ];

    const specialtiesNames = [
      "Alergology",
      "Angiology",
      "Buco Maxillo",
      "Clinic cardiology",
      `Children's cardiology`,
      "Head and neck surgery",
      "Cardiac surgery",
      "Chest surgery",
    ];

    const changedSpecialties = [];

    checkedSpecialties.forEach((checked, index) => {
      checked && changedSpecialties.push(specialtiesNames[index]);
    });

    setSpecialties(changedSpecialties);
  }

  useEffect(() => {
    selectSpecialties();
  }, [
    isAlergologyChecked,
    isAngiologyChecked,
    isBucoMaxilloChecked,
    isClinicCardiologyChecked,
    isChildrensCardiologyChecked,
    isHeadAndNeckChecked,
    isCardiacSurgeryChecked,
    isChestSurgeryChecked,
  ]);

  const newOrUpdatedMedic = {
    name,
    CRM,
    landline,
    phoneNumber,
    CEP,
    specialties,
  };

  return (
    <section
      className="flex flex-col z-[9999] absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] max-w-xs sm:max-w-lg container bg-blue-500 rounded-b-md rounded-t-md"
      id="overlay"
    >
      <div className="flex flex-row justify-between items-center px-4 py-1">
        <h2 id="registerTitle" className="flex text-lg">
          {`${registerUpdateModalState[1]}:`}
        </h2>
        <button
          className="text-red-500 text-xl transition-all ease-out duration-150 hover:scale-150 cursor-pointer"
          onClick={closeRegisterUpdateModal}
        >
          x
        </button>
      </div>

      <div className="p-2">
        <div className="flex flex-col">
          <input
            className="p-1 m-1 text-black border-2 border-slate-600"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-1 m-1 text-black border-2 border-slate-600"
            type="number"
            name="crm"
            id="crm"
            placeholder="CRM"
            value={CRM}
            onChange={(e) => setCRM(e.target.value)}
          />
          <input
            className="p-1 m-1 text-black border-2 border-slate-600"
            type="number"
            name="landline"
            id="landline"
            placeholder="Landline"
            value={landline}
            onChange={(e) => setLandline(e.target.value)}
          />
          <input
            className="p-1 m-1 text-black border-2 border-slate-600"
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="p-1 m-1 text-black border-2 border-slate-600"
            type="number"
            name="cep"
            id="cep"
            placeholder="CEP"
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
          />
          <div className="py-1 flex flex-col gap-2">
            <p>Choose medic's specialties (at least two specialties):</p>
            <div>
              <input
                onChange={(e) => setIsAlergologyChecked(e.target.checked)}
                type="checkbox"
                name="alergology"
                value="Alergology"
              />
              <label id="alergology" htmlFor="alergology">
                Alergology
              </label>
            </div>
            <div>
              <input
                onChange={(e) => setIsAngiologyChecked(e.target.checked)}
                type="checkbox"
                name="angiology"
                value="Angiology"
              />
              <label id="angiology" htmlFor="angiology">
                Angiology
              </label>
            </div>
            <div>
              <input
                onChange={(e) => setIsBucoMaxilloChecked(e.target.checked)}
                type="checkbox"
                name="bucoMaxillo"
                value="Buco maxillo"
              />
              <label id="bucoMaxillo" htmlFor="bucoMaxillo">
                Buco maxillo
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="clinicCardiology"
                value="Clinic cardiology"
                onChange={(e) => setIsClinicCardiologyChecked(e.target.checked)}
              />
              <label id="clinicCardiology" htmlFor="clinicCardiology">
                Clinic cardiology
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="childrensCardiology"
                value="Children's cardiology"
                onChange={(e) =>
                  setIsChildrensCardiologyChecked(e.target.checked)
                }
              />
              <label id="childrensCardiology" htmlFor="childrensCardiology">
                Children's Cardiology
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="headNeckSurgery"
                value="Head and neck surgery"
                onChange={(e) => setIsHeadAndNeckChecked(e.target.checked)}
              />
              <label id="headNeckSurgery" htmlFor="headNeckSurgery">
                Head and neck surgery
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="cardiacSurgery"
                value="Cardiac surgery"
                onChange={(e) => setIsCardiacSurgeryChecked(e.target.checked)}
              />
              <label id="cardiacSurgery" htmlFor="cardiacSurgery">
                Cardiac surgery
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="chestSurgery"
                value="Chest surgery"
                onChange={(e) => setIsChestSurgeryChecked(e.target.checked)}
              />
              <label id="chestSurgery" htmlFor="chestSurgery">
                Chest surgery
              </label>
            </div>
          </div>

          <div id="registerUpdateButton" className="flex justify-center">
            {registerUpdateState && (
              <button
                onClick={() => submitButton(newOrUpdatedMedic)}
                className="bg-blue-800 shadow-lg shadow-blue-800/80 p-2 rounded transition-all ease-in-out duration-300 hover:scale-105"
              >
                SUBMIT
              </button>
            )}
            {!registerUpdateState && (
              <button
                onClick={() => updateButton(id, newOrUpdatedMedic)}
                className="bg-blue-800 shadow-lg shadow-blue-800/80 p-2 rounded transition-all ease-in-out duration-300 hover:scale-105"
              >
                UPDATE
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalRegisterUpdate;
