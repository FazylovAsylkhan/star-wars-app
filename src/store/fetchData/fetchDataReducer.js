import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FOR_CURRENT_PAGE,
} from "./fetchDataType";

const initialState = {
  isPending: false,
  data: null,
  error: "",
  currentPage: "",
};

// eslint-disable-next-line default-param-last
function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_FOR_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isPending: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
        error: "",
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isPending: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export default fetchDataReducer;
