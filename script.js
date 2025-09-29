// PayPal buttons
document.addEventListener("DOMContentLoaded", () => {
  if (window.paypal) {
    // Writer Plan
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: "9.99", currency_code: "EUR" },
            payee: { email_address: "michaelidogas@gmail.com" }
          }]
        });
      },
      onApprove: function(data, actions) {
        alert("Thank you for subscribing to the Writer plan!");
      }
    }).render("#paypal-writer");

    // Pro Plan
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: "24.99", currency_code: "EUR" },
            payee: { email_address: "michaelidogas@gmail.com" }
          }]
        });
      },
      onApprove: function(data, actions) {
        alert("Thank you for subscribing to the Pro plan!");
      }
    }).render("#paypal-pro");
  }

  // Ebook form
  const ebookForm = document.getElementById("ebookForm");
  if (ebookForm) {
    ebookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your Ebook is being generated! You will receive it via email soon.");
    });
  }
});