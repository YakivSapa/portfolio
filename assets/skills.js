let skills = {
    html: {svg: "../assets/styles/svg/skills/html.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    css: {svg: "../assets/styles/svg/skills/css-3.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    bootstrap: {svg: "../assets/styles/svg/skills/bootstrap.svg", link: "https://getbootstrap.com"},
    javascript: {svg: "../assets/styles/svg/skills/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    typescript: {svg: "../assets/styles/svg/skills/typescript.svg", link: "https://www.typescriptlang.org"},
    react: {svg: "../assets/styles/svg/skills/react.svg", link: "https://react.dev"},
    jquery: {svg: "../assets/styles/svg/skills/jquery.svg", link: "https://jquery.com"},
    php: {svg: "../assets/styles/svg/skills/php.svg", link: "https://www.php.net"},
    mysql: {svg: "../assets/styles/svg/skills/mysql.svg", link: "https://www.mysql.com"},
    git: {svg: "../assets/styles/svg/skills/git.svg", link: "https://git-scm.com"}
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