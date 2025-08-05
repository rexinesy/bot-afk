// index.js const mineflayer = require('mineflayer'); const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

const bot = mineflayer.createBot({ host: 'alwination.id', port: 25565, username: 'Ciaa', });

bot.loadPlugin(pathfinder);

bot.once('spawn', () => { console.log([✓] Bot masuk ke server sebagai: ${bot.username});

// Login ke AuthMe setTimeout(() => { bot.chat('/login ica999'); console.log('[+] Login dikirim.');

// Masuk ke earth1
setTimeout(() => {
  bot.chat('/move earth1');
  console.log('[+] Masuk ke earth1 dikirim.');

  // Tunggu map selesai dimuat
  setTimeout(() => {
    jalanKeNPC(102, 92, -191); // Koordinat NPC
  }, 5000);
}, 3000);

}, 3000); });

function jalanKeNPC(x, y, z) { const mcData = require('minecraft-data')(bot.version); const defaultMove = new Movements(bot, mcData); bot.pathfinder.setMovements(defaultMove); const goal = new goals.GoalBlock(x, y, z); bot.pathfinder.setGoal(goal);

bot.once('goal_reached', () => { console.log('[✓] Bot sampai di koordinat NPC.');

// Cari entity terdekat (NPC) dan klik kiri
const npc = bot.nearestEntity(entity => entity.type === 'player' || entity.type === 'mob');
if (npc) {
  bot.attack(npc, true); // true = klik kiri
  console.log('[+] Bot klik kiri ke NPC.');
} else {
  console.log('[!] Tidak menemukan NPC di dekat bot.');
}

}); }

// Setiap 10 detik cek chat apakah ada "VenxZzz" lalu /tpaccept bot.on('message', (jsonMsg) => { const msg = jsonMsg.toString(); if (msg.includes('VenxZzz')) { bot.chat('/tpaccept'); console.log('[+] VenxZzz terdeteksi, /tpaccept dikirim'); } });

// Web server untuk Railway uptime const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Bot online!')); app.listen(3000, () => console.log('Web server aktif di port 3000'));

bot.on('error', err => console.log('[!] Error:', err)); bot.on('end', () => console.log('[!] Bot disconnected'));

