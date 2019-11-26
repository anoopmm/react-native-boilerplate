import React from 'react';
import {
    getDeviceInfo
} from './deviceProperties';

const styleGenerator = () => {
    const { type } = getDeviceInfo();
    const isPhone = ((type === 'iosMobile') || (type === 'androidMobile'));
    return ({commonStyle = {} ,phoneStyle = {} ,tabletStyle = {} }) => {
        return isPhone ? {
            ...commonStyle,...phoneStyle
        }: {   ...commonStyle,...tabletStyle }
    }
}

export const styleGeneratorInstance =  styleGenerator();

