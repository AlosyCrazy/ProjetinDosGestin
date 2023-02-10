let previsao1 = "";
let previsao2 = "";
Webcam.set({
    width: 360,
    height: 250,
    img_format: "jpeg",
    jpeg_quality: 90
});
let camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_URI+"'>";
    });
}
let classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iRLDKtUs0/", modelLoaded);

function modelLoaded(){
    console.log("loaded model");
}

function speak(){
    let synth = window.speechSynthesis;
    let speakDataOne = "a primeira previsão é:" + previsao1;
    let speakDataTwo = "a segunda previsão é:" + previsao2;
    let utterThis = new SpeechSynthesisUtterance(speakDataOne + speakDataTwo);
    synth.speak(utterThis);
}