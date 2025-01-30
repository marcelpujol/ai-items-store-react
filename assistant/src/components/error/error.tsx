import "./error.scss";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className="error-message">⚠️ {message}</div>;
};

export default Error;
