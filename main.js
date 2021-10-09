// Tried storing the profile data in a json file but got complicated. Profiles object looks messy thou ,sorry 💔
// A design pattern is needed

const profiles = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    image: '"./images/image-tanya.jpg"',
    comment:
      " I’ve been interested in coding for a while but never taken the jump, until\r\n    now. I couldn’t recommend this course enough. I’m now in the job of my\r\n    dreams and so excited about the future. ",
  },
  {
    id: 2,
    name: "John Tarkpor",
    job: " Junior Front-end Developer",
    image: "/images/image-john.jpg",
    comment:
      " If\r\n    you want to lay the best foundation possible I’d recommend taking this\r\n    course. The depth the instructors go into is incredible. I now feel so\r\n    confident about starting up as a professional developer. ",
  },
];

const profileComment = document.getElementById("comment");
const profileName = document.getElementById("name");
const profileJobTitle = document.getElementById("job-title");
const profileImage = document.getElementById("profile-image");

// State
let trackIdNumber = 0;

const updateDom = () => {
  profileImage.style = `background-image:url(${profiles[trackIdNumber].image})`;
  profileComment.innerHTML = `<p> &ldquo; ${profiles[trackIdNumber].comment}&rdquo; </p>`;
  profileName.innerHTML = profiles[trackIdNumber].name;
  profileJobTitle.innerHTML = profiles[trackIdNumber].job;
};

// Button event functions
const next = () => {
  trackIdNumber = 1;
  updateDom();
};

const prev = () => {
  trackIdNumber = 0;
  updateDom();
};

updateDom();
