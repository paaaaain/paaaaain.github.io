function buypass() {
  if (!window.PaymentRequest) return alert("Payment Request APIに未対応なため使えません");

  const baseurl = location.origin.includes("github.io") ? location.origin + "/buypass" : location.origin;

  new PaymentRequest(
    [
      {
        supportedMethods: baseurl + "/pay/main.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "1", currency: "YEN"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
