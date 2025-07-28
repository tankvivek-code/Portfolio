const resumeUrl = "/Vivek_resume.pdf";

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">My Resume</h1>
      <p className="text-gray-600 mb-6">Download my resume or preview it below.</p>

      <a
        href={resumeUrl}
        download
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Download Resume
      </a>

      <div className="mt-10 w-full aspect-[3/4] sm:aspect-[16/9]">
        <iframe
          src={resumeUrl}
          title="Resume PDF Viewer"
          loading="lazy"
          className="w-full h-full rounded-lg border border-gray-300 shadow"
          allowFullScreen
          aria-label="Resume Preview"
        />
      </div>
    </div>
  );
}

export default Resume;
