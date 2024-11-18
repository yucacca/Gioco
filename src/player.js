let img_player;
let player;

function preload_player(s) {
    img_player = PP.assets.image.load(s,"assets/images/player_placeholder.png");
}

function create_player(s) {
    player = 
    img_player = PP.assets.image.add(s, img_player, 500, 550, 0.5, 1);
}

function update_player(s) {
    
}