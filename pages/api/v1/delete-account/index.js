async function deleteAccount(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    message: "Access the app Lucernos to delete your account.",
  });
}

export default deleteAccount;
