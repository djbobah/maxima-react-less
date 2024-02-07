import TextBlock from "../TextBlock/TextBlock"

export default ({
    pic,
    name,
    text,
    type
}) => {

    return <div
        style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start"
        }}
    >
        {type === "fa" && <i className={`fa fa-${pic}`}/>}
        {!type && <img src={pic} alt="" width="100"/>}
        <TextBlock name={name} text={text}/>
    </div>
}