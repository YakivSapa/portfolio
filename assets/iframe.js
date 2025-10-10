const iframe = document.getElementById("iframe");
const closeButton = document.getElementById("closeButton");

function openIframe(url) {
    iframe.src = url;
    iframe.style.display = "block";
    closeButton.style.display = "inline-block";
};
function closeIframe(){
    iframe.src = "";
    iframe.style.display = "none";
    closeButton.style.display = "none";
};