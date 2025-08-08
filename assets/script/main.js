function uptadeProfileInfo(profileData){
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const person = document.getElementById('profile.person');
    person.innerText = profileData.person;

    const local = document.getElementById('profile.local');
    local.innerText = profileData.local;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    person.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;

    const linkedin = document.getElementById('profile.linkedin');
    linkedin.innerText = profileData.linkedin;
    linkedin.href = profileData.linkedin.startsWith('http') ? profileData.linkedin : `https:${profileData.linkedin}`;
    
    const github = document.getElementById('profile.github');
    github.innerText = profileData.github;
    github.href = profileData.github.startsWith('http') ? profileData.github : `https:${profileData.github}`;
    
}

function uptadeSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML =  profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function uptadeHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML =  profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function uptadeLanguages(profileData) {
    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function uptadePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <span ${project.github ? 'class="github"' : ''}">${project.name}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>`
    }).join('');
}

function uptadeCourses(profileData) {
    const courses = document.getElementById('profile.courses');

    if (Array.isArray(profileData.courses)) {
        courses.innerHTML = profileData.courses
            .map(course => `<li> <span class="title github">${course.name}</span><span class="course">${course.institution}</span></li>`)
            .join('');
    } else {
        courses.innerHTML = '<li>Nenhum curso encontrado.</li>';
    }
}



(async () => {
    const profileData = await fetchProfileData()
    uptadeProfileInfo(profileData)
    uptadeSoftSkills(profileData)
    uptadeHardSkills(profileData)
    uptadeCourses(profileData)
    uptadeLanguages(profileData)
    uptadePortfolio(profileData)
})()