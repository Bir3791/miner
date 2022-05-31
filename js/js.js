const fild = document.querySelector(".fild");

drawField();

function drawField() {
    for (let index = 0; index < 24; index++) {
        let bone = document.createElement("div");
        bone.innerHTML = `fild`;
        bone.classList.add("fild-block");
        fild.appendChild(bone);
    }
}