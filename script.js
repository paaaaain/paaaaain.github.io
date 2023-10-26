function buypass() {
  new PaymentRequest(
    [
      {
        supportedMethods: "./pay/main.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "100", currency: "YEN"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
