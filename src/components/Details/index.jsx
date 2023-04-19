import './index.css';

const Details = ({
    day,
    chanceOfRain,
    humidity,
    wind,
    temperature }) => {
    return (
        <section className="details">
            <table className="table">
                <tbody>
                    <tr className="row-table">
                        <td className="big-col title">DAY</td>
                        <td className="title">CHANCE OF RAIN</td>
                        <td className="title">HUMIDITY</td>
                        <td className="title">WIND</td>
                        <td className="title">TEMPERATURE</td>
                    </tr>
                    <tr className="row-table">
                        <td className="big-col detail">{day}</td>
                        <td className="detail">{chanceOfRain}</td>
                        <td className="detail">{humidity}</td>
                        <td className="detail">{wind}</td>
                        <td className="detail">{temperature}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default Details;