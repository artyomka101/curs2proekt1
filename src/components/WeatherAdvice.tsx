export default function WeatherAdvice(){
    const rain = true;
    const rainy = false;


return (
    <>
        <p>
            {rain
            ? "Возьми зонт: сегодня возможно будет дождь."
            : "Зонт не нужен: погода шикарна."}
        </p>

        <p>
            {rainy
            ? "Возьми зонт: сегодня возможно будет дождь."
            : "Зонт не нужен: погода шикарна."}
        </p>
    </>
);
}