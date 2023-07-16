var reconocimiento=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cIoSK_z5u/model.json",modelo_listo)
function modelo_listo(){
    console.log("Ya estoy listo")
}
Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:100
})
Webcam.attach("#Camara")
function tomar_foto(){
    Webcam.snap(function(uri){
    document.getElementById("captura").innerHTML='<img src="'+uri+'" id="foto">'        
    })
}
function reconocer_objeto(){
    foto=document.getElementById("foto")
    reconocimiento.classify(foto,mostrar_resultados)
}
function mostrar_resultados(error,resultados){
    if (!error) {
        console.log(resultados)
        Emoji1=resultados[0].label
        Emoji2=resultados[1].label
            document.getElementById("Emoji-1").innerHTML="Emoji1: "+ Emoji1
        document.getElementById("Emoji-2").innerHTML="Emoji2: "+ Emoji2
























































        hablar("El   primer   emoji   es   "+Emoji1+"   el   segundo   emoji   es   "+Emoji2)
    }
}function hablar(mensaje){
    discurso=window.speechSynthesis
    lectura=new SpeechSynthesisUtterance(mensaje)
    lectura.lang="es-MX"
    lectura.rate=0.75
    discurso.speak(lectura)
}