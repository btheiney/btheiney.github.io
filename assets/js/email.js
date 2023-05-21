(function () {
	emailjs.init("m7A7eHYgn1ketTs7n");
})();

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			this.contact_number.value = (Math.random() * 100000) | 0;

			emailjs.sendForm("service_d0xaw97", "contact_form", this).then(
				function () {
					var messageBox = document.getElementById('message-box');
					messageBox.innerHTML = '<p class="contact-msg-box">Message sent! Thank You.</p>';
				},
				function (error) {
					console.log("FAILED...", error);
				}
			);
		});
};
