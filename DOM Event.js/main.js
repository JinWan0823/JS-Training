const [count] = document.getElementsByTagName('span');
const btn = document.getElementById('count-up-button');

btn.addEventListener('click',function(e){
    count.innerHTML = Number(count.innerHTML) + 1;
})

// btn.onclick = () => {
//     if(isNaN(Number(count.innerHTML))) return;

//     count.innerHTML = Number(count.innerHTML) + 1;
// };


const ipt = document.querySelector('input');
const result = document.querySelector('#result');

ipt.onchange = (event) => {
    result.innerHTML = event.target.value;
    //event.target => 이벤트가 발생한 돔   
}

const test = document.getElementById('test');

new Array(10).fill(0).forEach((_,index)=>{
    //index를 이용해 함수 사용
    test.addEventListener('click',()=>{
        console.log(`test clicked ${index+1}`)
    })
})