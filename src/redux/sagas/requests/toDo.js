export function requestGetToDo() {
  return localStorage.getItem("toDo");
}
export function requestPostToDo(data) {
  const prevData = JSON.parse(localStorage.getItem("toDo"));
  const newData = [...prevData, data];
  return localStorage.setItem("toDo", JSON.stringify(newData));
}
export function requestCompleteToDo(data) {
  return localStorage.setItem("toDo", JSON.stringify(data));
}
export function requestDeleteToDo(data) {
  return localStorage.setItem("toDo", JSON.stringify(data));
}
export function requestFilterActiveToDo(data) {
  return localStorage.setItem("filterToDo", JSON.stringify(data));
}