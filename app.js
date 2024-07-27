let tg = window.Telegram.WebApp;

tg.expand();

let btnclose = document.getElementById("btnclose");

btnclose.addEventListener("click", () => {
	let category = document.getElementById("category").value;
	let passengers = document.getElementById("passengers").value;
	let count = document.getElementById("count").value;

	let data = {
		category: category,
		passengers: passengers,
		count: count,
	}
	tg.sendData(JSON.stringify(data));
	tg.close;
});
