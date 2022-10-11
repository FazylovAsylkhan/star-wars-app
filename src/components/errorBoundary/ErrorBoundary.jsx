import React from "react";
import Alert from "../alert";
import { DEFAULT_ERROR } from "./textsErrors";
import s from "./errorBoundary.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.textMessage = props.textMessage;
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <Alert textMessage={this.textMessage} /> : children;
  }
}

ErrorBoundary.defaultProps = {
  textMessage: DEFAULT_ERROR,
};

export default ErrorBoundary;
