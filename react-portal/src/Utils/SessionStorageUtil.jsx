export const storeItemsInSesssion = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const getItemFromSession = (key) => {
    return sessionStorage.getItem(key)
}