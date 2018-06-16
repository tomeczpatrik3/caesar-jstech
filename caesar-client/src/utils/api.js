  export function getOffset(key) {
    return fetch(`/getOffset/${key}`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => res.json());
  }