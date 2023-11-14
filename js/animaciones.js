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
        setTimeout(() => {
            itemDiv.classList.add('active');
        }, 10);
    });
}
