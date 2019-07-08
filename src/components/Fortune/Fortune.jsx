import React from 'react';
import {FortuneBox} from './Fortune-styles'

const Fortune = ({fortune}) => {
    return (
        <div>
            <FortuneBox>
                {fortune}
            </FortuneBox>
        </div>
    );
};

export default Fortune;
