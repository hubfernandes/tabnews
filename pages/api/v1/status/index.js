function status(request, response) {
  response.status(200).json({
    k: "v",
  });
}

export default status;
