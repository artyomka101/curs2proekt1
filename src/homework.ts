const userName: string = "Вадим";
const userAge: number = 15;
const hasAccess: boolean = true;
console.log("Имя:", userName);
console.log("Возраст:", userAge);
console.log("Доступ разрешён:", hasAccess);

type City = {
  name: string;
  population: number;
  isCapital: boolean;
};

const cities: City[] = [
    {
        name: "Москва",
        population: 13000000,
        isCapital: true
    },
    {
        name: "Буденновск",
        population: 50000,
        isCapital: false
    },
    {
        name: "Казань",
        population: 1329825,
        isCapital: false
    }

]

console.log("весь массив:", cities);
console.log("название первого города:", cities[0].name);
console.log("численность населения второго города:", cities[1].population);


function calculateTotal(
  price: number,
  quantity: number
): number {
  return price * quantity;
}

const total = calculateTotal(750,4)

console.log("Общая стоимость:", total)