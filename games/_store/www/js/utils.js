function repaint(id, value) {
    var el = document.getElementById(id);
    if (el.hasChildNodes())
        el.removeChild(el.firstChild);
    el.appendChild(document.createTextNode(value));
}

function getImagePath(index) {
    return "pieces/pieces" + index + ".png"
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
