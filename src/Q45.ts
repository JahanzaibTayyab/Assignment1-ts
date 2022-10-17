const car_object = (manufacturer: string, model: string, ...args: any) => {
  let car: any = { manufacturer, model };
  Object.entries(args).map(([key, value]) => {
    car = { ...car, ...(value as Object) };
  });
  return car;
};
console.log(car_object("Hyundai", "Elentra"));
console.log(car_object("Toyota", "Fortuner", { color: "black" }, { seats: 7 }));
