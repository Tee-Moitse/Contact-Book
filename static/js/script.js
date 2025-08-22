document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const contactList = document.getElementById("contactList");
    const contacts = contactList.getElementsByTagName("li");

    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        Array.from(contacts).forEach(function (contact) {
            const text = contact.textContent.toLowerCase();
            contact.style.display = text.includes(filter) ? "" : "none";
        });
    });
});
