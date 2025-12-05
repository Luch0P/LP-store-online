// ---- ACTIVAR / DESACTIVAR MODO OSCURO ----
document.getElementById("themeToggle").onclick = () => {
    document.documentElement.classList.toggle("dark-mode");

    // guardar modo (oscuro o claro)
    localStorage.setItem("modo", document.documentElement.classList.contains("dark-mode") ? "oscuro" : "claro");
};

// ---- APLICAR EL MODO SI ESTABA GUARDADO ----
if (localStorage.getItem("modo") === "oscuro") {
    document.documentElement.classList.add("dark-mode");
}
