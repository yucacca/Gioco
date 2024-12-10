let img_cuori;
let cuori;


function preload_cuori(s) {
    img_cuori = PP.assets.sprite.load_spritesheet(s,"assets/images/cuori.png", 32, 32);
}


function collision_cuori(s, player, cuori) {

    PP.assets.destroy(cuori);

    let prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score+1);
}


function create_cuori(s,player) {
        cuori = PP.assets.sprite.add(s, img_cuori, 512, 350, 0.5, 1); 
        PP.physics.add(s, cuori, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, cuori, collision_cuori);
}

function update_cuori(s) {
    
}