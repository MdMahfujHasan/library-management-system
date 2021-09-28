// alert message 
const unavilableFeature = () => {
    alert("This feature is not available yet, please check back in the future.");
}

// fetch user
const url = `https://jsonplaceholder.typicode.com/users`
fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))

const displayUser = users => {
    const userInfo = document.getElementById('user-info');
    for (const user of users) {
        const p = document.createElement('p');
        p.innerText = `
        Rank: ${user.id}
        Name: ${user.name}
        Email: ${user.email}
        Phone: ${user.phone}
        Website: ${user.website}
        Company: ${user.company.name}
        `
        p.classList.add('col-4');
        p.classList.add('user-container');
        userInfo.appendChild(p);
    }
}