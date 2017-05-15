function backgroundgradient(game) {
    var bmp = game.add.bitmapData(game.width, game.height);
    var grd = bmp.context.createLinearGradient(0, 0, 0, game.height);
    grd.addColorStop(0, "#EF5091");
    grd.addColorStop(1, "#FFFFFF");
    bmp.context.fillStyle = grd;
    bmp.context.fillRect(0, 0, game.width, game.height);
    var lol = game.add.sprite(0, 0, bmp);
    lol.alpha = 0;
    game.add.tween(lol).to({ alpha: 1 }, 2000).start();
}
function addsprite(game, img, pos, x, y)
{
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2, is = isize(img);
    switch (pos)
    {
        case 'top': break;
        case 'left': break;
        case 'right': break;
        case 'bottom': break;
        default: break;
    }
}
function isize(img) {
    var w = game.cache.getImage(img).width, h = game.cache.getImage(img).height;
    return {w, h};
}