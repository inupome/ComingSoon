function audio1(){
  document.getElementById('btn_audio1').pause();
  document.getElementById('btn_audio2').pause();
  document.getElementById('btn_audio1').currentTime = 0;
  document.getElementById('btn_audio1').play();
}

function audio2(){
  document.getElementById('btn_audio1').pause();
  document.getElementById('btn_audio2').pause();
  document.getElementById('btn_audio2').currentTime = 0;
  document.getElementById('btn_audio2').play();
}