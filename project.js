/*let projects = ['', '', 'Training Department Course','Math Quiz'];
let img_projects=['','','trainingdepartmentcourse.png','inabox.png'];
let text_projects=['','','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it']
*/

/*
let projects = [
  { name: "John",type:"", image:"",description:"",websiteLink:"",githubLink:"" }
];
*/

function downloadPDF() {
    let pdfUrl='data/pyaephyoaungcv.pdf';
    let fileName='PyaePhyoAungCV';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
let projects = [
  { name: "Go Wild Wild Life Park",type:"backend", image:"gowwlifepark.png",description:"The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.",websiteLink:"",githubLink:"https://github.com/PyaePhyoAung2003/GoWildWildLifePark" },
  { name: "In A Box", type:"frontend",image:"inabox.png",description:"In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it.",websiteLink:"https://pyaephyoaung2003.github.io/In-a-box/",githubLink:"https://github.com/PyaePhyoAung2003/In-a-box" },
  { name: "Training Department Course", type:"backend",image:"trainingdepartmentcourse.png",description:"A training department course website that uses Java to save data in Excel and send information to users via email would likely be a web application that integrates various technologies. ",websiteLink:"",githubLink:"https://github.com/PyaePhyoAung2003/TrainingDepartmentCourse" },
  { name: "Math Quiz", type:"mobile", image:"mathquiz.png",description:"The Math Quiz app, developed in Java for Android Studio, offers users multiple-choice questions on addition, subtraction, multiplication, and division.",websiteLink:"",githubLink:"https://github.com/PyaePhyoAung2003/MathQuizGame" }

];
onClickAll();
function onClickAll() {
clearButton();
let btn = document.getElementById("btn_all");
btn.style="background-color:blue; color:white;"
let selectedProjects = projects;
createCards(selectedProjects)
}
function onClickUIUX() {
clearButton();
let btn = document.getElementById("btn_uiux");
btn.style="background-color:blue; color:white;"
let selectedProjects = projects.filter(project => project.type === "uiux")
createCards(selectedProjects)
}
 function onClickFrontEnd() {
clearButton();
let btn = document.getElementById("btn_forntend");
btn.style="background-color:blue; color:white;"
let selectedProjects = projects.filter(project => project.type === "frontend")
createCards(selectedProjects)
}
function onClickBackEnd() {
clearButton();
let btn = document.getElementById("btn_backend");
btn.style="background-color:blue; color:white;"
let selectedProjects = projects.filter(project => project.type === "backend")
createCards(selectedProjects)
}
function onClickMobile() {
clearButton();
let btn = document.getElementById("btn_mobile");
btn.style="background-color:blue; color:white;"
let selectedProjects = projects.filter(project => project.type === "mobile")
createCards(selectedProjects)
}
 function clearButton(){
  let btn1 = document.getElementById("btn_all");
  btn1.style="background-color:''; color:''";
  let btn2 = document.getElementById("btn_uiux");
  btn2.style="background-color:''; color:''";
  let btn3 = document.getElementById("btn_forntend");
  btn3.style="background-color:''; color:''";
  let btn4 = document.getElementById("btn_backend");
  btn4.style="background-color:''; color:''";
  let btn5 = document.getElementById("btn_mobile");
  btn5.style="background-color:''; color:''";

 }
 function createCards(_selectedProjects){
  createGrid(1, _selectedProjects);//
  let imgProjects = document.getElementsByClassName('projects-image'); 
    for (let i = 0; i < imgProjects.length; i++) {
        imgProjects[i].style = "width: 300px;height: 220px;" // Change text color to blue
  }
  let projectDescriptions = document.getElementsByClassName('projectDescription'); 
  for (let i = 0; i < projectDescriptions.length; i++) {
    projectDescriptions[i].style = "width: 100%;height: 100px;" // Change text color to blue
  }
  
  let btnGithub = document.getElementsByClassName('btnGithub'); 
  for (let i = 0; i < btnGithub.length; i++) {
    btnGithub[i].style = "margin-top: 30%;" // Change text color to blue
  }
 }
 function createGrid(rows, _selectedProjects) {
  let cols = _selectedProjects.length;
  var gridContainer = document.getElementById("grid-projects");
  gridContainer.innerHTML = ""; // Clear existing content
  
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("div");
    row.className = "row";
    
    for (var j = 0; j < cols; j++) {
      var col = document.createElement("div");
      col.className = "col";
      
      var card = document.createElement("div");
      card.className = "card";
      card.style='width: 19rem;height: 32rem; margin-top:10%;';
      card.innerHTML = `
      <img src="data/${_selectedProjects[j].image}" class="card-img-top projects-image" alt="...">
      <div class="card-body">
        <h5 class="card-title"><a href="${_selectedProjects[j].websiteLink}">${_selectedProjects[j].name}</a></h5>
        <div class="projectDescription">
        <p class="card-text">${_selectedProjects[j].description}</p>
       
      </div>
      <a href="${_selectedProjects[j].githubLink}" class="btn btn-primary btnGithub" >Go to GitHub</a>
      </div>
      `;
      col.appendChild(card);
      row.appendChild(col);
      
    }
    
    gridContainer.appendChild(row);
  }
}
