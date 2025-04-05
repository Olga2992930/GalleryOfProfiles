const API_URL = 'https://randomuser.me/api/?results=';

let loadedCount = 50;

async function fetchProfiles(count) {
    const response = await fetch(`${API_URL}${count}`);
    const data = await response.json();
    return data.results;
}

function displayProfiles(profiles) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 

    profiles.forEach(profile => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${profile.picture.large}" alt="${profile.name.first}">
            <h2>${profile.name.first} ${profile.name.last}</h2>
            <p>Gender: ${profile.gender}</p>
            <p>Age: ${profile.dob.age}</p>
            <p>Phone: ${profile.phone}</p>
            <p>Email: ${profile.email}</p>
            <p>Location: ${profile.location.city}, ${profile.location.country}</p>
        `;
        gallery.appendChild(div);
    });
}

function handleNavClick(profileCount) {
    fetchProfiles(profileCount).then(displayProfiles);
}

document.getElementById('profiles-60').addEventListener('click', function(event) {
    event.preventDefault();
    handleNavClick(60);
});

document.getElementById('profiles-70').addEventListener('click', function(event) {
    event.preventDefault();
    handleNavClick(70);
});

document.getElementById('profiles-80').addEventListener('click', function(event) {
    event.preventDefault();
    handleNavClick(80);
});

document.getElementById('profiles-90').addEventListener('click', function(event) {
    event.preventDefault();
    handleNavClick(90);
});

document.getElementById('profiles-100').addEventListener('click', function(event) {
    event.preventDefault();
    handleNavClick(100);
});

fetchProfiles(50).then(displayProfiles);
