const age = 15;

switch (true) {
  case age > 0 && age < 12:
    console.log("Enfant");
    break;
  case age >= 12 && age <= 18:
    console.log("Adolescent");
    break;
  case age > 18:
    console.log("Adulte");
    break;
}
