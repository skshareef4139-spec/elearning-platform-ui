const id=localStorage.getItem("courseId");
const course=COURSES.find(c=>c.id==id);

document.getElementById("title").innerText=course.title;

const list=document.getElementById("lessonList");
let current=0;

course.lessons.forEach((l,i)=>{
 const div=document.createElement("div");
 div.className="lesson";
 div.innerText=l.title;
 div.onclick=()=>loadLesson(i);
 list.appendChild(div);
});

function loadLesson(i){
 current=i;
 document.getElementById("frame").src=course.lessons[i].video;
 [...list.children].forEach(el=>el.classList.remove("active"));
 list.children[i].classList.add("active");
 localStorage.setItem("lastLesson",i);
}

loadLesson(localStorage.getItem("lastLesson")||0);

function complete(){
 let prog=JSON.parse(localStorage.getItem("progress"))||{};
 prog[id]=Math.round(((current+1)/course.lessons.length)*100);
 localStorage.setItem("progress",JSON.stringify(prog));
 alert("Progress Saved");
}