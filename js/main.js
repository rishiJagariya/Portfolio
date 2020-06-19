
var num = 0;

function onClick() {
    var txt1 = document.getElementById('txt-1') // small box text
    var txt2 = document.getElementById('txt-2') // larger box text

    if(num%2 == 0){
    document.getElementById('row2').style.flexDirection = 'row-reverse'
    txt1.innerHTML = 'Foto<br>Grapher'
    txt2.innerHTML = '&lt;CodĒʀ&gt;'
    txt1.className = 'txt2style'
    txt2.className = 'txt1style'
    }
    else{
    document.getElementById('row2').style.flexDirection = 'row'
    txt1.innerHTML = '&lt;CodĒʀ&gt;'
    txt2.innerHTML = 'Foto<br>Grapher'
    txt2.className = 'txt2style'
    txt1.className = 'txt1style'
    }
    num++
}