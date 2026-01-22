const downloadButton = document.querySelector("#download");
const FILE_URL = "/assets/CV_Kulagina.pdf";
const FILE_NAME = "CV_Kulagina.pdf";

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = FILE_URL;
    link.download = FILE_NAME;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function themeSwitch() {
    const body = document.body;
    body.classList.toggle("dark_mode");
}