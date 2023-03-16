const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const fetch = require("node-fetch");
const { resolve } = require('path');
const { rejects } = require('assert');

require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN);
//bot.start((ctx) => ctx.reply('Welcome'));
//bot.help((ctx) => ctx.reply('Send me a sticker'));
//bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
//bot.hears('hi', (ctx) => ctx.reply('Hey there'));

var  url_app = 'https://script.google.com/macros/s/AKfycbxdVibLU6VAaad6vmbvcmrEh9GL4eCDeThjJ9sJv5syElVfLrYVjRadwPOvchPYAUUGUg/exec';

console.log('new');
bot.on(message('text'),async (ctx) => {
    var id_man;
    var id_girl;
    var get_url;
    console.log(ctx);
    if (ctx.message.text.includes('Send all chat')){
        var parentText = String(ctx.message.reply_to_message.text);
        id_man = parentText.substr(parentText.indexOf('pair_id = [')+11,parentText.indexOf(';')-parentText.indexOf('pair_id = [')-11);
        id_girl = parentText.substr(parentText.indexOf(';')+1,parentText.indexOf(']:')-parentText.indexOf(';')-1);
        get_url = url_app+'?key=red&'+'id_girl='+id_girl+'&id_man='+id_man+'&method=full_chat';
        console.log(get_url);
       await fetch(get_url);
        }
    else if (ctx.message.text.includes('Answer:')){   
        var parentText = String(ctx.message.reply_to_message.text);
        id_man = parentText.substr(parentText.indexOf('pair_id = [')+11,parentText.indexOf(';')-parentText.indexOf('pair_id = [')-11);
        id_girl = parentText.substr(parentText.indexOf(';')+1,parentText.indexOf(']:')-parentText.indexOf(';')-1);
        get_url = url_app+'?key=red&'+'id_girl='+id_girl+'&id_man='+id_man+'&message='+ctx.message.text+'&method=answer';        
        console.log(encodeURI(get_url));
     if (ctx.message.text.length>60+7)
          await fetch(get_url);
          else
           ctx.reply('lengh<60');
        }




   // console.log(ctx.message.reply_to_message.text,id_man);



    });

bot.start((ctx) => ctx.replyWithPhoto({
    url: 'https://i.gstatvb.com/shpzkl7e8cal92ifn.r100x100.4029a697.jpg',
    filename: 'manphoto.jpg'
}));
bot.launch();


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));