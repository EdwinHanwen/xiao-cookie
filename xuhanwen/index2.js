window.onload = function(){
    document.body.style    =   'background-Image:linear-gradient(to right, #A0D46D, #63B8D3)';
    let oDiv    =   document.createElement('div');
    oDiv.style.cssText  =   'width:100%;height:610px';
    let SmallBall   =   document.createElement('div');
    SmallBall.style.cssText =   'width:50px;height:50px;position:absolute;top:50%;margin-top:-25px;background-color:cyan;';
    document.body.appendChild(oDiv);
    oDiv.appendChild(SmallBall);
    Wall(oDiv);
    oDiv.onclick = Start(SmallBall)
};
//创建墙
function Wall(oDiv){
    setInterval(function(){
    let wall1 = document.createElement('div');
    let wall2 = document.createElement('div');
    let minNum = 250;
    let maxNum = 500;
    let H1 = randomNum(minNum,maxNum);
    let H2 = 610-H1;
    wall1.style.cssText = 'width:50px;position:absolute;right:-80px;background-color:cyan;top:0;height:'+H1+'px';
    wall2.style.cssText = 'width:50px;position:absolute;right:-80px;background-color:cyan;bottom:0;height:'+H2+'px';
    oDiv.appendChild(wall1);
    oDiv.appendChild(wall2);
    mobile(wall1,wall2);    
    },3000);
}
//球移动
function Start(SmallBall){
    SmallBall.style.right++;
}
//随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
        default: 
            return 0; 
        break; 
    } 
}
//墙移动 
function mobile(wall1,wall2){
    let w1 = 0;
    setInterval(function (){
        w1 = w1 + 3;
        wall1.style.right = w1 + 'px';
        wall2.style.right = w1 + 'px';
    },10,'W1','wall1','wall2');
}
