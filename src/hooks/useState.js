import React, { useState } from 'react';

const UseState = () => {
    //useState , trang thai cua 1 bien
    const [count, setCount] = useState(0) //11
    const [datas, setDatas] = useState([])

    //state datas [] chuan bi luu ve du lieu tu Database [array du lieu tu api]
    //Setdata nhan du lieu tu database
    const cong1 = () => {
        //logic count (hien tai - 10) + 1 -> 11
        setCount(count + 1) //11
    }
    const tru1 = () => {
        setCount(count - 1)
    }
    return (
        <div>
                <button onClick={tru1}> Tru 1 </button>
                <h1>Result: {count}</h1>
                <button onClick={cong1}> Cong 1 </button>
        </div>
    );
};

export default UseState;