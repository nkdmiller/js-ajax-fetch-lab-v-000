function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
 return '3487288b48b2d6feddbd2c9d0bbf96c2ddd229ea';
  
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = "https://api.github.com/repos"
  fetch(url, {
  method: 'POST',
  headers: {
      Authorization: `token ${token}`
    }
}).then(res => res.json())
.then(json => showResults(json))
  
  }

function showResults(json) {
  const data = 
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
