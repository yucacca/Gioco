let rocce;
let img_rocce;
let pavimenti_rocce;


function preload_rocce(s) {
    img_rocce = PP.assets.image.load(s, "assets/images/rocce.png");
}

function create_rocce(s,player) {

    pavimenti_rocce = PP.shapes.rectangle_add(s, 2816, 544, 768, 352, "0x634F0F", 0.5); 
    PP.physics.add(s, pavimenti_rocce, PP.physics.type.STATIC); 

    rocce = PP.assets.image.add(s, img_rocce, 3008, 336, 0.5,0.5);
    PP.physics.add(s,rocce, PP.physics.type.DYNAMIC); 
    PP.physics.add_collider(s, rocce, pavimenti_rocce);
    PP.physics.add_collider_f(s, player, rocce, perdi_vite);
    
    PP.physics.set_allow_gravity(rocce, true);    
    PP.physics.set_velocity_x(rocce, -200);



}

function update_rocce(s) {
    rocce.geometry.angle -= 2;
    

}