import fetch from "node-fetch";

const body = { username: "abishek", password: "1234" };

const response = await fetch(
  "https://pf4yj9fivh.execute-api.us-east-1.amazonaws.com/prod-env/login",
  {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
);
var jsonArray = [];
const data = await response.json();
const token = data.token;
for (var i = 0; i < 100; i++) {
  var dateTimeStamp = Date.now();
  const plot = {
    time: dateTimeStamp,
    data: token,
  };

  jsonArray.push(plot);
}

console.log(jsonArray);
