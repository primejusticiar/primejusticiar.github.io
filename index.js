const { Telegraf } = require("telegraf");

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error("BOT_TOKEN is missing");
}

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply("Assalomu alaykum 👋 Bot ishlayapti!"));
bot.help((ctx) => ctx.reply("Buyruqlar:\n/start\n/help\n/ping"));
bot.command("ping", (ctx) => ctx.reply("pong 🏓"));
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

bot.launch();
console.log("Bot started");

// graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
