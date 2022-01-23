var a=["Bill gates 1.jpg","Bill Gates 2.jpeg","Bill Gates 3.jpg"];
function changePic(){

  document.getElementById("pic").src=a
  i=i+1;
  if(i==3){
    i=0
  }
}
