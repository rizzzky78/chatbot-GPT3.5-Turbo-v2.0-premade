const OpenAi = require("../../libs/controllers/openai/handlerOpenAi");
const { DateMaker } = require("../../libs/functions/myFunc");
const { writeFileSync } = require("fs");

const chatContext = require("./context");

(async () => {
  const { answer, usage } = await OpenAi.createCompletion(chatContext);

  console.log(usage);
  writeFileSync(`./chats-03.txt`, answer);
})().catch((e) => {
  console.error(String(e));
});
