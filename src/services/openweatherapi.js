const apiKey = process.env.REACT_APP_KEY;

if (apiKey === undefined) {
  throw new Error(
    "No Open Weather API Key defined"
  );
}

const apiBaseURL = "https://api.openweathermap.org/data/2.5";
const keyQuery = `appid=${apiKey}`;

export const FETCH = (query) => {
  return fetch(`${apiBaseURL}/${query}&${keyQuery}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
};
