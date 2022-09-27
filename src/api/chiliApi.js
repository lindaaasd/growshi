import { handleResponse, handleError, handleDeleteResponse } from "./apiUtils";

const baseUrl = "https://localhost:3001/api/Chili";

export function getChilies() {
  return fetch(baseUrl + "/FetchAllChilies")
    .then(handleResponse)
    .catch(handleError);
}

export function getChiliesPaginated(pageNum, options = {}) {
  return fetch(
    baseUrl + "/FetchAllChiliesPaginated?pageNum=" + pageNum + "&pageLength=6",
    options
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getChiliesById(chiliId) {
  return fetch(baseUrl + "/" + chiliId)
    .then(handleResponse)
    .catch(handleError);
}

export function saveChili(chili) {
  debugger;
  return fetch(baseUrl + (chili.id ? "/EditChili?" + chili.id : "/AddChili"), {
    method: chili.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(chili),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteChili(chiliId) {
  return fetch(baseUrl + "/DeleteChili?id=" + chiliId, {
    method: "DELETE",
  })
    .then(handleDeleteResponse)
    .catch(handleError);
}
