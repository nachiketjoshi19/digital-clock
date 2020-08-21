var flag = 0

function clock() {

    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');


    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();


    if (flag === 1) {
        if (h > 12) {
            h = h % 12
        }
    }




    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;


}

var interval = setInterval(clock, 1000)

function changeFormat() {
    if (flag === 1) {
        flag = 0
        document.getElementById('format').innerText = "24 hr"
    } else if (flag === 0) {
        flag = 1
        document.getElementById('format').innerText = "12 hr"
    }
}