import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="text-area">
                <label className="message-label" htmlFor="message">テキスト</label>
                <textarea
                id="message"
                name="message"
                rows={3}
                value={this.state.text}
                onChange={(event) => {
                    this.setState({
                        text: event.target.value
                    });
                }}
                />
            </div>
        );
    }
}
      
export default TextArea;