// 窗口事件
// window.onresize = function(){
//     var h = document.documentElement.clientHeight;
//     var allmapBox = document.getElementById('modss');
//     allmapBox.style.height = h + 'px';
// }
if(localStorage.getItem("account number")==localStorage.getItem("zg") && localStorage.getItem("password")==localStorage.getItem("mm") ){
    var c = confirm('点击确定放弃自动登陆');
    if(c==true){
         window.localStorage.removeItem("password")
    }else{
        window.location.href = './index2.html';
    }
}
let B1 = document.getElementById('B1');
let B2 = document.getElementById('B2');
//登录
function tz1(){
    if(document.getElementById('zg').value == localStorage.getItem("zg") &&  document.getElementById('mm').value ==localStorage.getItem("mm")){
    // 将信息存储在本地cookie中
    if(this.B2=true){
    //localStorage - 没有时间限制的数据存储
    //sessionStorage - 针对一个 session 的数据存储
        localStorage.setItem("account number",document.getElementById('zg').value);
        localStorage.setItem("password", document.getElementById('mm').value);
        window.location.href = './index2.html';
    } else {
        window.location.href = './index2.html';
    }
    } else if(zg !==localStorage.getItem("zg") && mm !==''){
        document.getElementById('ts').innerHTML = '账号不存在';
        intervalClear()
    } else if(zg ==localStorage.getItem("zg") && mm !== localStorage.getItem("mm")){
        document.getElementById('ts').innerHTML = '密码不正确';
        intervalClear()
    }  
}
//无论是 setInterval 还是 setTimeout 都只能调用全局函数，即挂在window下的函数 
function intervalClear(){
    setTimeout(function () {
            document.getElementById('ts').innerHTML = '';
    },3000)
}

//注册账号
function tz2(){
    window.location.href = './index1.html';
}




