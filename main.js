var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var x=document.getElementById("textbox"); 
function strt(){
    x.innerHTML="";
    recognition.start();
}
recognition.onresult=function(h){
    console.log(h);
    c=h.results[0][0].transcript;
    x.innerHTML=c;
    console.log(c);
    if(c=="take my selfie"){
speak();
console.log("taking your selfie");
    }   
}
 function takesnapshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/>';
    } ); 
 }
 function speak(){
    var synth = window.speechSynthesis;
    y="taking your selfie in 5 seconds";
    h=new SpeechSynthesisUtterance(y);
    synth.speak(h);
    Webcam.attach(camera);
setTimeout(function(){
    takesnapshot();
    save();
},5000);
 }
 camera=document.getElementById("camera");
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 function save(){
    l=document.getElementById("a");
    img2=document.getElementById("img1").src;
    l.href=img2;
    l.click();
 }