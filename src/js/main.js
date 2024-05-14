function findPerimeter() {
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
    const perimeter = 2 * (parseInt(length) + parseInt(width));
    document.getElementById("result").innerText = `Perimeter of the square is: ${perimeter}`;
}

function findArea() {
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
    const area = parseInt(length) * parseInt(width);
    document.getElementById("result").innerText = `Area of the square is: ${area}`;
}