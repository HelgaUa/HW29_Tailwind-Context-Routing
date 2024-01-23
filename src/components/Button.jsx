export function Button(props) {
    const {children, className, disabled, onClick, backgroundColor, textDecoration } = props;
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn ${className}`}
            style={{textDecoration, backgroundColor}}
        >
            {children}
        </button>
    )
}