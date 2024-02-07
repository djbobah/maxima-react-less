import "./style.css"

export default ({
    name,
    count,
    size,
    children
}) => {

    const st = {
        gridTemplateColumns: `repeat(${count || 1}, ${size || "1fr"})`
    }

    return <div className="container">
        {name && <h2>{name}</h2>}
        <div 
            className="container__block"
            style={st}
        >
            {children}
        </div>
    </div>
}