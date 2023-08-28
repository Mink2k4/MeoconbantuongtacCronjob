const axios = require("axios");
const cron = require("node-cron");

const sendReq = async () => {
  const respone = await axios.get(
    "https://meoconbantuongtac.com.vn/cronJob/recharge-transfer/momo/meoconbantuongtac.com.vn"
  );
  console.log(respone.data);
};

const sendReq1 = async () => {
  const respone = await axios.get(
    "https://meoconbantuongtac.com.vn/cronJob/recharge-transfer/mbbank/meoconbantuongtac.com.vn"
  );
  console.log(respone.data);
};
cron.schedule("*/15 * * * * *", async () => {
  await sendReq();
  await sendReq1();

});