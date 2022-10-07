import React from "react";
import ErrorMessage from "../errorMessage";
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

    return hasError ? (
      <ErrorMessage textMessage={this.textMessage} />
    ) : (
      children
    );
  }
}

ErrorBoundary.defaultProps = {
  textMessage: {
    title: "Something went wrong.",
    description: "Pls reset the page",
  },
};

export default ErrorBoundary;
