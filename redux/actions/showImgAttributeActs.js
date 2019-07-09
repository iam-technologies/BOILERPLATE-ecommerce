//Actions Add configuration attribute to the product.
const show = (img) => {
  return (dispatch) => {
    return dispatch({
      type: 'SHOW_IMG_ATTRIBUTE',
      img
    });
  }
};


//Actions Remove all configuration attributes of the product.
const remove = () => {
  return (dispatch) => {
    return dispatch({
      type: 'REMOVE_IMG_ATTRIBUTE',
    });
  }
}


export default {
  show,
  remove
}