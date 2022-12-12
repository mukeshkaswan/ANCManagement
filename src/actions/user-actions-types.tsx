import { createAction } from 'redux-actions';

// this is for login with user ID
export const USERIDLOGIN = 'USERIDLOGIN';
export const useridLogin = createAction(USERIDLOGIN);

// this is for user forgot password
export const USERFORGOT = 'USERFORGOT';
export const userForogot = createAction(USERFORGOT);

// this is for user count notification
export const COUNTNOTIFICATION = 'COUNTNOTIFICATION';
export const CountNotification = createAction(COUNTNOTIFICATION);

// this is for user dashboard
export const DASHBOARD = 'DASHBOARD';
export const Dashboard = createAction(DASHBOARD);

// this is for List pregnant women
export const LISTPREGNANTWOMEN = 'LISTPREGNANTWOMEN';
export const Listpregnantwomen = createAction(LISTPREGNANTWOMEN);

// this is for Anm Detail Pregnant Women
export const ANMDETAILWOMEN = 'ANMDETAILWOMEN';
export const AnmDetailPregnantWomen = createAction(ANMDETAILWOMEN);


// this is for register women
export const REGISTER = 'REGISTER';
export const Register = createAction(REGISTER);


// this is for get block
export const GETBLOCK = 'GETBLOCK';
export const GetBlock = createAction(GETBLOCK);

// this is for get village
export const GETVILLAGE = 'GETVILLAGE';
export const GetVillage = createAction(GETVILLAGE);


// this is for get ward
export const GETWARD = 'GETWARD';
export const GetWard = createAction(GETWARD);


// this is for get name of asha
export const GETNAMEOFASHA = 'GETNAMEOFASHA';
export const GetNameOfAsha = createAction(GETNAMEOFASHA);


// this is for get contact no asha
export const CONTACTNOASHA = 'CONTACTNOASHA';
export const GetContactNoAsha = createAction(CONTACTNOASHA);


// this is for get name of anm
export const GETNAMEOFANM = 'GETNAMEOFANM';
export const GetNameOfAnm = createAction(GETNAMEOFANM);


// this is for get contact no anm
export const CONTACTNOANM = 'CONTACTNOANM';
export const GetContactNoAnm = createAction(CONTACTNOANM);

// this is for get HWC name
export const HWCNAME = 'HWCNAME';
export const GetHWCName = createAction(HWCNAME);

// this is for List pregnant women search
export const LISTSEARCHPWOMEN = 'LISTSEARCHPWOMEN';
export const Listpregnantwomensearch = createAction(LISTSEARCHPWOMEN);


