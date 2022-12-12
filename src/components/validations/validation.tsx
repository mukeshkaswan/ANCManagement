//***** Validation rules for input fields */
const validation = {

  ID: {
    presence: {
      message: 'Please enter a valid user id',
    },
  },
  email: {
    presence: {
      message: 'Please enter a valid email id',
    },
    format: {
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
      message: 'Please enter a valid email id',
    },

    password: {
      presence: {
        message: 'Please enter a password',
      },
    },



  },

  name: {
    presence: {
      message: 'Please enter a valid name',
    },
  },

  weight: {
    presence: {
      message: 'Please enter weight',
    },
  },

  guardian: {
    presence: {
      message: 'Please enter guardian name',
    },
  },

  contactofbeneficiary: {
    presence: {
      message: 'Please enter phone number',
    },
    format: {
      pattern: /^[0-9]{10,10}$/,
      message: 'Please enter a valid phone number',
    },
  },

  rchid: {
    presence: {
      message: 'Please enter RCH ID',
    },
  },

  awcno: {
    presence: {
      message: 'Please enter AWC No',
    },
  },

  date_copy: {
    presence: {
      message: 'Please select date of LMP',
    },
  },

  date_copy2: {
    presence: {
      message: 'Please select date of EDD',
    },
  },


  pregno: {
    presence: {
      message: 'Please enter no of pregnancies',
    },
  },

  lastdeli: {
    presence: {
      message: 'Please enter last delivery',
    },
  },

  

  
  
  







};

export default validation;
