import axios from 'axios';

import { addHeaders, catchErrors, catchResponse } from '../../utils';

/**
 * Orders GETBYID
 *
 * @param {String} id
 * @param {function} callback
 *
 */
export default (id, callback) => {
  const url = `/order/${id}`;
  const headers = addHeaders(true);

  return axios({ method: 'get', url, headers })
    .then(response => catchResponse.api(response, callback))
    .catch(error => catchErrors.api(error, callback));
};
