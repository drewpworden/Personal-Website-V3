const buttons = document.querySelectorAll(".school")
const blocks = document.querySelectorAll(".school-block")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        blocks[i].style.display = "grid";
        blocks[i].style.animation = "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"

        for (let j = 1; j < buttons.length + 1; j++) {
            if ((i + j + 1) <= buttons.length)
         {
             blocks[i + j].style.display = "none";
         }
        }

        for (let j = 1; j < buttons.length + 1; j++) {
            if ((i - j) >= 0)
         {
             blocks[i - j].style.display = "none";
         }
        }
    })
}
