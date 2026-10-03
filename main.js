const bouquet = document.querySelector(".flowers");
const originalFlowers = Array.from(bouquet.querySelectorAll(":scope > .flower"));
const extraFlowers = [
  { x: "calc(50% - 17vmin)", height: "39vmin", scale: "0.48", angle: "-31deg", delay: "3.8s", hue: "20deg" },
  { x: "calc(50% - 14vmin)", height: "45vmin", scale: "0.55", angle: "-26deg", delay: "4.15s", hue: "80deg" },
  { x: "calc(50% - 10vmin)", height: "52vmin", scale: "0.66", angle: "-19deg", delay: "4.5s", hue: "245deg" },
  { x: "calc(50% - 6vmin)", height: "58vmin", scale: "0.76", angle: "-12deg", delay: "4.85s", hue: "315deg" },
  { x: "calc(50% + 10vmin)", height: "52vmin", scale: "0.66", angle: "19deg", delay: "5.2s", hue: "55deg" },
  { x: "calc(50% + 14vmin)", height: "45vmin", scale: "0.55", angle: "26deg", delay: "5.55s", hue: "185deg" },
  { x: "calc(50% + 17vmin)", height: "39vmin", scale: "0.48", angle: "31deg", delay: "5.9s", hue: "265deg" }
];

extraFlowers.forEach((settings, index) => {
  const flower = originalFlowers[index % originalFlowers.length].cloneNode(true);
  flower.className = `flower flower--${index + 8}`;
  flower.style.setProperty("--flower-x", settings.x);
  flower.style.setProperty("--flower-height", settings.height);
  flower.style.setProperty("--flower-scale", settings.scale);
  flower.style.setProperty("--flower-angle", settings.angle);
  flower.style.setProperty("--flower-delay", settings.delay);
  flower.style.setProperty("--flower-sway", `${4 + index * 0.15}s`);
  flower.style.setProperty("--petal-hue", settings.hue);
  bouquet.appendChild(flower);
});

onload = () => {
  document.body.classList.remove("container");
};
