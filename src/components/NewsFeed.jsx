// src/components/NewsFeed.jsx

import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.telegram.org/bot7967971878:AAFcBfJ0wAQUX46Af-L3lZwjDVEvRy6xJVU/getUpdates`);
                const data = await response.json();

                if (data.result && data.result.length > 0) {
                    const messages = data.result
                        .filter(update => update.message && update.message.chat.type === "channel")
                        .map(update => ({
                            text: update.message.text || 'No text content',
                            date: new Date(update.message.date * 1000).toLocaleString(),
                        }));

                    setNews(messages);
                }
            } catch (error) {
                console.error("Ошибка при получении новостей:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Новости</h2>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <div>
                    {news.length === 0 ? (
                        <p>Нет доступных новостей.</p>
                    ) : (
                        news.map((newsItem, index) => (
                            <div key={index} className="border-b py-2">
                                <p className="font-semibold">{newsItem.date}</p>
                                <p>{newsItem.text}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NewsFeed;
