import button from "daisyui/components/button"

const Button = ({label, onClick, variant = "primary", type = "button"}) => {

    const variantStyles = {
        primary: "btn btn-soft btn-info",
        secondary: "btn btn-soft",
        danger: "btn btn-soft btn-warning",
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variantStyles[variant] || variantStyles.primary}`}
        >
            {label}
        </button>
    )
}

export default Button