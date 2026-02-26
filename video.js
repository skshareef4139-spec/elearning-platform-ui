const course=JSON.parse(localStorage.getItem("selectedCourse"));

document.getElementById("courseTitle").innerText=course.title;
document.getElementById("videoFrame").src=course.video;