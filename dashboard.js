const progress=JSON.parse(localStorage.getItem("progress"))||{};
const stats=document.getElementById("stats");

COURSES.forEach(c=>{
 const p=progress[c.id]||0;
 stats.innerHTML+=`
 <div class="card">
  <div class="card-body">
    <h3>${c.title}</h3>
    <div class="progress"><div class="fill" style="width:${p}%"></div></div>
    <p>${p}% completed</p>
  </div>
 </div>`;
});