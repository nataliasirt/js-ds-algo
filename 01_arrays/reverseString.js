function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}
reverse("Hi Nata");

function reverse2(str) {
  // check for valid input
  if (typeof str !== "string") {
    return "Invalid input";
  }
  return str.split("").reverse().join("");
}
// Output: "iH stibmiT"
console.log(reverse2("Timbits Hi"));

const reverse3 = (str) => [...str].reverse().join("");
reverse3("Timbits Hi");
