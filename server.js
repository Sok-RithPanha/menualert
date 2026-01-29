const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/order', async (req, res) => {
  const { item } = req.body;
  const botToken = "7762731023:AAE8xPU8h9X8EF0ba0CIeKH8ENUD2A5IkUM";
  const chatId = "1061162254"; // Your actual Telegram user ID, not bot ID
  
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        chat_id: chatId,
        text: `🛒 New Order!\nItem: ${item}`
      }
    );
    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false, error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
