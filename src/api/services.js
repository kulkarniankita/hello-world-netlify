export const getUserService = () => {
  return fetch(`/.netlify/functions/helloWorld`).then(response => {
    return response.json();
  });
};
