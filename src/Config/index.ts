const WEATHER_API_KEY = 'c724fc349fc740958c1155602230611';
import { v4 } from "uuid";
export const Config = {
  API_URL: "https://jsonplaceholder.typicode.com/",
  WEATHER_API_URL: "https://api.weatherapi.com/v1/forecast.json?key=c724fc349fc740958c1155602230611&lang=vi&days=7&q=",
};
export const FarmListJson = [{
  id: v4(),
  name: 'Cây xoài Đồng Tháp',
  date: '22/08/2023',
  model: 'Năng suất',
  timeOn: '7:00:00',
  plant: 'Cây xoài',
  acraege: '100',
  location: 'Đồng Nai',
  sche: [
    {
      waterHour: '07:00',
      waterTime: '10:00',
      water: '500',
    },
    {
      waterHour: '08:00',
      waterTime: '12:00',
      water: '700',
    }
  ]
}];