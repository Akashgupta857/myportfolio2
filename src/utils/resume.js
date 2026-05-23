import { resume, resumeFileName } from "./config";

function getDriveDownloadUrl(viewUrl) {
  const match = viewUrl.match(/\/d\/([^/]+)/);
  if (!match) return viewUrl;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}

export function openAndDownloadResume() {
  const downloadUrl = getDriveDownloadUrl(resume);

  window.open(resume, "_blank", "noopener,noreferrer");

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = resumeFileName;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
