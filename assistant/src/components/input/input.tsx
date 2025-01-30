import Icon from "../icon/icon";
import Loader from "../loader/loader";
import "./input.scss";

export type InputProps = {
  id: string;
  placeholder: string;
  value: string;
  isLoading: boolean;
  onChange: (event: React.ChangeEvent<any>) => void;
  onSubmit: () => void;
};

export default function Input(props: InputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      props.onSubmit();
    }
  };

  return (
    <div className="input-main-container">
      {props.isLoading && <Loader />}
      <div className="input-child-container">
        <textarea
          id={props.id}
          placeholder={props.placeholder}
          rows={4}
          autoFocus
          value={props.value}
          onChange={props.onChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={props.onSubmit}>
          <Icon icon={"arrow_upward"} />
        </button>
      </div>
    </div>
  );
}
