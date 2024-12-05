let rovi;
let player; 

function preload_rovi(s) {
    
}

function create_rovi(s,player,rovi) {
    rovi = PP.shapes.rectangle_add(s, 2048, 350, 640, 64, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

}

function update_rovi(s) {
    
}