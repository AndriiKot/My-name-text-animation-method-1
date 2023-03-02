const paths = document.querySelectorAll('#myname path');

for (let i = 0; i < paths.length; i++){
  console.log(Math.ceil(paths[i].getTotalLength()));
}