var smokeTestPhase = document.querySelector(".circle-smoke");
var red = 'red';
smokeTestPhase.classList.add('testphase-border-' + red);
smokeTestPhase.addEventListener("mouseover", function(e) {

})
var smokeTestPhase = document.querySelector(".circle-regression");
smokeTestPhase.classList.add('testphase-border-green');

document.querySelector('.circle-link').textContent = 'hahah';

var smokeTestPhase = document.querySelector(".circle-system");
smokeTestPhase.classList.add('testphase-border-grey');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        trigger: 'click',
        html: true,
        content: bugCase,
        container: 'body'
    });
});
function bugCase() {
    if(this.text === '猫眼测试'){
        var html = '';
        for(var i = 0; i < 30; i++) {
            html += '<li><a href="#">冒烟测试报告未发送</a></li>';
        }
        return '<ul style="font-size:1rem;">' + html + '</ul>';
    } else if (this.text === '回归测试') {
        return 'hha';
    }
}

console.log(parseInt('0'));
var ss = [];
ss.push({'sss':'ssss','ssaa':'hahah'});
ss.push({'sss':'ssss','ssaa':'sss'});
var ss1 = [];
ss1.push({'sss':'ssss','ssaa':'hahah'});
ss1.push({'sss':'ssss','ssaa':'sss'});
var arr1 = [];
arr1[0] = {'sss':'ssss','ssaa':'sss1'};
arr1.push(ss,ss1);
console.log(arr1);
arr1.push.apply(arr1,ss,ss1);
console.log(arr1);
console.log(window.location);
 
