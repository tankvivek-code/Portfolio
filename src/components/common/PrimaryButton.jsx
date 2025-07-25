const PrimaryButton = ({ children, to, onClick, className, src = "" }) => {
  const handleClick = () => {
    if (to) {
      window.history.pushState({}, "", to);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }

    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${className}`}
    >
      {src && <img src={src} alt="icon" className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default PrimaryButton;
