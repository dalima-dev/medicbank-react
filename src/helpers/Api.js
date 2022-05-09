const medicContext = {
  medicEndpoint: () => `${Api.baseUrl}/medic`,
  medicList: () => `${medicContext.medicEndpoint()}/find-medics`,
  medicById: (id) => `${medicContext.medicEndpoint()}/find-medics/${id}`,
  createMedic: () => `${medicContext.medicEndpoint()}/create`,
  updateMedicById: (id) =>
    `${medicContext.medicEndpoint()}/update/${id}`,
  deleteMedicById: (id) =>
    `${medicContext.medicEndpoint()}/delete/${id}`,
};


export const Api = {
  baseUrl: `https://medicbank-server.herokuapp.com`,
  ...medicContext,
};