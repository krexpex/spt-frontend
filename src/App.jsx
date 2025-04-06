import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        // Проверяем, что Telegram Web App API доступен
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready();   // Telegram WebApp API становится активным
            tg.expand();  // Расширяет приложение на весь экран
        }
    }, []);

    return (
        <div>
            <h1>Привет из $SPT WebApp!</h1>
            <p>Это React-приложение отображается через Telegram Web App.</p>
        </div>
    );
}

export default App;
