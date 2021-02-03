var rangeInput = document.querySelector('input[type=range]');
var pageView = document.querySelector('.page-view .page-number')
var price = document.querySelector('.price');
rangeInput.onmousemove = function(){
    let step  = this.value;
    if(step == 1){
        pageView.innerHTML = '10K';
        price.innerHTML = '$8.00'
    } else if(step == 2){
        pageView.innerHTML = '50K';
        price.innerHTML = '$12.00'
    } else if(step == 3){
        pageView.innerHTML = '100K';
        price.innerHTML = '$16.00'
    } else if(step == 4){
        pageView.innerHTML = '500k';
        price.innerHTML = '$24.00'
    }
    else{
        pageView.innerHTML = '1M';
        price.innerHTML = '$36.00'
    }
}