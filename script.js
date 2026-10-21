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

const latency = document.querySelector(".text-on-surface.tracking-wider");

if (latency) {
  latency.innerText =
    "LATENCY: " + navigator.connection?.rtt + "ms" || "UNKNOWN";
} else {
  console.log("Unable to read the latency value!..");
}

const testAgain = document.querySelector(
  ".mt-4.w-full.px-6.flex.justify-center",
);

if (testAgain) {
  console.log(navigator.connection.downlink);
} else {
  console.log("Unable to reach the downlink value");
}

async function getIpInfo() {
  const res = await fetch("https://ipinfo.io/json");
  const data = await res.json();

  if (data) {
    const ispName = document.querySelector(
      ".text-sm.font-bold.text-white.tracking-tight.mt-0\\.5",
    );
    const ispId = document.querySelector(".ipCall");

    if (ispId) {
      ispId.innerText = data.ip;
    } else {
      console.log("Unable to reach the ip");
    }

    if (ispName) {
      ispName.innerText = data.org;
    } else {
      console.log("Unable to detect the isp name");
    }
  } else {
    console.log("Unable to detect the internet provider info..");
  }
}

getIpInfo();

console.log(getIpInfo().org);
