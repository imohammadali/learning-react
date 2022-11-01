fetch("https://api.randomuser.me/?nat=US&results=1")
  .then((res) => {
    console.log(res.json);
  })
  .catch(console.error);
// async / await
const getPerson = async () => {
  try {
    let response = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { result } = res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// promise

const getPerson = (count) =>
  new Promise((resolve, reject) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200 ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });
getPerson(5)
  .then((persons) => console.log(persons))
  .catch((error) => console.log(`failed ${error.message}`));
