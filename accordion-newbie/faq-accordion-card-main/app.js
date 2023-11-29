let firstque = document.getElementById('firstQues');
let secondque = document.getElementById('secondQues');
let thirdque = document.getElementById('thirdQues');
let fourthque = document.getElementById('fourthQues');


function funClick(eve){
    let toremoveactive = document.querySelector('.active');
    if(eve == 'one'){
        // if(toremoveactive != ''){
        //     toremoveactive.classList.remove('active');
        //     toremoveactive.classList.add('paragraph');
        // }
        firstque.classList.add('active');
        firstque.classList.remove('paragraph');
    }else if(eve == 'two'){
        if(toremoveactive != ''){
            toremoveactive.classList.remove('active');
            toremoveactive.classList.add('paragraph');
        }
        secondque.classList.add('active');
        secondque.classList.remove('paragraph');
    }
    else if(eve == 'three'){
        if(toremoveactive != ''){
            toremoveactive.classList.remove('active');
            toremoveactive.classList.add('paragraph');
        }
        thirdque.classList.add('active');
        thirdque.classList.remove('paragraph');
    }
    else if(eve == 'four'){
        if(toremoveactive != ''){
            toremoveactive.classList.remove('active');
            toremoveactive.classList.add('paragraph');
        }
        fourthque.classList.add('active');
        fourthque.classList.remove('paragraph');
    }
}

function  fundClick(neweve){
    if(neweve == 'd-one'){
        firstque.classList.remove('active');
        firstque.classList.add('paragraph')
    }
}