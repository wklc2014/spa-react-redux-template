'use strict';
import React, {Component} from 'react';

import { Button } from 'antd';

class Counter extends Component {
    constructor(props) {
        super(props);

    }
    handleClick(operate) {
        this.props[`Action${operate}`]();
    }
    render() {
        const {counter} =this.props;

        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is Counter component {counter}
                </h2>
                <div className="mb16">
                    <Button
                        className="mr16"
                        type="primary"
                        onClick={this.handleClick.bind(this, 'Increment')}
                    >
                        +
                    </Button>
                    <Button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'Decrement')}
                    >
                        -
                    </Button>
                    <Button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'IncrementIfOdd')}
                    >
                        Increment if odd
                    </Button>
                    <Button
                        type="danger"
                        onClick={this.handleClick.bind(this, 'IncrementAsync')}
                    >
                        Increment async
                    </Button>
                </div>
            </div>
        )
    }
}

export default Counter;