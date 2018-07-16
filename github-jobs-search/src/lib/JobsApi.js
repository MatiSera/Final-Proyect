const xhr = new XMLHttpRequest();

const ChangeUrl = (params) => {
  let AddUrl = 'https://jobs.github.com/positions.json?callback=Request';
  if (params.location && params.description) {
    AddUrl += 'description=' + params.description;
    AddUrl += 'location=' + params.location;
  } else if (params.location) {
    AddUrl += 'location=' + params.location;
  } else if (params.description) {
    AddUrl += 'description=' + params.description;
  }
  return AddUrl;
}

const Request = (method,params) => {
  let url = ChangeUrl(params)
  let promise = new Promise((resolve,reject) => {
      xhr.open(method,url,true);
      xhr.send();
      xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
          resolve(JSON.parse(xhr.responseText));
        }else{
          reject("Error");
        }
      }
  })
  return promise;
}

export default Request;