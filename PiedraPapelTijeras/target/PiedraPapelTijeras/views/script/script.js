window.onload=function (){
    let contadorU= 0;
    let contadorM = 0;
    let div = document.querySelector(".maquina")
    let img = document.querySelector("#respuestaMaquina");
    let user=document.querySelectorAll('input[type="radio"][name="opcion"]'); //All cuando son varios
    user.forEach(function (userOption){ //forEach=por cada uno... distinto
        userOption.addEventListener("click", function (){
            document.querySelector("#mensaje").innerHTML="";
            //verificar si el radio está marcado
            if(this.checked) { //si ese radio está marcado, hacer lo siguiente
                //mostrar qué opción marcó el usuario
                let userResp = this.value;
                let maq = parseInt(Math.random() * 3 + 1);
                console.log("Máquina -> " + maq);
                console.log("Usuario-> " + userResp);
                div.style.visibility = "visible";
                div.classList.add("maquina-respuesta");
                switch (maq) {
                    case 1: {
                        img.src = "views/img/Piedra.png";
                        break;
                    }
                    case 2: {
                        img.src = "views/img/Papel.png";
                        break;
                    }
                    case 3: {
                        img.src = "views/img/Tijeras.png";
                        break;
                    }
                }
                let msn = ""
                if (userResp == maq) {
                    msn = "Empate";
                } else if (userResp == 1 && maq == 2) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 1 && maq == 3) {
                    contadorU++;
                    msn = "¡Ganas tú!";
                } else if (userResp == 2 && maq == 1) {
                    contadorU++;
                    msn = "¡Ganas tú!";
                } else if (userResp == 2 && maq == 3) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 3 && maq == 1) {
                    contadorM++;
                    msn = "Gana la Máquina";
                } else if (userResp == 3 && maq == 2) {
                    contadorU++;
                    msn = "¡Ganas tú!";
                }
                document.querySelector("#mensaje").innerHTML = msn;
                document.querySelector("#contador").innerHTML = `Usuario: ${contadorU} | Máquina: ${contadorM}`;


                if (contadorU == 10 || contadorM == 10) {
                    if (contadorU == 10) {
                        ganador();
                    } else {
                        let marquesina = document.querySelector(".marquesina");
                        marquesina.style.display="block";
                        //mostramos carita triste
                    }

                    let boton = document.querySelector("#nuevaP");
                    let salir = document.querySelector("#salir");
                    boton.style.display = "block";
                    salir.style.display = "block";
                    boton.addEventListener("click", function () {
                        window.location.replace("index.jsp");
                    })
                    salir.addEventListener("click", function () {
                        window.close();
                    })
                    //tanto si gana la máquina como si lo hace el user
                    user.forEach(function (userOption) {
                        userOption.disabled = true;
                        let imagenes = document.querySelectorAll(".imagenes");
                        imagenes.forEach(function (img) {
                            img.style.transform = "scale(1.0)";
                            img.style.filter = "grayscale(100%)";
                            img.addEventListener("mouseover", function () {
                                img.style.cursor = "none";

                            })
                        })
                    })
                }
            }
        })
    })
}
