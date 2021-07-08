


//  closing  the  pop-up box.  Select element & event listner to not display it.
document.querySelector("#close").addEventListener("click", function() {
  document.querySelector(".pop-up").style.display="none";
})


//  function to make pop-up

const popup = document.querySelector(".pop-up");

window.onload = function(){
  setTimeout(function(){
    popup.style.display = "flex"
    //  time delay for pop-up
  }, 3000)
}