import axios from "axios";

export const getItems = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );
    dispatch({ type: "GET_ITEMS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );
    const found = response.data.results.find((item) => item._id === id);
    dispatch({ type: "GET_ITEM", payload: found });
  } catch (error) {
    console.log(error);
  }
};
