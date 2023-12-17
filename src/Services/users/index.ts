import { API } from "../base";

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Root {
  location: Location
  current: Current
  forecast: Forecast
}

export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Current {
  temp_c: number
  is_day: number
  condition: Condition
  precip_mm: number
  humidity: number
}

export interface Condition {
  text: string
  icon: string
  code: number
}

export interface Forecast {
  forecastday: Forecastday[]
}

export interface Forecastday {
  date: string
  date_epoch: number
  day: Day
  astro: Astro
  hour: Hour[]
}

export interface Day {
  maxtemp_c: number
  mintemp_c: number
  totalprecip_mm: number
  totalsnow_cm: number
  avghumidity: number
  daily_will_it_rain: number
  daily_chance_of_rain: number
  condition: Condition2
}

export interface Condition2 {
  text: string
  icon: string
  code: number
}

export interface Astro {}

export interface Hour {
  time_epoch: number
  time: string
  temp_c: number
  is_day: number
  condition: Condition3
  precip_mm: number
  humidity: number
  will_it_rain: number
  chance_of_rain: number
}

export interface Condition3 {
  text: string
  icon: string
  code: number
}

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});

const weatherApi = API.injectEndpoints({
  endpoints: (build) => ({
    getWeather: build.query<Root, string>({
      query: (location) => `${location}`,
    }),
  }),
  overrideExisting: true,
});

export const { useLazyGetUserQuery } = userApi;

export const { useLazyGetWeatherQuery } = weatherApi;