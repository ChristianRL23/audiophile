export const verifySignupInputs = (formState: any, formDispatch: Function) => {
  //NAME
  if (formState.name.value.trim() === '') {
    formDispatch({
      name: 'NAME',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else {
    formDispatch({ name: 'NAME', type: 'VALIDATE' });
  }
  //EMAIL
  if (formState.email.value.trim() === '') {
    formDispatch({
      name: 'EMAIL',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(formState.email.value)) {
    console.log('WRONG');
    formDispatch({
      name: 'EMAIL',
      type: 'ERROR',
      errorMsg: 'Wrong format',
    });
  } else {
    formDispatch({ name: 'EMAIL', type: 'VALIDATE' });
  }
  //PHONE NUMBER
  if (formState.phoneNumber.value.trim() === '') {
    formDispatch({
      name: 'PHONE',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else if (Number(formState.phoneNumber.value) < 0) {
    formDispatch({
      name: 'PHONE',
      type: 'ERROR',
      errorMsg: 'Wrong format',
    });
  } else if (formState.phoneNumber.value.length < 6) {
    formDispatch({
      name: 'PHONE',
      type: 'ERROR',
      errorMsg: 'The phone number must be at least 6 characters',
    });
  } else {
    formDispatch({ name: 'PHONE', type: 'VALIDATE' });
  }
  //ADRESS
  if (formState.address.value.trim() === '') {
    formDispatch({
      name: 'ADDRESS',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else {
    formDispatch({ name: 'ADDRESS', type: 'VALIDATE' });
  }
  //ZIP CODE
  if (formState.zipCode.value.trim() === '') {
    formDispatch({
      name: 'ZIP',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else if (Number(formState.zipCode.value) <= 0) {
    formDispatch({
      name: 'ZIP',
      type: 'ERROR',
      errorMsg: 'Wrong format',
    });
  } else if (formState.zipCode.value.length < 5) {
    formDispatch({
      name: 'ZIP',
      type: 'ERROR',
      errorMsg: 'The ZIP code must be at least 5 characters',
    });
  } else {
    formDispatch({ name: 'ZIP', type: 'VALIDATE' });
  }

  //CITY
  if (formState.city.value.trim() === '') {
    formDispatch({
      name: 'CITY',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else {
    formDispatch({ name: 'CITY', type: 'VALIDATE' });
  }

  //COUNTRY
  if (formState.country.value.trim() === '') {
    formDispatch({
      name: 'COUNTRY',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else {
    formDispatch({ name: 'COUNTRY', type: 'VALIDATE' });
  }

  //E-MONEY NUMBER
  if (formState.eMoneyNumber.value === '') {
    formDispatch({
      name: 'E-MONEY-NUMBER',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else if (Number(formState.eMoneyNumber.value) <= 0) {
    formDispatch({
      name: 'E-MONEY-NUMBER',
      type: 'ERROR',
      errorMsg: 'Wrong format',
    });
  } else if (formState.eMoneyNumber.value.length < 6) {
    formDispatch({
      name: 'E-MONEY-NUMBER',
      type: 'ERROR',
      errorMsg: 'The e-Money number must be at 6 characters',
    });
  } else {
    formDispatch({ name: 'E-MONEY-NUMBER', type: 'VALIDATE' });
  }
  //E-MONEY PIN
  if (formState.eMoneyPin.value === '') {
    formDispatch({
      name: 'E-MONEY-PIN',
      type: 'ERROR',
      errorMsg: 'The field cannot be empty',
    });
  } else if (Number(formState.eMoneyPin.value) <= 0) {
    formDispatch({
      name: 'E-MONEY-PIN',
      type: 'ERROR',
      errorMsg: 'Wrong format',
    });
  } else if (formState.eMoneyPin.value.length < 4) {
    formDispatch({
      name: 'E-MONEY-PIN',
      type: 'ERROR',
      errorMsg: 'The e-Money PIN must be at 4 characters',
    });
  } else {
    formDispatch({ name: 'E-MONEY-PIN', type: 'VALIDATE' });
  }
};
