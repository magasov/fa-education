document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const telegramToken = "7902242896:AAGisfwuhEXYG2E378-HuRFtqWWB6kuukYE";
    const chatId = "-4540446285";

    const text = `
      Имя: ${name}
      Телефон: ${phone}
      Email: ${email}
      Сообщение: ${message}
    `;

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Сообщение успешно отправлено");
          // Очищаем форму после успешной отправки
          document.getElementById("contactForm").reset();
        } else {
          alert("Ошибка при отправке сообщения");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Ошибка при отправке сообщения");
      });
  });
