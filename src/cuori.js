let img_cuori;
let cuori;

function preload_cuori(s) {
    img_cuori = PP.assets.sprite.load_spritesheet(s,"assets/images/cuori.png", 32, 32);
}

//prob la sposto in gestione per comodità, per avere tutte le funzioni che interagiscono con le vite in un postio solo
function collision_cuori(s, player, cuori) {

    PP.assets.destroy(cuori);

    let prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score+1);
}


function create_cuori(s,player) {
        //cuore 1
        cuori = PP.assets.sprite.add(s, img_cuori, 512, 220, 0.5, 1); 
        PP.assets.sprite.animation_add_list(cuori, "cuori", [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, -1);
        PP.assets.sprite.animation_play(cuori, "cuori");

        PP.physics.add(s, cuori, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, cuori, collision_cuori);


        //cuore 2
        cuori = PP.assets.sprite.add(s, img_cuori, 3680, 378, 0.5, 1); 
        PP.assets.sprite.animation_add_list(cuori, "cuori", [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, -1);
        PP.assets.sprite.animation_play(cuori, "cuori");

        PP.physics.add(s, cuori, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, cuori, collision_cuori);


        //cuore 3
        cuori = PP.assets.sprite.add(s, img_cuori, -1604, 144, 0.5, 1); 
        //PP.assets.sprite.animation_add_list(cuori, "cuori", [0, 2, 4, 6, 8, 10, 12, 14, 16, 1], 5, -1);
        PP.assets.sprite.animation_add_list(cuori, "cuori", [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, -1);
        PP.assets.sprite.animation_play(cuori, "cuori");

        PP.physics.add(s, cuori, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, cuori, collision_cuori);
}

function update_cuori(s) {
    
}