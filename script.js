const container = document.querySelector('.container');
const magazineWordsContainer = document.querySelector('.magazine-words');
const sampleWords = ["LOREM", "IPSUM", "DOLOR", "SIT", "AMET,", "CONSECTETUR", "ADIPISICING", "ELIT.", "SED", "DO", "EIUSMOD", "TEMPOR", "INCIDIDUNT", "UT", "LABORE", "ET", "DOLORE", "MAGNA", "ALIQUA."];
function getRandomShape() {
    const shapes = ['circle', 'square', 'triangle'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}
function getRandomColor() {
    const colors = ['#FF007F', '#FFEA00', '#00FFD5', '#FF3D00', '#7C4DFF', '#00FF00', '#FFAB40'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomRotation() {
    return Math.random() * 360;
}
function getRandomTriangleType() {
    const triangleTypes = ['equilateral', 'isosceles'];
    return triangleTypes[Math.floor(Math.random() * triangleTypes.length)];
}
function createShape() {
    const shape = document.createElement('div');
    const randomShape = getRandomShape();
    shape.classList.add('shape', randomShape);
    const size = Math.random() * 277 + 77;
    shape.style.width = randomShape === 'triangle' ? '0' : `${size}px`;
    shape.style.height = randomShape === 'triangle' ? '0' : `${size}px`;
    if (randomShape === 'triangle') {
        const triangleType = getRandomTriangleType();
        if (triangleType === 'equilateral') {
            shape.style.borderLeft = `${size / 2}px solid transparent`;
            shape.style.borderRight = `${size / 2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${getRandomColor()}`;
        } else if (triangleType === 'isosceles') {
            const base = Math.random() * 80 + 20;
            shape.style.borderLeft = `${base / 2}px solid transparent`;
            shape.style.borderRight = `${base / 2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${getRandomColor()}`;
        }
        shape.style.background = 'none';
    } else {
        shape.style.borderRadius = randomShape === 'circle' ? '50%' : '0';
        shape.style.backgroundColor = getRandomColor();
    }
    shape.style.top = `${Math.random() * 100}vh`;
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.transform = `rotate(${getRandomRotation()}deg)`;
    shape.style.opacity = 1;
    container.appendChild(shape);
    const fadeOutTime = Math.random() * 2000 + 500;
    setTimeout(() => {
        shape.style.transition = 'opacity 1s ease-out';
        shape.style.opacity = 0;
        setTimeout(() => {
            shape.remove();
        }, 1000);
    }, fadeOutTime);
}
function generateShapes() {
    const numberOfShapes = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfShapes; i++) {
        createShape();
    }
}
function createMagazineWord() {
    const word = document.createElement('div');
    word.classList.add('word');
    word.textContent = sampleWords[Math.floor(Math.random() * sampleWords.length)];
    const fontSize = Math.random() * 65 + 50;
    word.style.fontSize = `${fontSize}px`;
    word.style.color = getRandomColor();
    word.style.top = `${Math.random() * 100}vh`;
    word.style.left = `${Math.random() * 100}vw`;
    word.style.transform = `rotate(${getRandomRotation()}deg)`;
    word.style.opacity = 1;
    magazineWordsContainer.appendChild(word);
    setTimeout(() => {
        word.style.transition = 'opacity 1s ease-out';
        word.style.opacity = 0;
        setTimeout(() => {
            word.remove();
        }, 3000);
    }, Math.random() * 2000 + 500);
}
setInterval(generateShapes, 200);
setInterval(createMagazineWord, 200);
