let promise = new Promise((resolve, reject) => {
  let calc = 1 + 1;
  if (calc == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

promise
  .then((message) => {
    console.log("this operation is " + message);
  })
  .catch((message) => {
    console.log("this operation is " + message);
  });

let userLeft = false;
let seeAd = true;

function userFlow() {
  new Promise((resolve, reject) => {
    if (userLeft) {
      resolve(console.log("user is now see your video!"));
    } else if (seeAd) {
      reject(console.log("Oops user now see add on your video :("));
    } else {
      reject(console.log("damn user dont see your video"));
    }
  });
}

userFlow()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`request processing on ${location}`);
    if (location === "google") {
      resolve(console.log("thank you now you can contact with google!"));
    } else {
      reject(console.log("we only can able to contact with google"));
    }
  });
}

function responseRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`processing response`);
    resolve(`extra information ${response}`);
  });
}
