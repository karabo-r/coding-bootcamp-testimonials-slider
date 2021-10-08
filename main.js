const profiles = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    image: '"./images/image-tanya.jpg"',
    comment:
      "I’ve been interested in coding for a while but never taken the jump, until\r\n    now. I couldn’t recommend this course enough. I’m now in the job of my\r\n    dreams and so excited about the future.",
  },
  {
    id: 2,
    name: "John Tarkpor",
    job: " Junior Front-end Developer",
    image: "/images/image-john.jpg",
    comment:
      "If\r\n    you want to lay the best foundation possible I’d recommend taking this\r\n    course. The depth the instructors go into is incredible. I now feel so\r\n    confident about starting up as a professional developer.",
  },
];

const profileComment = document.getElementById("comment");
const profileName = document.getElementById("name");
const profileJobTitle = document.getElementById("job-title");
const profileImage = document.getElementById("profile-image");
let trackIdNumber = 0;

const next = () => {
  trackIdNumber = 1;
  updateDom();
};

const prev = () => {
  trackIdNumber = 0;
  updateDom();
};

if (trackIdNumber === 0) {
  updateDom();
}

function updateDom() {
  profileComment.textContent = profiles[trackIdNumber].comment;
  profileName.textContent = profiles[trackIdNumber].name;
  profileJobTitle.textContent = profiles[trackIdNumber].job;
  profileImage.style = `background-image:url(${profiles[trackIdNumber].image})`;
}

console.log(profiles[trackIdNumber].image);
