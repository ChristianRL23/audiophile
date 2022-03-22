export const checkoutFormInitialState = {
  name: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  email: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  phoneNumber: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  address: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  zipCode: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  city: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  country: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  eMoneyNumber: {
    value: '',
    errorMsg: '',
    valid: null,
  },
  eMoneyPin: {
    value: '',
    errorMsg: '',
    valid: null,
  },
};

interface ActionType {
  name: string;
  value?: string;
  type: string;
  errorMsg: string;
  valid: boolean;
}

export const checkoutFormReducer = (state: any, action: ActionType) => {
  switch (action.name) {
    case 'NAME':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            name: {
              value: action.value,
              errorMsg: state.name.errorMsg,
              valid: state.name.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            name: {
              value: state.name.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            name: {
              value: state.name.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'EMAIL':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            email: {
              value: action.value,
              errorMsg: state.email.errorMsg,
              valid: state.email.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            email: {
              value: state.email.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            email: {
              value: state.email.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'PHONE':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            phoneNumber: {
              value: action.value,
              errorMsg: state.phoneNumber.errorMsg,
              valid: state.phoneNumber.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            phoneNumber: {
              value: state.phoneNumber.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            phoneNumber: {
              value: state.phoneNumber.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'ADDRESS':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            address: {
              value: action.value,
              errorMsg: state.address.errorMsg,
              valid: state.address.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            address: {
              value: state.address.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            address: {
              value: state.address.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'ZIP':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            zipCode: {
              value: action.value,
              errorMsg: state.zipCode.errorMsg,
              valid: state.zipCode.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            zipCode: {
              value: state.zipCode.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            zipCode: {
              value: state.zipCode.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'CITY':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            city: {
              value: action.value,
              errorMsg: state.city.errorMsg,
              valid: state.city.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            city: {
              value: state.city.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            city: {
              value: state.city.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'COUNTRY':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            country: {
              value: action.value,
              errorMsg: state.country.errorMsg,
              valid: state.country.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            country: {
              value: state.country.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            country: {
              value: state.country.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'E-MONEY-NUMBER':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            eMoneyNumber: {
              value: action.value,
              errorMsg: state.eMoneyNumber.errorMsg,
              valid: state.eMoneyNumber.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            eMoneyNumber: {
              value: state.eMoneyNumber.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            eMoneyNumber: {
              value: state.eMoneyNumber.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    case 'E-MONEY-PIN':
      switch (action.type) {
        case 'CHANGE':
          return {
            ...state,
            eMoneyPin: {
              value: action.value,
              errorMsg: state.eMoneyPin.errorMsg,
              valid: state.eMoneyPin.valid,
            },
          };
        case 'ERROR':
          return {
            ...state,
            eMoneyPin: {
              value: state.eMoneyPin.value,
              errorMsg: action.errorMsg,
              valid: false,
            },
          };
        case 'VALIDATE':
          return {
            ...state,
            eMoneyPin: {
              value: state.eMoneyPin.value,
              errorMsg: '',
              valid: true,
            },
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export const changeNameInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'NAME',
    type: 'CHANGE',
    value: e.target.value,
  });
};

export const changeEmailInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'EMAIL',
    type: 'CHANGE',
    value: e.target.value,
  });
};

const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const changePhoneInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const formattedPhoneNumber = formatPhoneNumber(e.target.value);
  dispatchFn({
    name: 'PHONE',
    type: 'CHANGE',
    value: formattedPhoneNumber,
  });
};
export const changeAddressInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'ADDRESS',
    type: 'CHANGE',
    value: e.target.value,
  });
};

export const changeZipCodeInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'ZIP',
    type: 'CHANGE',
    value: e.target.value,
  });
};
export const changeCityInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'CITY',
    type: 'CHANGE',
    value: e.target.value,
  });
};
export const changeCountryInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  dispatchFn({
    name: 'COUNTRY',
    type: 'CHANGE',
    value: e.target.value,
  });
};
export const changeEMoneyNumberInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (e.target.value.length <= 6) {
    dispatchFn({
      name: 'E-MONEY-NUMBER',
      type: 'CHANGE',
      value: e.target.value,
    });
  }
};

export const changeEMoneyPinNumberInputHandler = (
  dispatchFn: any,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (e.target.value.length <= 4) {
    dispatchFn({
      name: 'E-MONEY-PIN',
      type: 'CHANGE',
      value: e.target.value,
    });
  }
};
