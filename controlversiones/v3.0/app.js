var d = new Date();
var date = d.getFullYear();
let year = date.toString()
const age = document.querySelector('#edad').innerHTML += year[2]+year[3];

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("principal").style.backgroundColor = "rgba(255, 255, 255, 0.664)";
//   }
  
//   function closeNav() {
//       document.getElementById("mySidenav").style.width = "0";
//       document.getElementById("principal").style.backgroundColor = "none";
//   }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }