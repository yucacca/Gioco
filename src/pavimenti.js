let wall;

function preload_pavimenti(s) {

}

function create_pavimenti(s,player,wall) {
    
//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità
//muro sx
    wall = PP.shapes.rectangle_add(s, 0, 0, 1, 2000, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

//piattaforma 1
    wall = PP.shapes.rectangle_add(s, 320, 640, 640, 150, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

 //piattaforma 2
    wall = PP.shapes.rectangle_add(s, 320, 640, 640, 150, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);



}

function update_pavimenti(s) {
    
}