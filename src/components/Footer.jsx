const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 text-gray-600 py-6 text-sm flex flex-col items-center space-y-2">
      <div className="max-w-2xl text-center">
        <h2 className=" mb-2">Ending with my favourite Rumi quote-</h2>
        <p className="italic text-gray-700 font-semibold">
          "If everything around seems dark, look again, YOU may be the LIGHT!"
        </p>
      </div>
      <p className="text-center text-[10px]">
        © {new Date().getFullYear()} Mohima Chowdhury. Crafted with passion and purpose.
      </p>
    </footer>
  );
};

export default Footer;
