// Function to render a user card on the page
function renderUserCard(user) {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const nameElement = document.createElement("h3");
    nameElement.textContent = user.name;

    const birthdayElement = document.createElement("p");
    birthdayElement.textContent = `Birthday: ${user.birthday}`;

    const emailElement = document.createElement("p");
    emailElement.textContent = `Email: ${user.email}`;

    const passwordElement = document.createElement("p");
    passwordElement.textContent = `Password: ${user.password}`;

    const phoneNumberElement = document.createElement("p");
    phoneNumberElement.textContent = `Phone Number: ${user.phoneNumber}`;

    userCard.appendChild(nameElement);
    userCard.appendChild(birthdayElement);
    userCard.appendChild(emailElement);
    userCard.appendChild(passwordElement);
    userCard.appendChild(phoneNumberElement);

    return userCard;
}

// Function to display the generated random users on the page
function displayRandomUsers(numUsers) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    const users = generateRandomUsers(numUsers);

    users.forEach((user) => {
        const userCard = renderUserCard(user);
        userList.appendChild(userCard);
    });
}

// Event listener to generate random users on button click
document.getElementById("generate-btn").addEventListener("click", () => {
    displayRandomUsers(30); // You can change the number of users here.
});

// Initial display of random users when the page loads
displayRandomUsers(0); // You can set this to 0 if you don't want to show any users initially.
