const randomNumber = Math.floor(Math.random() * 10) + 1;

switch (randomNumber) {
  case 1:
    console.log("The answer to life, the universe, and everything is", 42);
    break;
  case 2:
    console.log("The capital of France is", "Paris");
    break;
  case 3:
    console.log("The color of the sky is", "blue");
    break;
  case 4:
    console.log("The square root of 25 is", Math.sqrt(25));
    break;
  case 5:
    console.log("The cube root of 125 is", Math.cbrt(125));
    break;
  case 6:
    console.log("The circumference of a circle with radius 5 is", 2 * Math.PI * 5);
    break;
  case 7:
    console.log("The area of a circle with radius 5 is", Math.PI * 5 * 5);
    break;
  case 8:
    console.log("The volume of a cube with side length 6 is", 6 * 6 * 6);
    break;
  case 9:
    console.log("The surface area of a sphere with radius 7 is", 4 * Math.PI * 7 * 7);
    break;
  case 10:
    console.log("The volume of a sphere with radius 8 is", (4/3) * Math.PI * 8 * 8 * 8);
    break;
}
