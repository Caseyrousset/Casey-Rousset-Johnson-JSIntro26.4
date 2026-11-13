

// ===== FOOTER ===== //

console.log("Javascript is connected!");

let today = new Date();
let thisYear = today.getFullYear();

let footer = document.createElement("footer");
document.body.appendChild(footer);

let copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Casey Rousset-Johnson`;
footer.appendChild(copyright);


// ====== SKILLS ===== //

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];

let skillsSection = document.querySelector('#Skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

let allSkills = skillsList.querySelectorAll("li");

allSkills.forEach(function(item) {
    item.addEventListener("click", function() {
        item.style.fontWeight = "bold";
        item.style.color = "#FF5C35";
    });
})