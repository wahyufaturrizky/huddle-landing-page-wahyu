import "styles/Button.css";

interface ButtonPropsInterface {
  label?: string;
  isPink?: boolean;
  width?: number;
  onClick?: () => void;
}

const Button = (props: ButtonPropsInterface) => {
  return (
    <button
      style={{
        backgroundColor: props.isPink ? "#ff52bf" : "white",
        width: props.width ?? 197,
      }}
      className="button"
      onClick={props.onClick}
    >
      <p
        style={{ color: props.isPink ? "white" : "#00252e" }}
        className="font-open-sans-700"
      >
        {props.label}
      </p>
    </button>
  );
};

export default Button;
