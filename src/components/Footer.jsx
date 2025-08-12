const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 text-gray-600 py-6 text-sm flex flex-col items-center max-w-7xl mx-auto px-6 space-y-2">
      <div className="max-w-2xl text-center">
        <h2 className=" mb-2">Ending with my favourite Rumi quote-</h2>
        <p className="italic text-gray-700 font-semibold">
          "You are not a drop in the ocean. You are the entire ocean in a drop."
        </p>
      </div>
      <p className="text-center">
        © {new Date().getFullYear()} Mohima Chowdhury. Crafted with passion and purpose.
      </p>
    </footer>
  );
};

export default Footer;
