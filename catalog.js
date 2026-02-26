const grid=document.getElementById("courses");

function render(list){
 grid.innerHTML="";
 list.forEach(c=>{
   const progress=getProgress(c.id);
   grid.innerHTML+=`
   <div class="card" onclick="openCourse(${c.id})">
     <img src="${c.thumbnail}">
     <div class="card-body">
       <h3>${c.title}</h3>
       <div class="progress"><div class="fill" style="width:${progress}%"></div></div>
       <small>${progress}% completed</small>
     </div>
   </div>`;
 });
}

function openCourse(id){
 localStorage.setItem("courseId",id);
 location="player.html";
}

function getProgress(id){
 const p=JSON.parse(localStorage.getItem("progress"))||{};
 return p[id]||0;
}

render(COURSES);

document.getElementById("search").oninput=e=>{
 const term=e.target.value.toLowerCase();
 render(COURSES.filter(c=>c.title.toLowerCase().includes(term)));
};