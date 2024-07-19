let keysToRemove = ["token", "loginUserData"];

export const getJWTToken = () => localStorage.getItem('token');
export let authorizationToken = `Bearer ${getJWTToken()}`;
export const isLoggedIn = getJWTToken();

const setJWTToken = (token) => {
    localStorage.setItem('token', token);
};

export const setUserData = (userData) => {
    localStorage.setItem('loginUserData', JSON.stringify(userData));
}

export const storeTokenInLS = (serverToken) => {
    setJWTToken(serverToken);
    return localStorage.setItem("token", serverToken);
};

const clearLocalStorage = () => {
    for (let key of keysToRemove) {
        localStorage.removeItem(key);
    }
}
export const LogoutUser = () => {
    setJWTToken(null);
    return clearLocalStorage();
};


export const checkPassword = (password) => {
    const strength = {
        1: "weak",
        2: "medium",
        3: "strong",
        4: "strong",
    };

    const getIndicator = (password, strengthValue) => {
        strengthValue.upper = /[A-Z]/.test(password);
        strengthValue.lower = /[a-z]/.test(password);
        strengthValue.numbers = /\d/.test(password);
        strengthValue.length = password.length > 7;

        let strengthIndicator = 0;

        for (let metric in strengthValue) {
            if (strengthValue[metric] === true) {
                strengthIndicator++;
            }
        }

        return strength[strengthIndicator] ?? "";
    };

    const getStrength = (password) => {
        let strengthValue = {
            upper: false,
            numbers: false,
            lower: false,
        };

        return getIndicator(password, strengthValue);
    };

    return getStrength(password);

}


/**
 * only allow number with maxlength
 * @param {*} e input element
 * @returns element
 */
const handleNumberValidation = (e) => {
    if (e.target.value === e.target.maxLength) {
        e.preventDefault();
    }
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    return e;
}

const  setThemeAttributes = (
    theme,
    darkDisplay,
    lightDisplay,
    sunDisplay,
    moonDisplay
)  => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (document.getElementById(`${theme}-layout`)) {
        document.getElementById(`${theme}-layout`).checked = true;
    }

    document
        .querySelectorAll(`.${darkDisplay}`)
        .forEach((el) => (el.style.display = "none"));
    document
        .querySelectorAll(`.${lightDisplay}`)
        .forEach((el) => (el.style.display = "flex"));
    document
        .querySelectorAll(`.${sunDisplay}`)
        .forEach((el) => (el.style.display = "none"));
    document
        .querySelectorAll(`.${moonDisplay}`)
        .forEach((el) => (el.style.display = "flex"));
}

export { handleNumberValidation, setThemeAttributes };


// document.querySelectorAll(".dark-layout").forEach((element) => {
//     element.addEventListener("click", () =>
//         setThemeAttributes("dark", "dark-logo", "light-logo", "moon", "sun")
//     );
// });

// document.querySelectorAll(".light-layout").forEach((element) => {
//     element.addEventListener("click", () =>
//         setThemeAttributes("light", "light-logo", "dark-logo", "sun", "moon")
//     );
// });