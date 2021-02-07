//Función para guardar datos en el localStorage
export const saveToLocal = (key, value) => window.localStorage.setItem(key, value);
//Función para tomar datos guardados en el local storage  
export const getFromLocal = (key) => window.localStorage.getItem(key);
//Función para borrar datos del localStorage  
export const removeFromLocal = (key) => window.localStorage.removeItem(key);