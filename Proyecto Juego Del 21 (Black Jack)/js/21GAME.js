class Juego{
  //Funcion constructor 
  // almasena todos los datos
    constructor(){
       //Propiedades
        this.p=[] // cartas del jugador
        this.ps=[] // Suma de las cartas del jugador
        this.cf=[] // Cartas sobrantes después de la distribución inicial
        this.sf=[]  // Suma de las cartas sobrantes
        this.b=[] // Cartas del boot (máquina)
        this.bs=[]  // Suma de las cartas del boot
        this.rb=0  // Suma total de las cartas del boot
        this.rp=0 // Suma total de las cartas del jugador
     }
   // Funcion empezar da inicio al juego 
     empezar(){
     // alerta sencilla
      alert("===Las reglas basicas es no pasarse del 21, cada uno a resibido 2 cartas===")
       alert("===Empezemos===")
   //Arreglo que guarda el nombre de las cartas 
      let cartas=["Asb","2b","3b","4b","5b","6b","7b","8b","9b","10b","Jb","Qb","Kb","Asc","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ast","2t","3t","4t","5t","6t","7t","8t","9t","10t","Jt","Qt","Kt","Asp","2p","3p","4p","5p","6p","7p","8p","9p","10p","Jp","Qp","Kp"]
       //arreglo que guarda los valores de cada carta
      let cartassuma=[1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10]
      let player = [];      // Almacena las cartas del jugador
      let carteli = [];     // Almacena las cartas restantes después de repartir inicialmente
      let sumaeli = [];     // Almacena los valores correspondientes a las cartas restantes
      let playersuma = [];  // Almacena los valores de las cartas del jugador
      let sumap = 0;        // Almacena la suma de los valores de las cartas del jugador
      let sumab = 0;        // Almacena la suma de los valores de las cartas de la máquina 
      let cartfinal = [];   // Almacena las cartas finales después de las rondas de juego
      let sumafinal = [];   // Almacena los valores correspondientes a las cartas finales
      let numerospla = [];  // Almacena los índices de las cartas iniciales del jugador
      let boot = [];        // Almacena las cartas iniciales de la máquina 
      let numerosbo = [];   // Almacena los índices de las cartas iniciales de la máquina 
      let bootsuma = [];    // Almacena los valores de las cartas iniciales de la máquina 
      let c = 0;            // Variable de control para la distribución de cartas iniciales al jugador
      let w = 0;            // Variable de control para la distribución de cartas iniciales a la máquina 
       //damos 2 cartasal jugador
      while(c<2){
      let numero=parseInt(Math.random()*parseInt(cartas.length-1))
          console.log("cartas para el jugador")
            if(player.length==0){
                player.push(cartas[numero])
                numerospla.push(numero)
                playersuma.push(cartassuma[numero])
                c+=1
            }else{
             // Si el jugador ya tiene una carta, agrega la carta seleccionada
            // solo si no es la misma carta que ya tiene
                if(cartas[numero]!=player[0]){
                    player.push(cartas[numero])
                    numerospla.push(numero)
                    playersuma.push(cartassuma[numero])
                    c+=1  
                }
            }
          
            
        }
      //  console.log(player)
       
      for(let a=0;a<playersuma.length;a++){
            sumap+=parseInt(playersuma[a])
        }
        if(parseInt(numerospla[0])>parseInt(numerospla[1])){
            for(let d=0;d<numerospla[1];d++){
                carteli.push(cartas[d])
                sumaeli.push(cartassuma[d])
            }
            for(let d=numerospla[1]+1;d<numerospla[0];d++){
                carteli.push(cartas[d])
                sumaeli.push(cartassuma[d])
            }
            for(let d=numerospla[0]+1;d<cartas.length;d++){
                carteli.push(cartas[d])
                sumaeli.push(cartassuma[d])
            }
        }else{
            for(let z=0;z<numerospla[0];z++){
                carteli.push(cartas[z])
                sumaeli.push(cartassuma[z])
            }
            for(let z=numerospla[0]+1;z<numerospla[1];z++){
                carteli.push(cartas[z])
                sumaeli.push(cartassuma[z])
            }
            for(let z=numerospla[1]+1;z<cartas.length;z++){
                carteli.push(cartas[z])
                sumaeli.push(cartassuma[z])
            }

        }
       //agrega 2 catas para el bot
        while(w<2){
           console.log("ingrese boot")
            let numero=parseInt(Math.random()*parseInt(carteli.length-1))
            if(boot.length==0){
                boot.push(carteli[numero])
                numerosbo.push(numero)
                bootsuma.push(sumaeli[numero])
                w+=1
            }else{
                if(carteli[numero]!=boot[0]){
                    boot.push(carteli[numero])
                    numerosbo.push(numero)
                    bootsuma.push(sumaeli[numero])
                    w+=1 
                }
            }
           
        }
       console.log(boot)
        for(let a=0;a<bootsuma.length;a++){
            sumab+=parseInt(bootsuma[a])
        }
        if(parseInt(numerosbo[0])>parseInt(numerosbo[1])){
            for(let d=0;d<numerosbo[1];d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[1]+1;d<numerosbo[0];d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[0]+1;d<carteli.length;d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
        }else{
            for(let d=0;d<numerosbo[0];d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[0]+1;d<numerosbo[1];d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[1]+1;d<carteli.length;d++){
                cartfinal.push(carteli[d])
                sumafinal.push(sumaeli[d])
            }
        }
      // Actualiza las variables con los resultados calculados
     this.rb=sumab
       this.p=player
       this.ps=playersuma
       this.cf=cartfinal
       this.sf=sumafinal
       this.b=boot
       this.bs=bootsuma
       this.rp=sumap
       /// cadena cual almasena y muestra las cartas que lleva el jugador
       let cartasdeljugador = "Cartas del Jugador: ";
       for (let i = 0; i < this.p.length; i++) {
           cartasdeljugador += this.p[i];
           if (i < this.p.length - 1) {
               cartasdeljugador += ", ";
           }
       }
        //muestra ls cartas
       let cartasenpartida = document.getElementById("cartasdeljugador");
      cartasenpartida.textContent = cartasdeljugador
      /// cadena cual almasena y muestra las cartas que lleva la maquina
      let cartasdelamaquina = "Cartas de la Máquina: ";
      for (let i = 0; i < this.b.length; i++) {
          cartasdelamaquina += this.b[i];
          if (i < this.b.length - 1) {
              cartasdelamaquina += ", ";
          }
      }
       // muestra maquina
      let cartasenpartida2 = document.getElementById("cartasdelamaquina");
       cartasenpartida2.textContent = cartasdelamaquina
     //contador de puntos de la partida
     
     let resp=document.getElementById("player")
       resp.textContent=`${sumap}`
       let resp2=document.getElementById("boot")
       resp2.textContent=`${sumab}`
   
    }
         //Funcion jugador
    jugador(){
        // se le aseginan cartas al jugador; la sumas y las cartas sobrantes 
        let cartasjugador= this.p
        let sumajugador=this.ps
        let cartassobrantes=this.cf
       console.log(cartassobrantes.length)
        let sumacartas=this.sf
        let x=0 // control del bucle
        let sumaplay=0 //almasena la suma de las cartas que a jugador
        let aux = []; // Array auxiliar para cartas sobrantes después de la jugada
        let aux2 = []; // Array auxiliar para sumas de cartas sobrantes después de la jugada
        let resp=document.getElementById("resp")
       
        if(cartassobrantes==0){
            resp.textContent=`Ya no hay cartas en la baraja`
         }else{
            if(cartasjugador.length==0){
                resp.textContent=`Primero necesitas tener 2 cartas, por favor dale a empezar`
            }else{
                
                while(x<1){
                  //carta aleatoria
                    let numero=parseInt(Math.random()*parseInt(cartassobrantes.length-1))
                    cartasjugador.push(cartassobrantes[numero])
                    console.log(cartasjugador)
                    sumajugador.push(sumacartas[numero])
                    // Actualizar los arrays auxiliares para cartas y sumas sobrantes
                    for( let i=0;i<numero;i++){
                        aux.push(cartassobrantes[i])
                        aux2.push(sumacartas[i])
                    }
                    for(let d=numero+1;d<cartassobrantes.length;d++){
                        aux.push(cartassobrantes[d])
                        aux2.push(sumacartas[d])
                    }
                    x+=1 // Incrementar x para salir del bucle después de una iteración
                }
                //Calcular la nueva suma total de las cartas del jugador
                for(let a=0;a<sumajugador.length;a++){
                    sumaplay+=parseInt(sumajugador[a])
                }
                let resp=document.getElementById("player")
                //actualiza la  suma del jugador
                resp.textContent=`${sumaplay}`
                
            }
        }
       // actualiza los datos de la clase
        this.rp=sumaplay
        this.cf=aux
        this.sf=aux2
        // muestra las cartas en juego
    let cartasdeljugador = "Cartas del Jugador: ";
       for (let i = 0; i < this.p.length; i++) {
           cartasdeljugador += this.p[i];
           if (i < this.p.length - 1) {
               cartasdeljugador += ", ";
           }
       }
       
       let cartasenpartida = document.getElementById("cartasdeljugador");
      cartasenpartida.textContent = cartasdeljugador
        
    }
    boot(){
       // lomismo que el Jugador
        let cartasboot=this.b
        let sumabot=this.bs
        let puntos=this.rb
        let cartassobrantes=this.cf
       console.log(cartassobrantes.length)
        let sumacartas=this.sf
        let x=0
        let sumaboot=0
        let aux=[]
        let aux2=[]
        let resp=document.getElementById("resp")
        if(cartassobrantes.length==0){
            resp.textContent=`Ya no hay cartas en la baraja`
        }else{
            if(cartasboot.length==0){ 
                resp.textContent=`Primero necesitas tener 2 cartas, por favor dale a empezar`
            }else{
                if(puntos<17){
                    while(x<1){
                        let numero=parseInt(Math.random()*parseInt(cartassobrantes.length-1))
                        cartasboot.push(cartassobrantes[numero])
                        console.log(cartasboot)
                        sumabot.push(sumacartas[numero])
                        for( let i=0;i<numero;i++){
                            aux.push(cartassobrantes[i])
                            aux2.push(sumacartas[i])
                        }
                        for(let d=numero+1;d<cartassobrantes.length;d++){
                            aux.push(cartassobrantes[d])
                            aux2.push(sumacartas[d])
                        }
                        x+=1
                    }
                    for(let a=0;a<sumabot.length;a++){
                        sumaboot+=parseInt(sumabot[a])
                    }
                    let resp=document.getElementById("boot")
                    resp.textContent=`${sumaboot}`
                    this.rb=sumaboot
                    this.cf=aux
                    this.sf=aux2
        
                }else{
                    resp.textContent=`la maquina ya no va mas`
                    this.cf=cartassobrantes
                    this.sf=sumacartas

                }
                let cartasdelamaquina = "Cartas de la Máquina: ";
                for (let i = 0; i < this.b.length; i++) {
                    cartasdelamaquina += this.b[i];
                    if (i < this.b.length - 1) {
                        cartasdelamaquina += ", ";
                    }
                }
              let cartasenpartida2 = document.getElementById("cartasdelamaquina");
                 cartasenpartida2.textContent = cartasdelamaquina
               
            
           
            }
        }
        
        
       

    }
    reiniciar(){
   // basia los arreglos y reinicia los conbtadores
 alert("Riniciaste los puntos")
 this.p = []
    this.ps = []
    this.cf = []
    this.sf = []
    this.b = []
    this.bs = []
    this.rb = 0
    this.rp = 0
    let cartasenpartida = document.getElementById("cartasdeljugador")
    cartasenpartida.textContent = ""

    let cartasenpartida2 = document.getElementById("cartasdelamaquina")
    cartasenpartida2.textContent = ""

    let resp = document.getElementById("resp")
    resp.textContent = ""
   let resp2=document.getElementById("player")
   resp2.textContent=""
    let resp3 = document.getElementById("boot")
    resp3.textContent = ""




} 
    
terminar(){
        alert("Fin de la partida")
        // puntuaciones del jugador y la máquina
        let sumaplay=this.rp // puntos del jugador
        console.log(sumaplay)
        let sumaboot=this.rb // puntos de la maquina
       console.log(sumaboot)
        let cartasp=this.p
        let cartasb=this.b
        let resp=document.getElementById("resp")
       //  diferencia de puntiacion para el jugador y la maquina
        let sp=Math.abs(21-sumaplay) 
      console.log(sp)
        let sb=Math.abs(21-sumaboot)
       console.log(sb)
       // Evaluación de los resultados y generación del mensaje correspondiente
       if(sp==0 && sb!=0){
           alert("=====Ganaste====")
        resp.textContent=`!Bien¡ Ganaste con las cartas ${cartasp} Felicidades`

        }else{ 
           if(sp!=0 && sb==0){
           alert("=====Perdiste=====")
            resp.textContent=`!As Perdido¡ la Maquina Gana con las cartas ${cartasb}`
           }else{
            if(sb<0 && sp>0){
                alert("=====Ganaste====")
                resp.textContent=`!Bien¡ Ganaste con las cartas ${cartasp} Felicidades`  
                }else{
                    if(sp<0 && sb>0){
                        alert("=====Perdiste=====")
                        resp.textContent=`!As Perdido? la Maquina Gana con las cartas ${cartasb}`
                    }else{
                        if(sb==sp && sp>0 && sb>0){
                           alert("====Esto es un empate====")
                            resp.textContent=`! ESTO ES UN EMPATE¡`
                   } else{
                       alert("====Nadie se lleva el botin====")
                    resp.textContent='¡ los dos perdieron!'   
                }
                }
              
            }

        }
        
    }
        // :)//


    }
}const Cartas21=new Juego()