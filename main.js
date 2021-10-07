let profile_name = document.getElementById("name");
let profile_comment = document.getElementById("comment");
let profile_job_title = document.getElementById("job-title");
let btn = document.getElementById("btn");

let request = new Request("./profiles.json");
let trackIdNumber = 0;

fetch(request).then((resp) =>
  resp.json().then((data) => {
    appendData(data);
  })
);

const appendData = (data) => {
  profile_name.innerHTML = data[trackIdNumber].name;
  profile_job_title.innerHTML = data[trackIdNumber].job_title;
  profile_comment.innerHTML = data[trackIdNumber].comment;
};
