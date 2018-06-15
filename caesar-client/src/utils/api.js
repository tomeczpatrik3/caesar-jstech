export function sendSecretKey(secretObj) {
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(loginObj),
      credentials: 'same-origin',
    });
  }