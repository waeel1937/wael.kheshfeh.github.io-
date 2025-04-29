  document.getElementById("lastUpdated").textContent = document.lastModified;


window.addEventListener("load", () => {
  document.getElementById("loading-overlay").style.display = "none";

  const updated = new Date(document.lastModified);
  const dateTime = updated.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  document.getElementById("lastUpdated").textContent = dateTime;
});




    window.addEventListener("load", () => {
    // Speed
    const image = new Image();
    const size = 500000;
    const start = new Date().getTime();

    image.onload = function () {
      const end = new Date().getTime();
      const duration = (end - start) / 1000;
      const speed = ((size * 8) / duration / 1024 / 1024).toFixed(1);
      document.getElementById("speed-download").textContent = speed;
    };
    image.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?rand=" + Math.random();

    // Device
    const ua = navigator.userAgent;
    const deviceType = /mobile|android|iphone|ipad/i.test(ua) ? "Mobile" : "Desktop";
    document.getElementById("device-type").textContent = deviceType;

    // Battery
    if (navigator.getBattery) {
      navigator.getBattery().then(b => {
        document.getElementById("battery").textContent = Math.round(b.level * 100) + "%";
      });
    }

    // Connection type
    const type = navigator.connection?.effectiveType || "unknown";
    document.getElementById("speed-type").textContent = type;

    // Ping (simuliert)
    const pingStart = performance.now();
    fetch("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png", { cache: "no-store" })
      .then(() => {
        const ping = Math.round(performance.now() - pingStart);
        document.getElementById("ping").textContent = ping;
      });
  });
  function setCircleProgress(id, value, max) {
    const circle = document.getElementById(id);
    const percent = Math.min(value / max, 1);
    const offset = 251 - (251 * percent);
    circle.style.strokeDashoffset = offset;
  }

  window.addEventListener("load", () => {
    // Download fake
    const download = 7.6;
    document.getElementById("val-download").textContent = download;
    setCircleProgress("ring-download", download, 100);

    // Battery
    if (navigator.getBattery) {
      navigator.getBattery().then(b => {
        const level = Math.round(b.level * 100);
        document.getElementById("val-battery").textContent = level;
        setCircleProgress("ring-battery", level, 100);
      });
    }

    // Ping
    const pingStart = performance.now();
    fetch("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png", { cache: "no-store" })
      .then(() => {
        const ping = Math.round(performance.now() - pingStart);
        document.getElementById("val-ping").textContent = ping;
        setCircleProgress("ring-ping", ping, 1000); // max 300ms
      });
  });

