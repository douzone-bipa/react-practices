import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/scss/component/guestbook/Message.scss';

export default ({no, name, message, notifyMessage}) => {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {message && message.split('\n').map((line, index) => index > 0 ?
                    <span key={`${no}-${index}`}>
                        <br/>
                        {line}
                    </span> : line)}
            </p>
            <strong/>
            <a onClick={() => notifyMessage(no)}>삭제</a>
        </li>
    );
}