export default function WorkshopCard() {
    const workshopTitle = "Оптимизация производительности веб-приложений";
    const workshopDate = "20 октября";
    const availablePlaces = 6;

    return (
        <div>
            <h2>{workshopTitle}</h2>
            <p>Дата: {workshopDate}</p>
            <p>Вакантные места: {availablePlaces}</p>
            <p>{availablePlaces > 0 ? "Доступно" : "Места исчерпаны"}</p>
        </div>
    );
};
