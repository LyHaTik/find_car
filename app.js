let tg = window.Telegram.WebApp;

tg.expand();

let order = document.getElementById("order");

order.addEventListener("click", () => {
	let name = document.getElementById("username").value;
	let email = document.getElementById("user_email").value;
	let phone = document.getElementById("user_phone").value;
	let comment = document.getElementById("comment").value;
	if(name.length < 4) {
		document.getElementById("error").innerText = ".. Ошибка в имени ..";
		return;
	}
	if(email.length < 4) {
		document.getElementById("error").innerText = ".. Ошибка в email ..";
		return;
	}
	if(phone.length < 10) {	
		document.getElementById("error").innerText = ".. Ошибка в номере телефона ..";
		return;
	}

	let data = {
		name: name,
		email: email,
		phone: phone,
		comment: comment,
	}
	tg.sendData(JSON.stringify(data));
	tg.close;
});
