import React from 'react';
import { FunctionComponent, useState } from "react";

import { MIN, MAX, INTERVAL } from '../constants';
import RandomNumber from './random-number';

const PokerRNG: FunctionComponent<any> = ({ }) => {
    const [min, setMin] = useState<number>(MIN);
    const [max, setmax] = useState<number>(MAX);
    const [interval, setInterval] = useState<number>(INTERVAL);


    return (
        <div className="poker-rng">
            <RandomNumber min={min} max={max} interval={interval} />
        </div>
    );
};

export default PokerRNG;