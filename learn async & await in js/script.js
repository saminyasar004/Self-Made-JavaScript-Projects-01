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
let seeAd = false;

function userFlow() {
  new Promise((resolve, reject) => {
    if (!userLeft && !seeAd) {
      resolve(console.log("user is now see your video!"));
    } else if (userLeft) {
      reject(console.log("damn user dont see your video"));
    } else if (seeAd) {
      reject(console.log("Oops user now see add on your video"));
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

// normal way

makeRequest("google")
  .then((response) => {
    console.log(`response recieved`);
    return responseRequest(response);
  })
  .then((processResponse) => {
    console.log(processResponse);
  })
  .catch((err) => {
    console.log(err);
  });

// asyncronous way

async function doUpdate() {
  try {
    const response = await makeRequest("google");
    console.log(`response recieved`);
    const processResponse = await responseRequest(response);
    console.log(processResponse);
    console.log(`finished`);
  } catch (error) {
    console.log(error);
  }
}
doUpdate();
