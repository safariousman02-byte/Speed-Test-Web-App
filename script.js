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

const netSpeed = document.querySelector(
  ".text-5xl.font-extrabold.tracking-tighter.text-transparent.bg-clip-text.bg-gradient-to-b.from-white.via-primary.to-primary-fixed-dim.drop-shadow-sm.font-mono",
);
netSpeed.innerText = navigator.connection?.downlink + " KB/S" || 00 + " KB/S";

if (testAgain) {
  testAgain.addEventListener("click", () => {
    const target = navigator.connection?.downlink || 00;
    let current = 0;
    const increment = target / 30;
    const stepTime = 1000 / 30;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      netSpeed.innerText = current.toFixed(3) + " KB/S";
      console.log(current.toFixed(3));
    }, stepTime);
  });
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
