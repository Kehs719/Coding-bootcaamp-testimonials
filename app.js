const image = document.querySelector(".img");
const feedback = document.querySelector(".feedback");
const nameUser = document.querySelector(".name");
const work = document.querySelector(".work");
const users = [
    { 
        name : "Tanya Sinclair",
        work : "UX Engineer",
        feedback : "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        image:"/images/tanya4.png"
    },
    { 
        name : "John Tarkpor",
        work : "Junior Front-end Developer",
        feedback : "“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        image:"/images/john.png"
    }];

let slide =0;

function prevNext(){
    if(slide > users.length-1){
        slide=0;
    }
    console.log(users[slide].image);

    image.src=users[slide].image;
    feedback.innerHTML=users[slide].feedback;
    nameUser.innerHTML=users[slide].name;
    work.innerHTML=users[slide].work;

    slide++;
}
prevNext()