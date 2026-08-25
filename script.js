function orderFood(foodName) {
  document.getElementById("foodItem").value = foodName;
  document.getElementById("order").scrollIntoView({
    behavior: "smooth"
  });
}

function placeOrder(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const food = document.getElementById("foodItem").value;
  const quantity = document.getElementById("quantity").value;
  const address = document.getElementById("address").value;

  const message =
    "🍔 Urban Bites Order\n\n" +
    "👤 Name: " + name + "\n" +
    "📞 Phone: " + phone + "\n" +
    "🍽️ Food: " + food + "\n" +
    "🔢 Quantity: " + quantity + "\n" +
    "📍 Address: " + address;

  const whatsappURL =
    "https://wa.me/923446814581?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

  document.getElementById("orderForm").reset();
    }
