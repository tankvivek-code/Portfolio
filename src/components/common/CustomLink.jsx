const CustomLink = ({ to, children, className }) => {
  //   const { navigate, path } = useRoute();

  return (
    <button
      onClick={() => navigate(to)}
      className={`${className} ${path === to ? "text-blue-500" : "text-black"}`}
    >
      {children}
    </button>
  );
};

export default CustomLink;
