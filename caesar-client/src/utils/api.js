  
import {getServerPath} from '../config/config';

/**
 * Az eltolást (a backendtől) lekérdező függvény:
 * @param {*} key 
 */
export function getOffset(key) {
    return fetch(`${getServerPath()}getOffset/${key}`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => res.json());
}