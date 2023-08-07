const names = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "David Anderson",
    "Sarah Lee",
    "Robert Brown",
    "Amanda Wilson",
    "Daniel Moore",
    "Laura Taylor",
    "Matthew Clark",
    "Olivia White",
    "James Hall",
    "Elizabeth Allen",
    "William Martin",
    "Sophia Scott",
    "Joseph Turner",
    "Mia Murphy",
    "Charles Green",
    "Abigail King",
    "Christopher Hill",
    "Emily Carter",
    "Andrew James",
    "Grace Young",
    "Benjamin Evans",
    "Chloe Martinez",
    "David Garcia",
    "Ella Phillips",
    "Alexander Mitchell",
    "Ava Rivera",
  ];
  
  const generateRandomBirthday = () => {
    const day = Math.floor(Math.random() * 28) + 1;
    const month = Math.floor(Math.random() * 12) + 1;
    const year = Math.floor(Math.random() * (2001 - 1980) + 1980); // Random year between 1970 and 2002
    
  
    return `${day}-${month.toString().padStart(2, "0")}-${year.toString().padStart(2, "0")}`;
  };
  
  const generateRandomEmail = (name) => {
    const username = name.replace(/\s/g, "").toLowerCase();
    const domains = ["gmail.com", "yahoo.com", "ASC.org", "hotmail.net"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${randomDomain}`;
  };
  

  const generateRandomPassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  };
  
  const generateRandomPhoneNumber = () => {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const firstThreeDigits = Math.floor(Math.random() * 900) + 100;
    const lastFourDigits = Math.floor(Math.random() * 9000) + 1000;
    return `${areaCode}-${firstThreeDigits}-${lastFourDigits}`;
  };
  
  const generatedUsers = new Set();
  
  // Function to generate a random user object
  function generateRandomUser() {
    let randomIndex;
    let name, birthday, email, password, phoneNumber;
    do {
      randomIndex = Math.floor(Math.random() * names.length);
      name = names[randomIndex];
      birthday = generateRandomBirthday();
      email = generateRandomEmail(name);
      password = generateRandomPassword();
      phoneNumber = generateRandomPhoneNumber();
    } while (generatedUsers.has(email)); // Check if email is already generated
  
    generatedUsers.add(email);
    
    return {
      name,
      birthday,
      email,
      password,
      phoneNumber,
    };
  }
  
  // Function to generate an array of random users
  function generateRandomUsers(numUsers) {
    generatedUsers.clear(); // Clear the set before generating new users
    const users = [];
    for (let i = 0; i < numUsers; i++) {
      users.push(generateRandomUser());
    }
    return users;
  }
  