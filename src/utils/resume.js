import { RESUME_FILENAME, RESUME_URL } from "../constants/resume";

export function openAndDownloadResume() {
  window.open(RESUME_URL, "_blank", "noopener,noreferrer");

  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = RESUME_FILENAME;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
