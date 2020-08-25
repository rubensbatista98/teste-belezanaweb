export default function (type) {
  const masks = {
    cardNumber: (value) =>
      value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})\d+?$/, "$1"),

    expirationDate: (value) =>
      value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})\d+?$/, "$1"),

    cvv: (value) => value.replace(/\D/g, "").replace(/(\d{3})\d+?$/, "$1"),
  };

  return masks[type];
}
