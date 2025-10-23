let skills = {
    html: {svg: "../assets/styles/svg/skills/html.svg", link: "#"},
    css: {svg: "../assets/styles/svg/skills/css-3.svg", link: "#"},
    bootstrap: {svg: "../assets/styles/svg/skills/bootstrap.svg", link: "#"},
    javascript: {svg: "../assets/styles/svg/skills/javascript.svg", link: "#"},
    typescript: {svg: "../assets/styles/svg/skills/typescript.svg", link: "#"},
    react: {svg: "../assets/styles/svg/skills/react.svg", link: "#"},
    jquery: {svg: "../assets/styles/svg/skills/jquery.svg", link: "#"},
    php: {svg: "../assets/styles/svg/skills/php.svg", link: "#"},
    mysql: {svg: "../assets/styles/svg/skills/mysql.svg", link: "#"},
    git: {svg: "../assets/styles/svg/skills/git.svg", link: "#"}
}

let html = "";
for (let [name, details] of Object.entries(skills)) {
    html += `
            <a class="skillBox" href="${details.link}">
                <div class="skillImage" style="background-image: url('${details.svg}')"></div>
            </a>
    `
}

const skillSet = document.getElementById("skills-row");
skillSet.innerHTML = html;