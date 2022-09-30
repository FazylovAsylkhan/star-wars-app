import React from "react";
import s from "./errorBoundary.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    const ErrorMessage = (
      <div className={s.message}>
        <h2 className={s.title}>Something went wrong.</h2>
        <p className={s.description}>Pls reset the page</p>
      </div>
    );

    return hasError ? ErrorMessage : children;
  }
}

export default ErrorBoundary;
