
const fullBox = document.getElementById('full-box');
const loadRandomUser = (x = 20) => {
    if (x <= 5000 && x >= 1) {
        const url = `https://randomuser.me/api/?results=${x}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayUsers(data.results))
    }
    else {
        alert('Invalid Input (Min: 1, Max: 5000)');
    }
}

const displayUsers = (users) => {
    let i = 0;
    fullBox.innerHTML = '';

    users.forEach(user => {
        i++;
        const userDiv = document.createElement('div');
        userDiv.classList.add('bg-green-400', 'overflow-hidden', 'rounded-lg', 'shadow-lg');
        userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="" class="w-full">
        <ul class="p-5">
            <li class="text-xl font-semibold mb-3">${i}. ${user.name.title} ${user.name.first} ${user.name.last}</li>
            <li><span class="font-semibold">Street: </span> ${user.location.street.number}, ${user.location.street.name}</li>
            <li><span class="font-semibold">City: </span>${user.location.city}</li>
            <li><span class="font-semibold">Country: </span>${user.location.country}</li>
            <li><span class="font-semibold">Phone: </span>${user.phone}</li>
        </ul>
        `
        fullBox.appendChild(userDiv);
        console.log(user)
    })
}

loadRandomUser();

document.getElementById('show-user-button').addEventListener('click', function () {
    const showUserInput = document.getElementById('show-user-input');
    const amount = showUserInput.value;
    loadRandomUser(amount);
})