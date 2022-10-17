let usernames: Array<string> = ["Arsi", "Jahan", "Zaib", "Admin", "Iqra"];

usernames.map((user: string) => {
  user == "Admin"
    ? console.log("Hello admin, would you like to see a status report?")
    : console.log("Hi " + user + ", thank you for logging in again");
});
usernames = [];
if (!!usernames.length) {
  console.log("We need to find some users!");
}
