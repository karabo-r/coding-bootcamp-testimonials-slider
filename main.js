let profile_name = document.getElementById("name");
let profile_comment = document.getElementById("comment");
let profile_job_title = document.getElementById("job-title");
let btn = document.getElementById("btn");

let request = new Request("./profiles.json");

fetch(request)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      profile_name.innerHTML = data[i].name;
      profile_job_title.innerHTML = data[i].job_title;
      profile_comment.innerHTML = data[i].comment;
    }
  });
