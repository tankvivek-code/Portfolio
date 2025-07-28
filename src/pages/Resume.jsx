const resumeUrl = "/Vivek_resume.pdf";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vivek_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">
        My Resume
      </h1>
      <p className="text-gray-600 mb-6">
        Download or preview my resume directly below.
      </p>

      <button
        onClick={handleDownload}
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Download Resume
      </button>

      <div className="mt-10 w-full aspect-[3/4] sm:aspect-[16/9]">
        <iframe
          src={resumeUrl}
          title="Resume PDF Viewer"
          className="w-full h-full rounded-lg border border-gray-300 shadow"
          loading="lazy"
          allowFullScreen
        >
          <p>
            Your browser does not support viewing PDFs.
            <a
              href={resumeUrl}
              download
              className="text-blue-600 underline ml-1"
            >
              Download here.
            </a>
          </p>
        </iframe>
      </div>
    </div>
  );
}

export default Resume;
