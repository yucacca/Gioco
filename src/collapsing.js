let collapsing_1;
let collapsing_2;
let collapsing_3;
let collapsing_4;
let collapsing_5;

let img_collapsing;





function preload_collapsing(s) {
    img_collapsing = PP.assets.image.load(s, "assets/images/pavimenti/platform_collapsing.png"); 
}


function create_collapsing(s,player) {
    

    player.is_on_collapsing_1 == false;
    player.is_on_collapsing_2 == false;
    player.is_on_collapsing_3 == false;
    player.is_on_collapsing_4 == false;
    player.is_on_collapsing_5 == false;


//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità. Per la posizione x e y prende il punto in mezzo, quindi va aggiunto metà spessore. 

//collapsing 1
    collapsing_1= PP.assets.image.add(s, img_collapsing, 832, 480, 0.5,0.5);
    //collapsing_1 = PP.shapes.rectangle_add(s, 832, 480, 128, 32, "0x634F4F", 1); 
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
            
            
    }

    function move_collapsing_1(s) {   
        PP.physics.add(s, collapsing_1, PP.physics.type.DYNAMIC); 
        PP.physics.set_allow_gravity(collapsing_1, true);  
        PP.physics.set_velocity_y(collapsing_1, 100);
        
    } 

    if (player.is_on_collapsing_1) {

        PP.timers.add_timer(s, 250, move_collapsing_1, false);
        
            
        
        }

    else {
            player.is_on_collapsing_1 == false;
        
        
        }
}

//collapsing 2
    collapsing_2= PP.assets.image.add(s, img_collapsing, 2752, 238, 0.5,0.5);
    //collapsing_2 = PP.shapes.rectangle_add(s, 2752, 238, 128, 32, "0x634F4F", 1); 
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
                
                
        }
    
        function move_collapsing_2(s) {   
            PP.physics.add(s, collapsing_2, PP.physics.type.DYNAMIC); 
            PP.physics.set_allow_gravity(collapsing_2, true);  
            PP.physics.set_velocity_y(collapsing_2, 100);
            
        } 
    
        if (player.is_on_collapsing_2 == true) {
    
            PP.timers.add_timer(s, 250, move_collapsing_2, false);
            
            
            
            }
    
        else {
                player.is_on_collapsing_2 = false;
            
            }
    }



//qui per ciascuna piattaforma va copiato da collision collapsing a else (compreso) e cambiati tutti i numeri in quelli della piattaforma


//collapsing 3
    collapsing_3= PP.assets.image.add(s, img_collapsing, 3008, 206, 0.5,0.5);
    //collapsing_3 = PP.shapes.rectangle_add(s, 3008, 206, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(collapsing_3, true);
    PP.physics.set_allow_gravity(collapsing_3, false);    
    PP.physics.add_collider_f(s, player, collapsing_3, collision_collapsing_3);

    function collision_collapsing_3(s, player, collapsing_3) {
        if( player.geometry.x >= collapsing_3.geometry.x - collapsing_3.geometry.display_width &&
            player.geometry.x <= collapsing_3.geometry.x + collapsing_3.geometry.display_width &&
            player.geometry.y == collapsing_3.geometry.y - collapsing_3.geometry.display_height/2) {
                player.is_on_platform = true;
                player.is_on_collapsing_3 = true;
                
                
        }
    
        function move_collapsing_3(s) {   
            PP.physics.add(s, collapsing_3, PP.physics.type.DYNAMIC); 
            PP.physics.set_allow_gravity(collapsing_3, true);  
            PP.physics.set_velocity_y(collapsing_3, 100);
            
        } 
    
        if (player.is_on_collapsing_3 == true) {
    
            PP.timers.add_timer(s, 250, move_collapsing_3, false);
            
            
            
            }
    
        else {
                player.is_on_collapsing_3 = false;
            
            }
    }


//collapsing 4
    collapsing_4= PP.assets.image.add(s, img_collapsing, 6176, 656, 0.5,0.5);
    //collapsing_4 = PP.shapes.rectangle_add(s, 6176, 656, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing_4, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(collapsing_4, true);
    PP.physics.set_allow_gravity(collapsing_4, false);     
    PP.physics.add_collider_f(s, player, collapsing_4, collision_collapsing_4);

        function collision_collapsing_4(s, player, collapsing_4) {
        if( player.geometry.x >= collapsing_4.geometry.x - collapsing_4.geometry.display_width &&
            player.geometry.x <= collapsing_4.geometry.x + collapsing_4.geometry.display_width &&
            player.geometry.y == collapsing_4.geometry.y - collapsing_4.geometry.display_height/2) {
                player.is_on_platform = true;
                player.is_on_collapsing_4 = true;
                
           
        }
    
        function move_collapsing_4(s) {   
            PP.physics.add(s, collapsing_4, PP.physics.type.DYNAMIC); 
            PP.physics.set_allow_gravity(collapsing_4, true);  
            PP.physics.set_velocity_y(collapsing_4, 100);
            
        } 
    
        if (player.is_on_collapsing_4 == true) {
    
            PP.timers.add_timer(s, 250, move_collapsing_4, false);
            
            
            
            }
    
        else {
                player.is_on_collapsing_4 = false;
            
            }
    }


//collapsing 5
    collapsing_5= PP.assets.image.add(s, img_collapsing, 6944, 210, 0.5,0.5);
    //collapsing_5 = PP.shapes.rectangle_add(s, 6944, 210, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing_5, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(collapsing_5, true);
    PP.physics.set_allow_gravity(collapsing_5, false);     
    PP.physics.add_collider_f(s, player, collapsing_5, collision_collapsing_5);

    function collision_collapsing_5(s, player, collapsing_5) {
        if( player.geometry.x >= collapsing_5.geometry.x - collapsing_5.geometry.display_width &&
            player.geometry.x <= collapsing_5.geometry.x + collapsing_5.geometry.display_width &&
            player.geometry.y == collapsing_5.geometry.y - collapsing_5.geometry.display_height/2) {
                player.is_on_platform = true;
                player.is_on_collapsing_5 = true;
                
            
        }
    
        function move_collapsing_5(s) {   
            PP.physics.add(s, collapsing_5, PP.physics.type.DYNAMIC); 
            PP.physics.set_allow_gravity(collapsing_5, true);  
            PP.physics.set_velocity_y(collapsing_5, 100);
           
        } 
    
        if (player.is_on_collapsing_5 == true) {
    
            PP.timers.add_timer(s, 250, move_collapsing_5, false);
            
        
            
            }
    
        else {
                player.is_on_collapsing_5 = false;
            
            }
    }
}


/*function move_collapsing(s) {   
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC); 
    PP.physics.set_allow_gravity(collapsing, true);  
    PP.physics.set_velocity_y(collapsing, 100);
    console.log("cade");
}  */

