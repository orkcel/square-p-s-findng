function findPerimeter() {
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const perimeter = 2 * (parseInt(height) + parseInt(width));
    document.getElementById("result").innerText = `Perimeter of the square is: ${perimeter}`;
}

function findArea() {
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const area = parseInt(height) * parseInt(width);
    document.getElementById("result").innerText = `Area of the square is: ${area}`;
}