let insert = document.getElementById("insert");
let button = document.getElementById("button");
let body = document.querySelector("body");

let buttonValueIs = true;
let buttonValueText;

button.addEventListener("click", () => {
  if (buttonValueIs === false) {
    isOnObj = { isOn: "true" };
    buttonValueIs = true;
  } else {
    isOnObj = { isOn: "false" };
    buttonValueIs = false;
  }

  fetch("/api", {
    method: "PUT",
    body: JSON.stringify(isOnObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      
    });
});
setInterval(()=>{fetch("/api")
.then((result) => result.json())
.then((json) => (buttonValueText = json[0].isOn));
console.log(buttonValueText);


if (buttonValueText.isOn === "false") {
body.style.background = "black";
body.style.color = "white";
} else {
body.style.background = "white";
body.style.color = "black";
}},100)

button.click()


