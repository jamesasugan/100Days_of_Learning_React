const Spinner = ({ size = "lg", variant = "dots" }) => {
  return <span className={`loading loading-${variant} loading-${size}`}></span>;
};

export default Spinner;
