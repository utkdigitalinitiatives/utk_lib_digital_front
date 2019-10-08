import React, { Component } from 'react';
import classNames from 'classnames';

const Toggle = ({clickHandler, text, icon, active, large}) => {
    const buttonClass = classNames({
        'button-toggle': true,
        'no-icon': !icon,
        active,
        large,
    });
    const iconClass = `icon-${icon}`;

    return (
        <button className={buttonClass} onClick={clickHandler}>
            <i className={iconClass} />
            {text}
        </button>
    );
};

export default Toggle;
