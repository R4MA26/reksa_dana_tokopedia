// let x = 0; 
// // ini starrt 55


// setInterval(function(){

//     // x = 0
//     if( x == 0){
//         x = 55;
//     } else if(x == 55) {
//       console.log(tidak di jalankan);
//     }
//     console.log(x);
//     document.getElementById('nav-down').style.top = String(x) + "px";
//     // document.getElementById('nav-down').style.bottom = String(x) + "px";

// }, 1000);

var i = 0;
function change() {
  var doc =   document.getElementById('nav-down')
  var color = [40,55];
  doc.style.top = `${color[i]}px`;
  i = (i + 1) % color.length;
}
setInterval(change, 1000);