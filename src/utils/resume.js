import { resume, resumeFileName } from "./config";

function getDriveDownloadUrl(viewUrl) {
  const match = viewUrl.match(/\/d\/([^/]+)/);
  if (!match) return viewUrl;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}

export function openAndDownloadResume() {
  // 1. Open resume in new tab — normal, never blocked
  window.open(resume, "_blank", "noopener,noreferrer");

  // 2. Download via hidden iframe — browsers never block iframes as popups
  const downloadUrl = getDriveDownloadUrl(resume);
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = downloadUrl;
  document.body.appendChild(iframe);

  // Clean up after download has had time to start
  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 5000);
}
