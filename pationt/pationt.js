function showDateTimeAlert() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const dateTimeString = today.toLocaleDateString("en-US", options); // Format the date and time in English

  Swal.fire({
    title: "Current Date and Time",
    text: dateTimeString,
    icon: "info",
    confirmButtonText: "OK",
  });
}

// Call the function to show the alert
showDateTimeAlert();
