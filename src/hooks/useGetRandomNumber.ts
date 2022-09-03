import { useState, useEffect } from 'react';

import { getRandomIntFromInterval } from '../helpers';

export const useGetRandomNumber = (min: number, max: number, interval: number) => {
    const [randomNumber, setRandomNumber] = useState<number>(min);

    useEffect(() => {
        const intervalRandomNumber = setTimeout(() => {
            const number = getRandomIntFromInterval(min, max);
            setRandomNumber(number);
        }, interval)
    
        return () => clearTimeout(intervalRandomNumber)
    
    }, [randomNumber]);
    
    return randomNumber;
}
