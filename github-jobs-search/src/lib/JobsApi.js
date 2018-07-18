//<<<<<<< julian
const Request = (url) => {
    const xhr = new XMLHttpRequest();
    let promise = new Promise((resolve, reject) => {
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject("Error");
            }
        }
    })
    return promise;
//=======
const xhr = new XMLHttpRequest();


const formatParams = (params) => {
  return "?" + Object
    .keys(params)
    .map( (key) => {
      if (params[key]) {
        return key + "=" + encodeURIComponent(params[key])
      }
    })
    .join("&")
}

const Request = (method, data) => {
  let params = {
    location: data.location || null,
    description: data.description || null,
    fulltime: data.fulltime || null
  };
  let url = '/positions.json' +  formatParams(params)
  console.log(url)
  let promise = new Promise((resolve, reject) => {
    xhr.open(method, url, true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject("Error");
      }
    }
  })
  return promise;
//>>>>>>> staging
}

export default Request;