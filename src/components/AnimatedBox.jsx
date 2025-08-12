const AnimatedBox = ({ children }) => {
  return (
    <>
      <div className="animated-box">
        {children}
      </div>

      <style>{`
        .animated-box img {
          --c: #F9CDAD; /* main color */
          --b: 8px; /* border thickness */
          --o: 25px; /* offset */
          width: 300px;
          --_p: calc(2 * var(--o) + var(--b));
          padding: var(--_p) var(--_p) 0 0;
          outline: var(--b) solid var(--c);
          outline-offset: calc(var(--o) - var(--_p));
          transition: padding 0.4s ease;
          cursor: pointer;
          box-sizing: content-box;
          display: block;
          user-select: none;
          border-radius: 12px;
        }
        .animated-box img + img {
          padding: var(--_p) 0 0 var(--_p);
        }
        .animated-box img:hover {
          padding: calc(var(--_p) / 2);
        }
      `}</style>
    </>
  );
};

export default AnimatedBox;
