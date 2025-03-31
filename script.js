const API_URL = 'https://randomuser.me/api/?results=50';

async function fetchProfiles() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
}

function displayProfiles(profiles) {
    const gallery = document.getElementById('gallery');
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

fetchProfiles().then(displayProfiles);
