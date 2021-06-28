// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value"); 
// class 
const btns = document.querySelectorAll(".btn");

// clall by function
btns.forEach(function (btn) {
  // pass cll by function in addEventListener
  btn.addEventListener("click", function (e) {
    // e = evet taget / event has property currentTarget
    //  console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    // classList = get all the classes we have 
    
  
    if (styles.contains("decrease")) {
      count--;        
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // changeing the color of value
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});