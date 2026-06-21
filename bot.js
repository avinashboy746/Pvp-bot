const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'avinashboy.aternos.me',
  port: 47974,
  username: 'Aakash'
})

bot.on('spawn', () => {
  console.log('Aakash server mein join ho gaya!')
  bot.chat('Hello sabhi ko!')
})

bot.on('end', () => {
  console.log('Bot disconnect ho gaya, dobara join kar raha hai...')
  setTimeout(() => {
    process.exit() // host service ko restart karne do
  }, 5000)
})
