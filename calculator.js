let str = "";
const btns = document.querySelectorAll(".btn");
Array.from(btns).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      document.getElementById("display").style.animationName = "blink";
      document.getElementById("display").innerText = eval(str);
    } else if ((e.target.innerHTML == "C")) {
        str='|'
      document.getElementById("display").innerText = str;
    } else {
      document.getElementById("display").style.animationName = null;
      str =str=='|'? e.target.innerHTML: str+e.target.innerHTML;
      document.getElementById("display").innerText = str;
    }
  });
});
