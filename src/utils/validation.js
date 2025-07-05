
export const validateData = (email, password) => {
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isEmailValid) return "Invalid EmailId!";
    if(!isPasswordValid) return "Invalid Password!";

    return null

}