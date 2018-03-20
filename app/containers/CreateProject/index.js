import React, { Component } from 'react';
import { LANG } from '../App';
import { Modal } from 'antd';

// Language package of window
let LANG__CREATE_PROJECT;

export default class CreateProject extends Component {
    state = {
        visible: false
    };

    render() {
        LANG__CREATE_PROJECT = LANG.CREATE_PROJECT;
    }
}