const describe_city = (city: string, country: string = "Pakistan") => {
  console.log(city, "is situated in", country);
};
describe_city("Lahore");
describe_city("Genoa", "Italy");
describe_city("Istanbul", "Turkey");
