import React from 'react';
import HeaderBlock from '../common/header';

export default class BasePage extends React.Component {
    render() {
        return (
            <div className="main-body">
                <HeaderBlock />
                <p>Suh Dude! Made Changes</p>
            </div>
        )
    }
}