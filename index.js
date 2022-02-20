const links = document.getElementById("primary").children;

for (let i = 0; i < links.length; i++) {
    if ((i + 1) % 2 != 0) {
        const item = links[i];
        item.style.backgroundColor = "teal";
        item.style.color = "white";
    }
}