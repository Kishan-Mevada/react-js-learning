const Weather = ({temp}) => {
    if (temp < 15) {
        return <p>It's cold outside!</p>;
    } else if (temp >= 15 && temp < 25) {
        return <p>It's nice day!</p>;
    }
    return <p>It's too hot outside!</p>;
}

export default Weather;