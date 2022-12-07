import fetch from "node-fetch";

const body = { username: "abishek", password: "1234" };
var jsonArray = [];

for (var i = 0; i < 100; i++) {
  const response = await fetch(
    "https://pf4yj9fivh.execute-api.us-east-1.amazonaws.com/prod-env/login",
    {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  const token = data.token;
  var dateTimeStamp = Date.now();
  const plot = {
    time: dateTimeStamp,
    data: token,
  };

  jsonArray.push(plot);
}

console.log(jsonArray);
