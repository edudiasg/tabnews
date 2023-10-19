function status(req, res) {
  res.status(200).json({ chave: "Successfully called" });
}

export default status;
