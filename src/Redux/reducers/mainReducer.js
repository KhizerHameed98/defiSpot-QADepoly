import {
  COINMARKETCAP_FAIL,
  COINMARKETCAP_SUCCESS,
  MIDGARDPOOL_FAIL,
  MIDGARDPOOL_SUCCESS,
} from "../actions/types";

const initialState = {
  // token: localStorage.getItem("token") || null,
  // userDetails: localStorage.getItem("userDetails"),
  // loading: true,
  // isAuthenticated: null,
  // userDetails: {},
  // updatePassword: {},
  // userWallet: {},
  // isEmailAuthOn: {},
  // isGoogleAuthOn: {},
  // isSMSAuthOn: {},
  // userUpdate: {},
  // tiersStatus: null,
  // users: [],
  // error: {},
  // errors: [],
  midgardPool: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case USER_LOADED:
    // case REGISTER_MSG:
    // case REGISTER_SUCCESS:
    // case FORGET_MSG:
    // case FORGET_SUCCESS:
    // case RESET_SUCCESS:
    // case SET_AUTH_VERIFICATION:
    // case IS_EMAIL_AUTH_ON_SUCCESS:

    // case UPDATE_2FA_STATUS_SUCCESS:
    // case IS_SMS_AUTH_ON_SUCCESS:
    // case UPDATE_PROFILE_SUCCESS:
    // case UPDATE_PASSWORD_SUCCESS:
    // case ENABLE_2FA_SUCCESS:
    //   return {
    //     ...state,
    //     ...payload,
    //     loading: false,
    //   };

    // case ERR_USERS:
    //   return {
    //     ...state,
    //     error: payload,
    //     loading: false,
    //   };

    // case REGISTER_FAIL:
    // case VERIFY_FAIL:
    // case FORGET_FAIL:
    // case RESET_FAIL:
    // case AUTH_ERROR_DATA:
    // case AUTH_ERROR:
    // case ENABLE_2FA_ERR:

    // case IS_EMAIL_AUTH_ON_ERR:
    // case UPDATE_2FA_STATUS_ERR:
    // case IS_SMS_AUTH_ON_ERR:
    // case UPDATE_PROFILE_ERR:
    // case UPDATE_PASSWORD_ERR:
    // case UPDATE_USER_ERR:
    //   return {
    //     ...state,
    //     errors: payload,
    //     loading: false,
    //   };

    // case USER_LOADED_DATA:
    //   localStorage.setItem("userDetails", JSON.stringify(payload.userDetails));
    //   return {
    //     ...state,
    //     ...payload,
    //     isAuthenticated: true,
    //     loading: false,
    //   };
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", payload.token);
    //   localStorage.setItem("userDetails", JSON.stringify(payload.userDetails));
    //   return {
    //     ...state,
    //     ...payload,
    //     isAuthenticated: true,
    //     loading: false,
    //   };
    case MIDGARDPOOL_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
