import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {ErrorContainer, ErrorText, Close} from './styles';

export default function Err({ children, small }) {
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        if (children) {
            setMsg(children);
        } else {
            setMsg(null);
        }
    }, [children])

    const handleClose = () => {
        setMsg(null);
    }

    if (msg) {
        return (
            <ErrorContainer>
                <ErrorText small={small}>{msg}</ErrorText>
                <Close onClick={handleClose}>x</Close>
            </ErrorContainer>
        )
    } else {
        return null;
    }
}

Err.prototype = {
    children: PropTypes.string,
    small: PropTypes.bool
}
