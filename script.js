console.log("plug!..");
console.log();

console.log(navigator);

const band = document.querySelector(".font-semibold.text-primary");

if (band) {
  band.innerText =
    `${navigator.connection?.effectiveType.toUpperCase()}+ ULTRA-BAND` ||
    "UNKNOWN";
} else {
  console.log("not reading the band!..");
}
