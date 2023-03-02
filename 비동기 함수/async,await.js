const A3 = async () =>{
    const a = 'A 함수 실행 후 생기는 데이터';
    return a;
};

const B3 = (a) =>{
    console.log(`${a}를 이용하는 B함수`)
};


// async 로 생성한 함수는 promise 객체를 반환 
// A3()
// .then((a)=>{
//     console.log('A3 실행 성공')
//     B3(a)
// })
// .catch((error)=>{
//     console.log(error.message)
// })


// awiat 가 async함수 내부에서만 사용 가능
const func = async () => {
    const a = await A3();
    console.log('A3 실행성공')
    B3(a);
};

func()