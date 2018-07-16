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
}

export default Request;