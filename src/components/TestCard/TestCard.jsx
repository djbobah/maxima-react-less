import { getRGB, randNumber } from "../../utils/functions";

const icons = [
    "car",
    "rocket",
    "train",
    "bicycle",
    "truck",
    "subway",
    "plane",
    "ship"
];

const Card = () => {
    const color = getRGB();
    const icon = icons[randNumber(icons.length)]
    const st = {
        backgroundColor: color,
        boxShadow: `0 0 5px #0008, 0 0 5px 2px ${color}`
    }
    return <div className="weather-card" style={st}>
        <i className={`fa fa-${icon}`} />
        <hr />
        <h3>{randNumber(20, -20)}˚C</h3>
    </div>
}

export default Card;