let wall;
let pavimenti;

function preload_pavimenti(s) {

}

function collision_pavimenti(s, player, platform) {
    // Funzione di collisione con le piattaforme.
    // Qui devo verificare che il giocatore si trovi sopra
    // la piattaforma e in quel caso aggiorno la variabile che
    // abilita il salto (v. player.js)
    if( player.geometry.x >= pavimenti.geometry.x - pavimenti.geometry.display_width &&
        player.geometry.x <= pavimenti.geometry.x + pavimenti.geometry.display_width ) {
            player.is_on_platform = true;
            console.log ("salto");
    }
}

function create_pavimenti(s,player,wall) {
    
//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità. Per la posizione x prende il punto in mezzo, quindi va aggiunto metà spessore. 
//muro sx
    wall = PP.shapes.rectangle_add(s, 0, 0, 1, 2000, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

//piattaforma 1
    pavimenti = PP.shapes.rectangle_add(s, 320, 640, 640, 150, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


 //piattaforma 2
    pavimenti = PP.shapes.rectangle_add(s, 1088, 640, 128, 150, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 2b
    pavimenti = PP.shapes.rectangle_add(s, 1344, 480, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 3
    pavimenti = PP.shapes.rectangle_add(s, 2048, 688, 768, 64, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 4
    pavimenti = PP.shapes.rectangle_add(s, 2816, 544, 768, 352, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 5
    pavimenti = PP.shapes.rectangle_add(s, 3360, 544, 64, 352, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);




}

function update_pavimenti(s) {
    
}