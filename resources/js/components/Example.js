import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Echo from 'laravel-echo';

export default class Example extends Component {

    componentDidMount() {
        this.listenFunction();
    }

    listenFunction(){
        window.io = require('socket.io-client');
        window.Echo = new Echo({
            broadcaster: 'socket.io',
            host: window.location.hostname + ':6001'
        });

        window.Echo.channel('notification-event')
        .listen('NotificationEvent', (e) => {
            alert(`title: ${e.title} , message: ${e.message}`)
        });
    }

    render() {
        return (
            <div className="container">
                <p>Example Component</p>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example/> , document.getElementById('root'));
}
