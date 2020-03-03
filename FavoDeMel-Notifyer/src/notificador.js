import { Router } from 'express';
const router = Router();

router.post('/notificador', async (req, res) => {

  const { socket, body } = req;
  const { eventName, data } = body;

  if (!eventName || eventName == '') {
    return res.status(400).send(warn(`O parâmetro 'eventName' é necessario para enviar uma notificação.`));
  }
  if (typeof eventName != 'string') {
    return res.status(400).send(warn(`O parâmetro 'eventName' deve ser do tipo string.`));
  }
  if (!data) {
    return res.status(400).send(warn(`O parâmetro 'data' é necessario para enviar uma notificação.`));
  }

  try {

    socket.emit(eventName, data);

    const message = `Notificação do tipo '${eventName}' enviada com sucesso.`;
    console.log(message)

    return res.status(200).json({ ok: true, resultMessage: message });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, resultMessage: `Erro ao enviar a notificação.` });
  }
});

const warn = (msg) => {
  console.warn(msg);
  return msg;
}

module.exports = router;