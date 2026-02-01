async function deleteAccount(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    message: "Account deletion feature is under development.",
  });
}

export default deleteAccount;
