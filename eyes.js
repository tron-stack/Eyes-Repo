var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    };



var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
