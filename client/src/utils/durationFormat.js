export default function convertToTimeFormat(minutes) {
  if (!minutes || isNaN(minutes)) {
    return "N/A"; // Handle invalid input
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}:${remainingMinutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
