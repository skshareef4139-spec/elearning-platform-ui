function markComplete(){
  let progress=JSON.parse(localStorage.getItem("progress"))||{};
  
  if(!progress[course.id]) progress[course.id]=0;
  
  progress[course.id]+=20; // each lesson 20%
  if(progress[course.id]>100) progress[course.id]=100;

  localStorage.setItem("progress",JSON.stringify(progress));
  alert("Progress Updated!");
}