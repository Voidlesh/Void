module.exports = ensure_user_kingdom;

function ensure_user_kingdom(client, userid) {
  client.kingdom.ensure(`${userid}`, {
    user: userid,
    level: 1,
    wheat: 0,
    wood: 0,
    defence: 1,

    machine: {
      wood: 1,
      weat: 1
    },
    black_market: {
      boost: {
        time: 0,
        multiplier: 1,
      },
    },
  });
  let data = client.kingdom.get(`${userid}`);
  //reset the blackmarket Booster if it's over!
  if (
    data.black_market.boost.time !== 0 &&
    86400000 * 2 - (Date.now() - data.black_market.boost.time) <= 0
  ) {
    console.log(
      `Der Schwarz Markt Multiplikator von ${userid} wurde zurückgesetzt | Zeit: ${
        86400000 * 2 - (Date.now() - data.black_market.boost.time)
      }`
    );
    client.kingdom.set(
      `${userid}`,
      1,
      "black_market.boost.multiplier"
    );
    client.kingdom.set(`${userid}`, 0, "black_market.boost.time");
  }
}
