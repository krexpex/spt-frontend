import React from 'react';

function Profile() {
    return (
        <div>
            <h1>👤 Профиль</h1>
            <div className="profile-info">
                <p>Имя пользователя: TestUser</p>
                <p>Баланс: 1000 $SPT</p>
                <button>Пополнить баланс</button>
                <button>Настройки</button>
            </div>
        </div>
    );
}

export default Profile;
