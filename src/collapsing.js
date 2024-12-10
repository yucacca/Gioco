let collapsing_1;
let collapsing_2;
let collapsing_3;
let collapsing_4;
let collapsing_5;

player.is_on_collapsing_1 == false;



function preload_collapsing(s) {

}


//in pratica va ricopiata per ciascuna piattaforma


function create_collapsing(s,player,collapsing) {
    
//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità. Per la posizione x e y prende il punto in mezzo, quindi va aggiunto metà spessore. 

//collapsing 1
    collapsing_1 = PP.shapes.rectangle_add(s, 832, 480, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing_1, PP.physics.type.DYNAMIC);     
    PP.physics.set_immovable(collapsing_1, true);
    PP.physics.set_allow_gravity(collapsing_1, false);    
    PP.physics.add_collider_f(s, player, collapsing_1, collision_collapsing_1);

function collision_collapsing_1(s, player, collapsing_1) {
    if( player.geometry.x >= collapsing_1.geometry.x - collapsing_1.geometry.display_width &&
        player.geometry.x <= collapsing_1.geometry.x + collapsing_1.geometry.display_width &&
        player.geometry.y == collapsing_1.geometry.y - collapsing_1.geometry.display_height/2) {
            player.is_on_platform = true;
            player.is_on_collapsing_1 = true;
            
            console.log("ti prego ti prego");
    }

    function move_collapsing_1(s) {   
        PP.physics.add(s, collapsing_1, PP.physics.type.DYNAMIC); 
        PP.physics.set_allow_gravity(collapsing_1, true);  
        PP.physics.set_velocity_y(collapsing_1, 100);
        console.log("cade");
    } 

    if (player.is_on_collapsing_1) {

        PP.timers.add_timer(s, 250, move_collapsing_1, false);
        
            console.log("miaoooo");
        
        }

    else {
            player.is_on_collapsing_1 == false;
        
        
        }
}

//collapsing 2
    collapsing_2 = PP.shapes.rectangle_add(s, 2752, 224, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(collapsing_2, true);
    PP.physics.set_allow_gravity(collapsing_2, false);    
    PP.physics.add_collider_f(s, player, collapsing_2, collision_collapsing_2);


    function collision_collapsing_2(s, player, collapsing_2) {
        if( player.geometry.x >= collapsing_2.geometry.x - collapsing_2.geometry.display_width &&
            player.geometry.x <= collapsing_2.geometry.x + collapsing_2.geometry.display_width &&
            player.geometry.y == collapsing_2.geometry.y - collapsing_2.geometry.display_height/2) {
                player.is_on_platform = true;
                player.is_on_collapsing_2 = true;
                
                console.log("ti prego ti prego");
        }
    
        function move_collapsing_2(s) {   
            PP.physics.add(s, collapsing_2, PP.physics.type.DYNAMIC); 
            PP.physics.set_allow_gravity(collapsing_2, true);  
            PP.physics.set_velocity_y(collapsing_2, 100);
            console.log("cade");
        } 
    
        if (player.is_on_collapsing_2 == true) {
    
            PP.timers.add_timer(s, 250, move_collapsing_2, false);
            
                console.log("miaoooo");
            
            }
    
        else {
                player.is_on_collapsing_2 = false;
            
            }
    }



//qui per ciascuna piattaforma va copiato da collision collapsing a else (compreso) e cambiati tutti i numeri in quelli della piattaforma

/*
//collapsing 3
    collapsing_3 = PP.shapes.rectangle_add(s, 3008, 192, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(collapsing, true);
    PP.physics.set_allow_gravity(collapsing, false);    
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 4
    collapsing_4 = PP.shapes.rectangle_add(s, 6176, 656, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(collapsing, true);
    PP.physics.set_allow_gravity(collapsing, false);     
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 5
    collapsing_5 = PP.shapes.rectangle_add(s, 6944, 192, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(collapsing, true);
    PP.physics.set_allow_gravity(collapsing, false);     
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);
*/
}


/*function move_collapsing(s) {   
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC); 
    PP.physics.set_allow_gravity(collapsing, true);  
    PP.physics.set_velocity_y(collapsing, 100);
    console.log("cade");
}  */

