import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());

    useEffect(() => {
        setInterval(function () {
            setCurrentClockTime(getCurrentClockTime());
        }, 1000);
    }, []);

    return <Clock
                message={'ex05: useEffect Hook example'}
                hours={currentClockTime.hours}
                minutes={currentClockTime.minutes}
                seconds={currentClockTime.seconds} />;
}
