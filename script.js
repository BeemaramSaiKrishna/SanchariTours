function submitForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name");
        return false;
    }
    document.getElementById("successMsg").innerHTML =
        "Thank you " + name + "! Your request has been submitted.";
    return false; 
}
window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get("destination");
    const category = params.get("category");
    if (destination) {
        document.getElementById("destination").value = destination;
    }
    if (category) {
        document.getElementById("category").value = category;
    }
});