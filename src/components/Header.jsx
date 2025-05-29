//import "boxicons";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  // function to toggle the mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    // check if mobileMenu currently has the hidden class, if it does remove it, otherwise add it
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <div className="flex flex-row justify-between items-center ">
        <img
          src="/adudev-light-Logo.png"
          alt="adudev light logo"
          className="z-10"
          height={40}
          width={40}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        {/* <h1
          className="text-3xl md:text-4xl lg:text-4xl font-light "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          AduDev
        </h1> */}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          COMPANY
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          FEATURES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          RESOURCES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          DOCS
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGNIN
      </button>

      {/* Mobile menu button, visable only on mobile screens */}
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile menu - hidden by default */}
      <div
        id="mobileMenu"
        className="hidden fixed top-20 bottom-0 right-0 left-0 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="h-screen flex flex-col gap-6 items-center justify-center pb-28">
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            COMPANY
          </a>
          <a href="#">FEATURES</a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            RESOURCES
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
