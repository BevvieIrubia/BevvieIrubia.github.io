function promiseButton() {
    window.alert('Wait you weren\'t supposed to press that—')
}

let mod = 0;
function blind() {
    if (mod == 1) {
        document.getElementById('x').style.filter = 'blur(20px)';
        mod = 0;
    }
    else {
        document.getElementById('x').style.filter = 'blur(0px)';
        mod = 1;
    }
    if (mod == 1) {
        document.getElementById('x').style.filter = 'blur(20px)';
    }
    else {
        document.getElementById('x').style.filter = 'blur(0px)';
    }
}