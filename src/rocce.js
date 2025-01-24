let rocce_1;
let rocce_2;
let img_rocce;
let pavimenti_rocce;
let damage_imm;

function preload_rocce(s) {
    img_rocce = PP.assets.image.load(s, "assets/images/rocce.png");
}

function create_rocce(s,player) {
    pavimenti_rocce = PP.shapes.rectangle_add(s, 2816, 544, 768, 352, "0x634F0F", 0); 
    PP.physics.add(s, pavimenti_rocce, PP.physics.type.STATIC); 

    rocce_1 = PP.assets.image.add(s, img_rocce, 3100, 336, 0.5,0.5);
    PP.physics.add(s,rocce_1, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_1, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_1, true);    

    rocce_2 = PP.assets.image.add(s, img_rocce, 3000, 336, 0.5,0.5);
    PP.physics.add(s,rocce_2, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_2, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_2, true);


    pavimenti_rocce = PP.shapes.rectangle_add(s, 5536, 592, 640, 256, "0x634F0F", 0); 
    PP.physics.add(s, pavimenti_rocce, PP.physics.type.STATIC); 
    
    rocce_3 = PP.assets.image.add(s, img_rocce, 5780, 395, 0.5,0.5);
    PP.physics.add(s,rocce_3, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_3, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_3, true);    

    rocce_4 = PP.assets.image.add(s, img_rocce, 5830, 395, 0.5,0.5);
    PP.physics.add(s,rocce_4, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_4, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_4, true);    
 
    
    pavimenti_rocce = PP.shapes.rectangle_add(s, 7648, 528, 2048, 384, "0x634F0F", 0); 
    PP.physics.add(s, pavimenti_rocce, PP.physics.type.STATIC); 
    
    rocce_5 = PP.assets.image.add(s, img_rocce, 7480, 100, 0.5,0.5);
    PP.physics.add(s,rocce_5, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_5, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_5, true);    

    rocce_6 = PP.assets.image.add(s, img_rocce, 7580, 100, 0.5,0.5);
    PP.physics.add(s,rocce_6, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_6, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_6, true);    

    rocce_7 = PP.assets.image.add(s, img_rocce, 8380, 100, 0.5,0.5);
    PP.physics.add(s,rocce_7, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce_7, pavimenti_rocce);
    PP.physics.set_allow_gravity(rocce_7, true);    
    
}

function update_rocce(s,player) {

    if(damage_imm == false){
        PP.physics.add_overlap_f(s, player, rocce_1, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_2, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_3, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_4, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_5, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_6, perdi_vite);
        PP.physics.add_overlap_f(s, player, rocce_7, perdi_vite);


        }


                


    if(player.geometry.x >=2300){
       rocce_1.geometry.angle -= 2; 
       PP.physics.set_velocity_x(rocce_1, -200);

       rocce_2.geometry.angle -= 2; 
       PP.physics.set_velocity_x(rocce_2, -200);
    }


    if(player.geometry.x >=5000){
        rocce_3.geometry.angle -= 2; 
        PP.physics.set_velocity_x(rocce_3, -200);

        rocce_4.geometry.angle -= 2; 
        PP.physics.set_velocity_x(rocce_4, -200);
    }
    
    

    if(player.geometry.x >=6640){
        rocce_5.geometry.angle -= 2; 
        PP.physics.set_velocity_x(rocce_5, -200);

        rocce_6.geometry.angle -= 2; 
        PP.physics.set_velocity_x(rocce_6, -200);

        rocce_7.geometry.angle -= 2; 
        PP.physics.set_velocity_x(rocce_7, -200);
    }
    

}