let bouncy;
let img_bouncy;
let on_bouncy = false;
//chiedere perché tutte queste vero / falso mi funzionino SOLO se sono con un uguale e basta :3

function preload_bouncy(s) {
    img_bouncy = PP.assets.image.load(s, "assets/images/F0.png");
}




function create_bouncy(s,player,bouncy) {
    bouncy = PP.assets.image.add(s, img_bouncy, 512, 568, 0.5,1);
    PP.physics.add(s,bouncy, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, bouncy, collision_bouncy);



function collision_bouncy(s,player,bouncy){

    if( player.geometry.x >= bouncy.geometry.x - bouncy.geometry.display_width &&
        player.geometry.x <= bouncy.geometry.x + bouncy.geometry.display_width &&
        player.geometry.y == bouncy.geometry.y - bouncy.geometry.display_height/2
        )
     {
            player.is_on_platform = true;
            on_bouncy = true;
            
            
        } 
   
    else {
        on_bouncy = false;
    } 

}
}


function update_bouncy(s){ 




/*
//dovrei spostarlo nel player?      
if (on_bouncy == true) {
                jump_init_speed = 500; 
                
            }
   

   // il problema è che il flag non si resetta e quindi una volta che entra in true rimane in true

    if (on_bouncy == false) {
        jump_init_speed = 360;
        console.log ("nu uh");
       
    }

*/
console.log (on_bouncy);  //di controllo per sapere quale flag sia attivo, eliminare una volta risolto
}

