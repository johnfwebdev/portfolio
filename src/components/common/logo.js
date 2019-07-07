import React from 'react';

export default class LogoItem extends React.Component {
    render() {
        return (
            <a href="/">
                <img className="logo" src="./assets/img/logo.png"></img>
            </a>
        )
    }
}