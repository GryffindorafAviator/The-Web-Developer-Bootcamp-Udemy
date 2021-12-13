const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const letters = document.querySelectorAll("span");

for (let i = 0; i < 7;i++) {
    letters[i].style.color=colors[i];
}
