const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5fab8717c9msh19cabf8655a93f6p17caa6jsnbc3590e6b031",
    "X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, OPTIONS)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const ipForm = document.querySelector("#ip-form");
const ipInput = document.querySelector("#ip-input");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

ipForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { value } = ipInput;
  if (!value) return;

  submit.setAttribute("disabled", "true");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy", "true");
});
