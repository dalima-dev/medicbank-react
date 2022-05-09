import List from "components/List";

function Main() {
  {
    /*onClick="closeModalRegisterUpdate()"*/
  }

  return (
    <main className="container mx-auto p-2 min-h-[40rem] sm:min-h-[60rem]">
      <section id="chosenMedic"></section>

      <section
        className="hidden flex-col z-[9999] absolute left-[50%] top-[60%] translate-x-[-50%] translate-y-[-50%] max-w-xs sm:max-w-lg container bg-blue-500 rounded-b-md rounded-t-md"
        id="overlay"
      >
        <div className="flex flex-row justify-between items-center px-4 py-1">
          <h2 id="registerTitle" className="hidden text-lg">
            Register medic:
          </h2>
          <h2 id="updateTitle" className="hidden text-lg">
            Update medic:
          </h2>
          <a className="text-red-500 text-xl transition-all ease-out duration-150 hover:scale-150 cursor-pointer">
            x
          </a>
        </div>

        <div className="p-2">
          <div className="flex flex-col">
            <input
              className="p-1 m-1 text-black border-2 border-slate-600"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="p-1 m-1 text-black border-2 border-slate-600"
              type="number"
              name="crm"
              id="crm"
              placeholder="CRM"
            />
            <input
              className="p-1 m-1 text-black border-2 border-slate-600"
              type="number"
              name="landline"
              id="landline"
              placeholder="Landline"
            />
            <input
              className="p-1 m-1 text-black border-2 border-slate-600"
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
            />
            <input
              className="p-1 m-1 text-black border-2 border-slate-600"
              type="number"
              name="cep"
              id="cep"
              placeholder="CEP"
            />
            <div className="py-1 flex flex-col gap-2">
              <p>Choose medic's specialties (at least two specialties):</p>
              <div>
                <input type="checkbox" name="alergology" value="Alergology" />
                <label id="alergology" htmlFor="alergology">
                  Alergology
                </label>
              </div>
              <div>
                <input type="checkbox" name="angiology" value="Angiology" />
                <label id="angiology" htmlFor="angiology">
                  Angiology
                </label>
              </div>
              <div>
                <input
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
                />
                <label id="chestSurgery" htmlFor="chestSurgery">
                  Chest surgery
                </label>
              </div>
            </div>

            <div
              id="registerUpdateButton"
              className="flex justify-center"
            ></div>
          </div>
        </div>
      </section>

      <List />
    </main>
  );
}

export default Main;
