import React from 'react';
import { FunctionComponent, useEffect, useState } from "react";

import { useGetRandomNumber } from '../hooks/useGetRandomNumber';

export interface IRandomNumber {
    min: number;
    max: number;
    interval: number;
};

const RandomNumber: FunctionComponent<IRandomNumber> = ({ min, max, interval }) => {
    const randomNumber = useGetRandomNumber(min, max, interval);

    return (
        <div className="random-number">
            {randomNumber}
        </div>
    );
};

export default RandomNumber;