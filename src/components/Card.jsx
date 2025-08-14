const Card = ({ children, title, className = "" }) => {
  return (
    <div className={`p-5  ${className}`}>
        {title && <h2 className="font-bold text-lg mb-2">{title}</h2>}
        {children}
    </div>
    
  )
}

export default Card