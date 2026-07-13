const pregunta = {

    codigo:"F3-V01",

    texto:"¿El cliente es Banregio?",

    nota:""

};

const btn=document.getElementById("btnFacilidad3");

btn.addEventListener("click",mostrarPregunta);

function mostrarPregunta(){

    document.getElementById("inicio").style.display="none";

    document.getElementById("flujo").style.display="block";

    document.getElementById("codigo").innerHTML=pregunta.codigo;

    document.getElementById("pregunta").innerHTML=pregunta.texto;

    if(pregunta.nota!=""){

        document.getElementById("nota").style.display="block";

        document.getElementById("nota").innerHTML=pregunta.nota;

    }

}

document.getElementById("btnSi").onclick=function(){

    alert("Perfecto 🎉 Ya funciona el motor.");

}

document.getElementById("btnNo").onclick=function(){

    alert("También detectó la respuesta NO.");

}

document.getElementById("reiniciar").onclick=function(){

    location.reload();

}
