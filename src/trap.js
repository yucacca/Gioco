let img_trap;
let trap;
let trap_2;

function preload_trap(s) {
    img_trap = PP.assets.image.load(s, "assets/images/player_placeholder.png");
}



function goto_game_over(s, obj1, obj2) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    PP.scenes.start("game_over");
}


function create_trap(s, player) {
    trap = PP.assets.image.add(s, img_trap, 800, 580, 0.5, 1);
    PP.physics.add(s, trap, PP.physics.type.STATIC);
    //PP.physics.add_collider(s, trap, floor);
    PP.physics.add_collider_f(s,player, trap, goto_game_over);

    //PP.physics.set_velocity_y(trap, 50);


    trap_2 = PP.assets.image.add(s, img_trap, 1200, 580, 0.5, 1);
    PP.physics.add(s, trap_2, PP.physics.type.STATIC);
    //PP.physics.add_collider(s, trap, floor);
    PP.physics.add_collider_f(s,player, trap_2, goto_game_over);
} 

function update_trap(s) {
    
}