const city_country = (city: string, country: string) => {
  return `"${city},${country}"`;
};
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Beijing", "China"));
