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


function asyncWithPromise() {
  fs.readFile('NotFound.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => {
      console.error("Promise-Based Async Error Caught:");
      console.error(err.message);
    });
}

syncFunction();
asyncFunction();
asyncWithPromise();
