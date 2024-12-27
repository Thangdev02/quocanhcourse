import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const cong1 = () => {
        //logic count (hien tai - 10) + 1 -> 11
        setCount(count + 1)
    }

    const tru1 = () => {
        setCount(count - 1)
    }

    useEffect(() => { 
        console.log("UseEffect")
        setText('Chay roi ne')
    }, [count])// goi la dependency list

    //state datas [10] -> [11]
    //1 list san pham bao gom 10 thang 
    //in ra man hinh thi ra datas
    //UseEffect no chay 1 lan , lay ra 11 thang
    //bay gio co 1 chuc nang them san pham 

    return (
        <div>
            <h1>
                Count : {count}
            </h1>
            <h1>
                Text : {text}
            </h1>
            <button onClick={tru1}> Tru 1 </button>
            <button onClick={cong1}> Cong 1 </button>
        </div>
    );
};

export default UseEffect;