
// NOTE: PLEASE ADD NEW  RECORD IN ALPHABET ORDER: A, B, C ...
// IT WILL BE EASIER WHEN WE WANT TO CHECK DOES THE MESSAGE
// ALREADY EXIST OR NOT

const messages = {
  en: {
    errors: {
      access_denied: 'Your access denied, please contact support',
      bad_request: 'Bad request, please check your request',
      code_invalid: 'The code you used is invalid, please get new code',
      code_used: 'The code is gone, please get new code',
      network_error: 'Internal server error, please contact support',
      something_wrong: 'Something wrong, please check your input data',
      unauthorized: 'You action is unauthorized, please sign in',
    },
    general: {
      btn_yes: 'Yes',
      btn_no: 'No',
      cancel: 'Cancel',
      save: 'Save',
      submit: 'Submit',
    },
  },
  fi: {
    errors: {
      access_denied: 'Ei pääsyä',
      bad_request: 'Bad request, please check your request',
      code_invalid: 'Rekisteröintilinkki on virheellinen tai jo käytetty',
      code_used: 'The code is gone, please get new code',
      network_error: 'Järjestelmävirhe',
      something_wrong: 'Valitettavasti jotain meni pieleen.',
      unauthorized: 'Yhteytesi on katkaistu. Ole hyvä ja kirjaudu uudelleen',
    },
    general: {
      btn_yes: 'Kyllä',
      btn_no: 'Ei',
      cancel: 'Peruuta',
      save: 'Tallenna',
      submit: 'Lähetä',
    },
  },
};

export default messages;

