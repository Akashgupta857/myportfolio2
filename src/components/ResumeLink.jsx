import { openAndDownloadResume } from "../utils/resume";

function ResumeLink({ className, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    openAndDownloadResume();
    onClick?.(e);
  };

  return (
    <a
      href="#resume"
      className={className}
      onClick={handleClick}
      role="button"
    >
      {children}
    </a>
  );
}

export default ResumeLink;
