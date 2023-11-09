document.addEventListener('DOMContentLoaded', function () {
    // Mostrar todos los productos al cargar la página
    filterCategory('pastas');
});

// Función para mostrar/ocultar las opciones de categoría
function toggleCategories() {
    const menuCategories = document.getElementById('menuCategories');
    menuCategories.style.display = (menuCategories.style.display === 'block') ? 'none' : 'block';
}

function filterCategory(category) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';

    const filteredItems = menu.find(item => item.category === category).items;

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}</p>
        `;
        menuContainer.appendChild(itemDiv);
    });
}