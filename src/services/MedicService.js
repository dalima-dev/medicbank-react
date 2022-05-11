import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

const transformMedic = (medic) => {
  return {
    ...medic,
    id: medic._id,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformMedic));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformMedic);

export const MedicService = {
  getList: () =>
    fetch(Api.medicList(), { method: "GET" }).then(parseTransformLista),

  getById: (id) =>
    fetch(Api.medicById(id), { method: "GET" }).then(parseTransformItem),

  create: (medic) =>
    fetch(Api.createMedic(), {
      method: "POST",
      body: JSON.stringify(medic),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),

  updtateById: (id, medic) =>
    fetch(Api.updateMedicById(id), {
      method: "PUT",
      body: JSON.stringify(medic),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteMedicById(id), { method: "DELETE" }).then(parseResponse),
};
