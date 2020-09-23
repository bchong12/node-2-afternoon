const messages = [];
let index = 0;

module.exports = {
  create: (req, res) => {
    let newMessage = {
      id: index,
      text: req.body.text,
      time: req.body.time,
    };
    messages.push(newMessage);
    index++;

    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    let message = messages.find((message) => +req.params.id === message.id);

    message.text = req.body.text;

    res.status(200).send(messages);
  },
  delete: (req, res) => {
    messages.splice(
      messages.findIndex((message) => +req.params.id === message.id),
      1
    );

    res.status(200).send(messages);
  },
};
