let coll = document.getElementsByClassName("collap");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let text = this.nextElementSibling;
      if (text.style.maxHeight){
        text.style.maxHeight = null;
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      } 
    });
  }