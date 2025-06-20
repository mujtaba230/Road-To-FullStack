const fs = require('fs').promises;

function syncFunction() {
  try {
    let result = JSON.parse("{ invalidJSON }");
    console.log(result);
  } catch (err) {
    console.error("Synchronous Error Caught:");
    console.error(err.message);
  }
}


async function asyncFunction() {
  try {
    const data = await fs.readFile('NotFound.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error("Asynchronous Error Caught:");
    console.error(err.message);
  }
}

function asyncFunctionwithCallback(callback) {
    fs.readFile('Notfound.html', 'utf-8')
        .then(data => callback(null, data))
        .catch(err => callback(err));
}

function asyncWithPromise() {
  fs.readFile('NotFound.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => {
      console.error("Promise-Based Async Error Caught:");
      console.error(err.message);
    });
}

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}


syncFunction();
asyncFunction();
asyncWithPromise();
asyncFunctionwithCallback();
myFunction();