const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center p-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-8">
      © {new Date().getFullYear()} Tank Vivek. All rights reserved.
    </footer>
  );
};

export default Footer;
