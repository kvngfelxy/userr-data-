// API url
const url = "https://jsonplaceholder.typicode.com/users";

//Fetch users from the API url
function fetchUsers() {
    fetch(url).then((response) => response.json())
        .then((data) => {
            //Passing the user data to the renderUsers function
            renderUsers(data);
        });
}

//Render the users in the DOM
function renderUsers(usersData) {
    // console.log(usersData)
    const ul = document.getElementById("user-list-container");
    // console.log(ul);

    //Render an li tag for each of the users
    usersData.forEach((user, index) => {
        console.log(user, index + 1);
        const li = document.createElement("li")
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span class="name">${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;

        //Append the current li tag to the ul tag
        ul.appendChild(li);
    });
}

//Search button in the DOM
function searchUsersByUsername() {
    const input = document.getElementById('search');
    const ul = document.getElementById('user-list-container');
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li");

    //Loop through all the users and render the ones that matches the search
    for (let index = 0; index < usersList.length; index++) {
        const nameSpanTag = usersList[index].querySelector(".name");
        const nameSpanTagValue = nameSpanTag.innerText.toUpperCase();
        const isMatch = nameSpanTagValue.indexOf(inputValue) > -1;
        if (isMatch) {
           usersList[index].style.display ='block';
        }else{
            usersList[index].style.display ='none';
        }
    }
    // console.log(input);
    // console.log(inputValue);
    // console.log(ul);


}

//Calling the fetch function
fetchUsers();