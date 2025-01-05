let rovi;
let rovi_1;
let rovi_2;
let img_rovi;

function preload_rovi(s) {
    img_rovi = PP.assets.image.load(s, "assets/images/rovo1.png");
}

function create_rovi(s,player,rovi) {
    rovi_1 = PP.assets.image.add(s, img_rovi, 1872, 666, 0.5,1);
    PP.physics.add(s,rovi_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, rovi_1, perdi_vite);

    rovi_2 = PP.assets.image.add(s, img_rovi, 2300, 666, 0.5,1);
    PP.physics.add(s,rovi_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, rovi_2, perdi_vite);
}


//prob la sposto in gestione per comodità
function perdi_vite(s){
    prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score-1);
    console.log("-1");

    
}



function update_rovi(s) {
    
}