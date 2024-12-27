import React from 'react';

const InputLogin = () => {
    return (
        <div>
            <div>
                <label>Tên đăng nhập</label>
                <input type="text" placeholder="Nhập tên đăng nhập" />
            </div>
            <div>
                <label>Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
            </div>

        </div>
    );
};

export default InputLogin;