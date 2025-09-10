const URL = "https://catfact.ninja/fact";

const getFacts = async () => {
  console.log("Getting data ...");
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
};
