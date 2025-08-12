const Contact = () => {
  return (
    <div id="contact" className="max-w-2xl my-10 mx-auto p-8 rounded-lg shadow-md"
      style={{
        background: 'linear-gradient(135deg, #C0F0EA 0%, #E8A0E4 100%)'
      }}
    >
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-900">
        Contact Me
      </h1>

      <p className="mb-8 text-lg text-gray-700 text-center">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div className="space-y-6 text-left text-gray-800 text-lg px-6 sm:px-12">
        <p>
          📧{" "}
          <a
            href="mailto:work.mohima@gmail.com"
            className="text-blue-600 hover:underline"
          >
            work.mohima@gmail.com
          </a>
        </p>

        <p>
          📞{" "}
          <a href="tel:+8801869641314" className="text-blue-600 hover:underline">
            01869641314
          </a>
        </p>

        <p>
          🌐{" "}
          <a
            href="https://mohima-chowdhury.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://mohima-chowdhury.vercel.app/
          </a>
        </p>

        <p className="flex items-center gap-2">
          {/* LinkedIn SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.058-1.864-3.058-1.865 0-2.151 1.454-2.151 2.958v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.844-1.562 3.041 0 3.603 2.002 3.603 4.604v5.591z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/mohima-chowdhury/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            linkedin.com/in/mohima-chowdhury
          </a>
        </p>

        <p className="flex items-center gap-2">
          {/* GitHub SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.874.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.1.814 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <a
            href="https://github.com/MeMahi-13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            github.com/MeMahi-13
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
