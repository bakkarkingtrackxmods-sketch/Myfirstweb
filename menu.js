function openMenu() {
    document.getElementById("sidebar").style.width = "260px";
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

window.onclick = function(e) {
    if (!e.target.closest("#sidebar") && !e.target.closest(".menu-btn")) {
        closeMenu();
    }
};
localStorage.setItem("adminUser", username);
window.location.href = "dashboard.html";