// variable for the message section
let messageSection = document.querySelector("#Messages");

// variable for the unordered list in the message section
let messageList = messageSection.querySelector("ul");

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

let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
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


// ====== ASYNC AND PROMISE ASSIGNMENT: LEAVE A MESSAGE ======

// Set a variable that selects the leave_message attribute of the Form element
let messageForm = document.querySelector('[name="leave_message"]');

// Add event listener for submit that retrieves the values inputted into the form fields
messageForm.addEventListener("submit", function (event) {
    // This prevents auto refresh of page and should be standard for submit events
    event.preventDefault();
    // Variables that take the submitted values from the form fields
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    // log to double check if the submit values are being stored
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Display Message List

    // variable for new list items in the unordered list of the message section
    let newMessage = document.createElement("li");

    // The span here is where the message is located and will be used later for edit functionality
    newMessage.innerHTML = `<a href="mailto:${email}">${name}:</a>
    <br>
    <span>${message}</span>
    <br>`;
    // Add messageText class to new messages
    newMessage.classList.add("messageText");

    // Create remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    
    // Add event listener that uses remove method to target the parent node (the li in this case)
    removeButton.addEventListener("click", function() {
        let entry = removeButton.parentNode;
        entry.remove();

        // Use checkMessages function to remove message section if empty after message removed
        checkMessages();
    });

// ===== EDIT BUTTON =====

    // Add edit button
    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.type = "button";

    // Add save button
    let saveButton = document.createElement("button");
    saveButton.innerHTML = "save";
    saveButton.type = "button";
    saveButton.style.display = "none";

    // Add cancel button
    let cancelButton = document.createElement("button");
    cancelButton.innerHTML = "cancel";
    cancelButton.type = "button";
    cancelButton.style.display = "none";

    // ====== Edit Button Functionality =====
    // REVIEW THIS - took me a while to do this and lots of googling. Not very confident in this and I imagine it can be done much better.

    // Make a new variable that takes the new li element (newMessage) and selects the span element within
    let spanMessage = newMessage.querySelector('span');
    // Make a new variable for the textContent in the span element
    let originalMessage = spanMessage.textContent;

    // Add event listener
    editButton.addEventListener("click", function() {
        // Make an editable text field variable
        let editField = document.createElement("textarea");
        // Set the value of the editField to the original message in the span element
        editField.value = spanMessage.textContent;
        // ReplaceWith to update message
        spanMessage.replaceWith(editField);
        // Make Save and Cacel buttons visible, hide edit button
        editButton.style.display = "none";
        // Save and Cancel set to inline to stay on same line
        saveButton.style.display = "inline";
        cancelButton.style.display = "inline";

        // Add event listener to save button
        saveButton.addEventListener("click", function() {
            // Set message in span element to message in edit field
            spanMessage.textContent = editField.value;
            editField.replaceWith(spanMessage);
            // Make edit button visible and hide save and cancel buttons
            editButton.style.display = "inLine";
            // Save and Cancel set to inline to stay on same line
            saveButton.style.display = "none";
            cancelButton.style.display = "none";
        });

        // Add event listener to cancel button
        cancelButton.addEventListener("click", function() {
            //set span message to original text
            spanMessage.textContent = originalMessage;
            editField.replaceWith(spanMessage);
            // Make edit button visible and hide save and cancel buttons
            editButton.style.display = "inLine";
            // Save and Cancel set to inline to stay on same line
            saveButton.style.display = "none";
            cancelButton.style.display = "none";
        });
    });

// ===========================    

    // Append the remove button and edit/save/cancel buttons onto new messages
    newMessage.appendChild(editButton);
    newMessage.appendChild(saveButton);
    newMessage.appendChild(cancelButton);
    newMessage.appendChild(removeButton);

    

    // Append new messages to the message list
    messageList.appendChild(newMessage);

    // clear the form fields with reset() method
    messageForm.reset();

    // Call checkMessage() after a new message is added
    checkMessages();
});

// HIDE EMPTY MESSAGE SECTION CHALLENGE

// Call checkMessages function to remove message section if empty
checkMessages();

// Use conditional to add display: none; or dislpay: "block"; to the style page

function checkMessages() {
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    };
};