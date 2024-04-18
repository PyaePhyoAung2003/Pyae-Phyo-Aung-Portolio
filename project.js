/*let projects = ['Go Wild Wild Life Park', 'In A Box', 'Training Department Course','Math Quiz'];
let img_projects=['gowwlifepark.png','inabox.png','trainingdepartmentcourse.png','inabox.png'];
let text_projects=['The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it']
*/
let projects = ['Go Wild Wild Life Park', 'In A Box', 'Training Department Course','Math Quiz','Go Wild Wild Life Park', 'In A Box', 'Training Department Course','Math Quiz','Go Wild Wild Life Park', 'In A Box', 'Training Department Course','Math Quiz'];
let img_projects=['gowwlifepark.png','inabox.png','trainingdepartmentcourse.png','inabox.png','gowwlifepark.png','inabox.png','trainingdepartmentcourse.png','inabox.png','gowwlifepark.png','inabox.png','trainingdepartmentcourse.png','inabox.png'];
let text_projects=['The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','In A Box is a website design project using wireframes, HTML, and CSS to create a visually appealing, user-friendly site. Wireframes outline the layout, HTML creates the structure, and CSS styles it','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data. The project probably included setting up a database with MySQL or a similar RDBMS.','The Go Wild Wild Life Park used Java for basic database operations, such as creating, updating, reading, selecting, and deleting data.']

function onClickAll() {
    function createGrid(rows, cols) {
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
            <img src="data/${img_projects[j]}" class="card-img-top projects-image" alt="...">
            <div class="card-body">
              <h5 class="card-title">${projects[j]}</h5>
              <div class="projectDescription">
              <p class="card-text">${text_projects[j]}</p>
             
            </div>
            <a href="https://github.com/PyaePhyoAung2003/In-a-box" class="btn btn-primary btnGithub" >Go to GitHub</a>
            </div>
            `;
            col.appendChild(card);
            row.appendChild(col);
            
          }
          
          gridContainer.appendChild(row);
        }
      }
      createGrid(1, projects.length);//
      let imgProjects = document.getElementsByClassName('projects-image'); 
        for (let i = 0; i < imgProjects.length; i++) {
            imgProjects[i].style = "width: 287px;height: 200px;" // Change text color to blue
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
function onClickUIUX() {
    alert("Clicked U")
 }
 function onClickFrontEnd() {
    alert("Clicked F")
 }
 function onClickBackEnd() {
    alert("Clicked B")
 }
 function onClickDatabase() {
    alert("Clicked D")
 }