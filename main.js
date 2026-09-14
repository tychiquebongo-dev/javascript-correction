// Attendre que le contenu du DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // 1. Sélection des éléments HTML par leur ID
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // 2. Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 3. Ajout de l'écouteur d'événement sur le bouton
    changeColorBtn.addEventListener('click', () => {
        // Obtenir une nouvelle couleur aléatoire
        const randomColor = getRandomColor();
        
        // Appliquer la nouvelle couleur comme couleur d'arrière-plan de la boîte
        colorBox.style.backgroundColor = randomColor;
    });

});