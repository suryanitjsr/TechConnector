import uuid from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => disaptch => {
  const id = uuid.v4();
  disaptch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => disaptch({ type: REMOVE_ALERT, payload: id }), timeout);
};
