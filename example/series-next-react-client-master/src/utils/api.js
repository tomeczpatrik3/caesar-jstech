export function login(loginObj) {
  return fetch('/login', {
    method: 'POST',
    body: JSON.stringify(loginObj),
    credentials: 'same-origin',
  });
}

export function search(searchTerm) {
  return fetch(`/series/${searchTerm}`, {
    method: 'GET',
    credentials: 'same-origin',
  })
  .then(res => res.json());
}
