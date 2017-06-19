
// Develop server URL
const postBaseUrl = 'http://192.168.1.101:3000/api';

//const postBaseUrl = 'http://labtalk.ap-northeast-1.elasticbeanstalk.com/api';

 export function logInSubmit(name,password){
   let url = `${postBaseUrl}/login`;

   console.log(`Making POST request to: ${url}`);

   return fetch(url, {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           name,
           password
       })
   }).then(function(res) {
       if (res.status !== 200)
           throw new Error(`Unexpected response code: ${res.status}`);

       return res.json();
   });
 }
