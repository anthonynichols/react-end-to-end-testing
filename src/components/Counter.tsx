import React from 'react';

export function Counter() {
    let [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="Counter box">
            <button className="button is-dark" onClick={decrement}>-</button>
            <button className="button is-dark" onClick={increment}>+</button>
            <div>Count: {count}</div>
        </div>
    );
}

interface Props {}

interface State {
    count?: number;
}

export class ClassCounter extends React.Component<Props, State> {
    state = {
        count: 0,
    };

    private decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            });
        }
    }

    private increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        let {decrement, increment} = this;
        let {count} = this.state;

        return (
            <div className="Counter box">
                <button className="button is-dark" onClick={decrement}>-</button>
                <button className="button is-dark" onClick={increment}>+</button>
                <div>Class Count: {count}</div>
            </div>
        );
    }
}
