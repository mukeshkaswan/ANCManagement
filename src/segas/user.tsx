import { put, takeLatest, all, call, takeEvery } from 'redux-saga/effects';
import {
  USERIDLOGIN,
  USERFORGOT,
  COUNTNOTIFICATION,
  DASHBOARD,
  LISTPREGNANTWOMEN,
  ANMDETAILWOMEN,
  REGISTER,
  GETBLOCK,
  GETVILLAGE,
  GETWARD,
  GETNAMEOFASHA,
  CONTACTNOASHA,
  GETNAMEOFANM,
  CONTACTNOANM,
  HWCNAME,
  LISTSEARCHPWOMEN
} from '../actions/user-actions-types';
import httpClient from './http-client';
import HttpClientPost from './http-client-post';
import Toast from 'react-native-simple-toast';

/***************************User Login Auth Segas*******************************/

function* useridLogin({ payload: { data, callback } }) {
  console.warn('data in saga', data);

  const params = {
    username: data.username,
    password: data.password,
  };

  const payload = {
    data: params,
    method: 'POST',
    url: 'account/login/',
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      console.log('login result', JSON.stringify(result, undefined, 2));
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}



/***************************User Forgot Auth Segas*******************************/

function* userForogot({ payload: { data, callback } }) {
  console.warn('data in saga', data);

  const params = {
    email: data.email,
  };

  const payload = {
    data: params,
    method: 'POST',
    url: 'account/forget_password/',
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      console.log('forgot password result', JSON.stringify(result, undefined, 2));
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}

/***************************User Count Notification Auth Segas*******************************/


function* CountNotification({ payload: { data, callback } }) {
  console.warn('data in saga get outletSurvey List', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/count_notifications/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Dashboard Auth Segas*******************************/


function* Dashboard({ payload: { data, callback } }) {
  console.warn('data in saga get outletSurvey List', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm2/dashboard/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User list_pregnant_women Auth Segas*******************************/


function* Listpregnantwomen({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/list_pregnant_women/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Anm Detail Pregnant Women Auth Segas*******************************/


function* AnmDetailPregnantWomen({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/detail_pregnant_women/?id=${data.id}`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Register Auth Segas*******************************/

function* Register({ payload: { data, callback } }) {
  console.warn('data in saga', data);

  const params = {
    name: data.name,
    guardian: data.guardian,
    phone_number: data.phone_number,
    rch_id: data.rch_id,
    awc_number: data.awc_number,
    LMP: data.LMP,
    EDD: data.EDD,
    pregnancy_number: data.pregnancy_number,
    last_delivery: data.last_delivery,
    // created_by: data.created_by,
    hospital: data.hospital,
    block: data.block,
    village: data.village,
    ward: data.ward,
    weight: data.weight,
    asha_user: data.asha_user,
    anm_user: data.anm_user,
  };

  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    data: params,
    method: 'POST',
    url: 'anm/add_pregnant_women/',
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      console.log('register result', JSON.stringify(result, undefined, 2));
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Get Block Auth Segas*******************************/


function* GetBlock({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_block_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Get Village Auth Segas*******************************/


function* GetVillage({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_village_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Get Ward Auth Segas*******************************/


function* GetWard({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_ward_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}



/***************************User Get Name Of ASHA Auth Segas*******************************/


function* GetNameOfAsha({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_asha_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User contact no of asha Auth Segas*******************************/


function* GetContactNoAsha({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_asha_list/${data.id}`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}




/***************************User Get Name Of ANM Auth Segas*******************************/


function* GetNameOfAnm({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_anm_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User contact no of anm Auth Segas*******************************/


function* GetContactNoAnm({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_anm_list/${data.id}`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User Get HWC name Auth Segas*******************************/


function* GetHWCName({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/get_aphc_hsc_phc_list/`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}


/***************************User list_pregnant_women search Auth Segas*******************************/


function* Listpregnantwomensearch({ payload: { data, callback } }) {
  console.warn('data in list', data);
  const payload = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      //'Content-Type': 'application/json',
      'content-type': 'application/json'
    },
    method: 'GET',
    url: `anm/list_pregnant_women/?start_date=${data.startdate}&end_date=${data.enddate}`,
  };
  const { result, error } = yield call(httpClient, payload);
  if (!error) {
    if (result) {
      callback({ result, error });
    } else {
      Toast.show(result.message);
    }
  }
  else {
    callback({ result, error });
  }
}





function* User() {
  yield all([
    yield takeLatest(USERIDLOGIN, useridLogin),
    yield takeLatest(USERFORGOT, userForogot),
    yield takeLatest(COUNTNOTIFICATION, CountNotification),
    yield takeLatest(DASHBOARD, Dashboard),
    yield takeLatest(LISTPREGNANTWOMEN, Listpregnantwomen),
    yield takeLatest(ANMDETAILWOMEN, AnmDetailPregnantWomen),
    yield takeLatest(REGISTER, Register),
    yield takeLatest(GETBLOCK, GetBlock),
    yield takeLatest(GETVILLAGE, GetVillage),
    yield takeLatest(GETWARD, GetWard),
    yield takeLatest(GETNAMEOFASHA, GetNameOfAsha),
    yield takeLatest(CONTACTNOASHA, GetContactNoAsha),
    yield takeLatest(GETNAMEOFANM, GetNameOfAnm),
    yield takeLatest(CONTACTNOANM, GetContactNoAnm),
    yield takeLatest(HWCNAME, GetHWCName),
    yield takeLatest(LISTSEARCHPWOMEN, Listpregnantwomensearch),



  ]);


}

export default User;
