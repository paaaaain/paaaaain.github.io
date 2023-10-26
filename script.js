function buypass() {
  new PaymentRequest(
    [
      {
        supportedMethods: location.origin + "/pay/main.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "100", currency: "JPN"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
