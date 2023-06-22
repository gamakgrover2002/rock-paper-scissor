let player = 0;
const call = (value)=>{
player = value;

}
  

const comp = () =>{
   var  max = 4;
    var min = 1
    var computer =  Math.random() * (max - min) + min;
    computer = parseInt(computer);

   if(computer==1){
    document.getElementById('computer').style.backgroundImage = "url('rock.png')";
    if(player == 1){
      document.getElementById('result').innerText = 'TIE';
    }
    else if(player == 2){
      document.getElementById('result').innerText = 'YOU WIN';
    }
    else{
      document.getElementById('result').innerText = 'YOU LOSE';
    }
  }
  else if(computer==2){
    document.getElementById('computer').style.backgroundImage = "url('paper.png')";
    if(player == 1){
      document.getElementById('result').innerText = 'YOU LOSE';
    }
    else if(player == 2){
      document.getElementById('result').innerText = 'TIE';
    }
    else{
      document.getElementById('result').innerText = 'YOU WIN';
    }
  }
  else if(computer==3){
    document.getElementById('computer').style.backgroundImage = "url('scissor.png')";
    if(player==3){
      document.getElementById('result').innerText = 'TIE';
    }
    else if(player == 2){
      document.getElementById('result').innerText = 'YOU LOSE';
    }
    else{
      document.getElementById('result').innerText = 'YOU WIN';
    }
  }
}
  