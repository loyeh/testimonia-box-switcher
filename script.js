const testimonial = document.querySelector(".testimonial");
const userName = document.querySelector(".name");
const userJob = document.querySelector(".job");
const userImage = document.querySelector(".image");
let index = 0;

const usersArr = [
  {
    name: "Ahmad Asadi Looyeh",
    job: "Frontend Developer",
    url: "./images/ahmad.jpg",
    testimonial:
      "I have had the pleasure of working with Ahmad Asadi Looyeh on a recent software project and I must say, his hard work and dedication as a frontend developer truly impressed me. His attention to detail and ability to bring creative ideas to the table were invaluable to the success of our project. Not only is Ahmad a skilled developer, but his positive attitude and strong work ethic made him a pleasure to work with. I highly recommend Ahmad for any software development needs and am confident that he will continue to excel in his career. Thank you, Ahmad, for your contributions to our project!",
  },
  {
    name: "Payam Mohajerin Esfahani",
    job: "Website Developer",
    url: "./images/payam.jpg",
    testimonial:
      "I recently worked with Payam Mohajerin Esfahani on developing my website and I must say, it was a nightmare. Payam was incredibly slow in completing tasks and his coding skills were subpar at best. It was clear that he had no attention to detail and the end result was a mess. On top of that, Payam's attitude was less than desirable.",
  },
  {
    name: "Kurosh Motamedian",
    job: "Sofware Engineer",
    url: "./images/kurosh.jpg",
    testimonial:
      "I had the pleasure of working with Kurosh Motamedian as a software engineer and I must say, he is truly exceptional. Kurosh's ability to brainstorm and come up with innovative solutions to complex problems is truly impressive. His discipline and dedication towards his work is commendable, as he always puts in his best effort to deliver high-quality results.",
  },
];

function userCreator() {
  if (index === usersArr.length) {
    index = 0;
  }
  userJob.textContent = usersArr[index].job;
  userName.textContent = usersArr[index].name;
  testimonial.querySelector("p").textContent = usersArr[index].testimonial;
  userImage.style.backgroundImage = `url(${usersArr[index].url})`;
  index++;
}

userCreator();

setInterval(userCreator, 10000);

console.log(usersArr);
