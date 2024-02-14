import { useEffect, useState } from "react";

export const Greeting = () => {

    const [greeting, setGreeting] = useState(null);

    const getGreeting = () => {
        const date = new Date();
        const time = date.getHours();

        const MORNING_TIME = 12;
        const AFTERNOON_TIME = 17;
        const EVENING_TIME = 21;

        const greetings = {
            morning: "Good Morning!",
            afternoon: "Good Afternoon!",
            evening: "Good Evening!",
            night: "Good Night!",
            default: "Hello"
        };

        if (!time) return greetings.default;
        if (time < MORNING_TIME) return greetings.morning;
        if (time >= MORNING_TIME && time <= AFTERNOON_TIME) return greetings.afternoon;
        if (time > AFTERNOON_TIME && time <= EVENING_TIME) return greetings.evening;
        if (time > EVENING_TIME) return greetings.night;
    };

    useEffect(() => {
        const greet = getGreeting();
        setGreeting(greet);
    }, [])


    return (
        <div>
            {greeting}
        </div>
    )
};

export default Greeting;