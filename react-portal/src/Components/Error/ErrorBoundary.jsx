import React from 'react'
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log('did catch')
        // Catch errors in any child components and re-renders with an error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.error) {
            console.log('render error')
            // Fallback UI if an error occurs
            return (
                <div>
                    <h2>{"Oh-no! Something went wrong"}</h2>
                    <p className="red">
                        {this.state.error && this.state.error.toString()}
                    </p>
                    <div>{this.props.showInfo ? "Component Stack Error Details: " : ''}</div>
                    <p className="red">{this.props.showInfo ? this.state.errorInfo.componentStack : ''}</p>
                </div>
            );
        }
        console.log('rendering children')
        // component normally just renders children
        return this.props.children;
    }
}