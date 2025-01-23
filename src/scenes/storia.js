let img_background;
let home;

let curr_img_n = 0;
let curr_img;
let freccia_dx;
let freccia_sx;
let img_freccia_dx;
let img_freccia_sx;

let t1;
let testo1;
let t2;
let testo2;
let t3;
let testo3;

let change_scene = true;

//const tavole = [t1, testo1, t2, testo2, t3, testo3];
//const tavole = ["assets/images/tavole/T1.png", "assets/images/tavole/testo1.png", "assets/images/tavole/T2.png","assets/images/tavole/testo2.png", "assets/images/tavole/T3.png", "assets/images/tavole/testo3.png"];
//let inizia_gioco;

function preload (s) {
    t1 = PP.assets.image.load(s, "assets/images/tavole/T1.png");    
    testo1 = PP.assets.image.load(s, "assets/images/tavole/testo1.png");
    t2 = PP.assets.image.load(s, "assets/images/tavole/T2.png");
    testo2 = PP.assets.image.load(s, "assets/images/tavole/testo2.png");
    t3 = PP.assets.image.load(s, "assets/images/tavole/T3.png");
    testo3 = PP.assets.image.load(s, "assets/images/tavole/testo3.png");


    PP.assets.image.load(s, "assets/images/tavole/testo1.png");
    PP.assets.image.load(s, "assets/images/tavole/T2.png");
    img_freccia_dx = PP.assets.image.load(s, "assets/images/tavole/freccia_dx.png");
    img_freccia_sx = PP.assets.image.load(s, "assets/images/tavole/freccia_sx.png");

    
    
}

function create (s){
    

    //const tavole = [t1, testo1, t2, testo2, t3, testo3];
    

    //curr_img = PP.assets.image.add(s, tavole[curr_img_n], 0 , 0, 0, 0);


    freccia_dx = PP.assets.image.add (s,img_freccia_dx, 1250, 420, 0.5, 0.5);

       /* if (PP.interactive.mouse.add(freccia_dx, "pointerdown",piu_bg)){
       
        } 

    function piu_bg(s){
        if(curr_img_n <5){
            curr_img_n++; 
            console.log("ywy");
        }
    }

    */
  
    freccia_sx = PP.assets.image.add (s,img_freccia_sx, 30, 420, 0.5, 0.5);

    let frecce = PP.layers.create(s);
        PP.layers.add_to_layer(frecce, freccia_dx);
        PP.layers.add_to_layer(frecce, freccia_sx);
        PP.layers.set_z_index(frecce, 1);

  


    
    
    
    home = PP.shapes.rectangle_add(s, 1100, 340, 170, 70, "0x634F0F", 0); 


    if (PP.interactive.mouse.add(home, "pointerdown",start_game)){
   
    } 


    
}

function goto_menu(s) {
    PP.scenes.start("menu");
}



function update (s){
    const tavole = [t1, testo1, t2, testo2, t3, testo3];
    curr_img = PP.assets.image.add(s, tavole[curr_img_n], 0 , 0, 0, 0);


    function scene_timer(s) {
        change_scene = true;
    }





    if (PP.interactive.mouse.add(freccia_dx, "pointerdown",piu_bg)){
        
        } 
 
        function piu_bg(s){
            if(change_scene == true){    
            change_scene = false;
    
            if(curr_img_n <5){
             curr_img_n++; 
            }
        }        
   

    if(change_scene == false){
            PP.timers.add_timer(s, 1000, scene_timer, false); 
            
    }

 }   




    if (PP.interactive.mouse.add(freccia_sx, "pointerdown",meno_bg)){
       
    } 

    function meno_bg(s){
        if(change_scene == true){    
            change_scene = false;   
            if(curr_img_n > 0){
            curr_img_n--; 
            }
        }
    if(change_scene == false){
        PP.timers.add_timer(s, 1000, scene_timer, false); 
    }
  }

}
function destroy (s)  {

}

PP.scenes.add ("storia", preload, create, update, destroy)