export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success);
};


export const getCardData = async (token) => {
  return fetch (`https://loft-taxi.glitch.me/card?token=${token}`,{
    method: "GET",
  }).then((res) => res.json());
};


export const serverRegisterCard = async (
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token
) => {
  return fetch (
    `https://loft-taxi.glitch.me/card`, {
      method: "POST",
      body: JSON.stringify({
        cardNumber,
  expiryDate,
  cardName,
  cvc,
  token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
};