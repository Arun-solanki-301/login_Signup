export function FormValidation(UserEmail, UserPassword) {
  if (UserEmail.length === 0 && UserPassword.length === 0) {
    return false;
  }
  else {
    return true;
  }
}

export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');


export function emailValidation(email) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

// export {FormValdation};
// export {PasswordValidate};
