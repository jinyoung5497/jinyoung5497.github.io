// open and close side navigation

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// dropdown button on top nav

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// ---------- hover ---------------
function changeColor1() {
    document.getElementById("main").style.background = "linear-gradient(rgb(14, 61, 22) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(14, 61, 22)"
    document.getElementById("circle1").style.visibility = "visible"
    document.getElementById("circle1").style.opacity = "1"
    document.getElementById("circle1").style.transition = "0.3s"
}

function changeColor2() {
    document.getElementById("main").style.background = "linear-gradient(rgb(54, 61, 14) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(54, 61, 14)"
    document.getElementById("circle2").style.visibility = "visible"
    document.getElementById("circle2").style.opacity = "1"
    document.getElementById("circle2").style.transition = "0.3s"
}

function changeColor3() {
    document.getElementById("main").style.background = "linear-gradient(rgb(61, 14, 14) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(61, 14, 14)"
    document.getElementById("circle3").style.visibility = "visible"
    document.getElementById("circle3").style.opacity = "1"
    document.getElementById("circle3").style.transition = "0.3s"
}

function changeColor4() {
    document.getElementById("main").style.background = "linear-gradient(rgb(14, 46, 61) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(14, 46, 61)"
    document.getElementById("circle4").style.visibility = "visible"
    document.getElementById("circle4").style.opacity = "1"
    document.getElementById("circle4").style.transition = "0.3s"
}

function changeColor5() {
    document.getElementById("main").style.background = "linear-gradient(rgb(38, 14, 61) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(38, 14, 61)"
    document.getElementById("circle5").style.visibility = "visible"
    document.getElementById("circle5").style.opacity = "1"
    document.getElementById("circle5").style.transition = "0.3s"
}

function changeColor6() {
    document.getElementById("main").style.background = "linear-gradient(rgb(61, 14, 41) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = "rgb(61, 14, 41)"
    document.getElementById("circle6").style.visibility = "visible"
    document.getElementById("circle6").style.opacity = "1"
    document.getElementById("circle6").style.transition = "0.3s"
}

let circleCount;

function noChangeColor() {
    document.getElementById("main").style.background = "linear-gradient(rgb(19, 14, 61) 0%, rgb(27, 27, 27) 40%, rgb(27, 27, 27) 100%)"
    document.getElementById("nav-top").style.background = ""
    for (let i = 1; i <= 6; i++) {
        circleCount = "circle" + i;
        document.getElementById(circleCount).style.visibility = "hidden"
        document.getElementById(circleCount).style.opacity = "0"
    }
}

function fadeIn(circleNum) {
    document.getElementById(`circle${circleNum}`).style.transform = "translate(-50%, -60%)"
    document.getElementById(`circle${circleNum}`).style.visibility = "visible"
    document.getElementById(`circle${circleNum}`).style.opacity = "1"
}

function fadeOut(circleNum) {
    document.getElementById(`circle${circleNum}`).style.transform = "translate(-50%, -40%)"
    document.getElementById(`circle${circleNum}`).style.visibility = "hidden"
    document.getElementById(`circle${circleNum}`).style.opacity = "0"
}