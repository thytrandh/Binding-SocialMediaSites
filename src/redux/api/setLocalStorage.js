

export const setLocalStorage = (value) => {
    window.localStorage.setItem('isLogin', value);
};

export const clearLocalStorage = () => {
    window.localStorage.removeItem('isLogin');
}