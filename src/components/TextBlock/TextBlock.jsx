import "./style.css";

export default ({
    name = "Caption", 
    text,
    variant,
    color
}) => {
    return <div className="text-block">
        <h3 
            className={variant === "colorize" 
                ? "text-block__caption text-block__caption_green"
                : "text-block__caption"}
            style={{color: color}}
        >
            {name}
        </h3>
        <p className="text-block__text">
            {text 
                ? text 
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"
            }
            {/* {props.text && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"} */}
        </p>
    </div>
}
