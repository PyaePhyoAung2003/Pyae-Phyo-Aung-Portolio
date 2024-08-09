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
  { name: "Go Wild Wild Life Park",type:"backend", image:"gowwlifepark.png",description:"The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.",websiteLink:"#gwwlp",githubLink:"https://github.com/PyaePhyoAung2003/GoWildWildLifePark" },
  { name: "In A Box", type:"frontend",image:"inabox.png",description:"In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it.",websiteLink:"https://pyaephyoaung2003.github.io/In-a-box/",githubLink:"https://github.com/PyaePhyoAung2003/In-a-box" },
  { name: "Training Department Course", type:"backend",image:"trainingdepartmentcourse.png",description:"A training department course website that uses Java to save data in Excel and send information to users via email would likely be a web application that integrates various technologies. ",websiteLink:"#tdc",githubLink:"https://github.com/PyaePhyoAung2003/TrainingDepartmentCourse" },
  { name: "Math Quiz", type:"mobile", image:"mathquiz.png",description:"The Math Quiz app, developed in Java for Android Studio, offers users multiple-choice questions on addition, subtraction, multiplication, and division.",websiteLink:"#mq",githubLink:"https://github.com/PyaePhyoAung2003/MathQuizGame" },
  { name: "ABC Learning Center", type:"frontend", image:"abc.png",description:"ABC Learning Center offers tutorials, projects, and challenges in HTML, CSS, and JavaScript for all levels of front-end developers, providing a supportive environment to enhance your skills and excel in web development.",websiteLink:"https://pyaephyoaung2003.github.io/ABCLearningCenter/",githubLink:"https://github.com/PyaePhyoAung2003/ABCLearningCenter" },
  { name: "DoBu Martial Arts", type:"frontend", image:"dbm.png",description:"DoBu Martial Arts offers tutorials, projects, and challenges in HTML, CSS, and JavaScript for front-end developers. It provides a supportive environment for all skill levels, with expert instructors and a community of like-minded individuals.",websiteLink:"https://pyaephyoaung2003.github.io/DoBu-Martial-Arts/",githubLink:"https://github.com/PyaePhyoAung2003/DoBu-Martial-Arts" },
  { name: "Boutiqua", type:"uiux", image:"boutique.png",description:"Boutiqa is an Axure prototype demonstrating modern e-commerce UI/UX design, including product listings, search, cart management, and checkout. It utilizes dynamic panels and widgets for a realistic shopping experience.",websiteLink:"https://pyaephyoaung2003.github.io/Boutiqa_Prototyping/",githubLink:"https://github.com/PyaePhyoAung2003/Boutiqa_Prototyping" },
  { name: "XYZ Trainging Center", type:"uiux", image:"xyztraining.png",description:"XYZ Education Center's Axure course offers hands-on training in creating interactive web and mobile prototypes, teaching wireframing, interactive elements, and user simulation.",websiteLink:"https://pyaephyoaung2003.github.io/XYZ_Prototyping/",githubLink:"https://github.com/PyaePhyoAung2003/XYZ_Prototyping" },
  { name: "Patharda Collection", type:"uiux", image:"pathardacollection.png",description:"Patharda Collection Website Prototype A Patharda Collection website prototype, created with Axure, is an interactive model showcasing the boutique's design, layout, and functionality for user testing.",websiteLink:"https://pyaephyoaung2003.github.io/Patharda_Collection_Prototype/",githubLink:"https://github.com/PyaePhyoAung2003/Patharda_Collection_Prototype" },
  { name: "Orchid World", type:"uiux", image:"orchid.png",description:"Orchid World is a minimalist UI/UX design created in Figma, showcasing a collection of orchids with high-quality images and brief descriptions. The design emphasizes visual appeal and simplicity, focusing solely on the beauty and details of each orchid without displaying prices or other distractions.",websiteLink:"https://pyaephyoaung2003.github.io/Orchid-World/",githubLink:"https://github.com/PyaePhyoAung2003/Patharda_Collection_Prototype" }

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
        <h5 class="card-title ${_selectedProjects[j].websiteLink}"><a href="${_selectedProjects[j].websiteLink}">${_selectedProjects[j].name}</a></h5>
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
