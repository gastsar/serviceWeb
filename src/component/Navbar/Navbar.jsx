import { MdMenu } from "react-icons/md";
const Navbar = () => {
  const NavBarMenu = [
    {
      id: 1,
      title: "Acceuil",
      path: "/",
    },
    {
      id: 2,
      title: "Services",
      path: "/services",
    },
    {
      id: 3,
      title: "A propos",
      path: "/apropos",
    },
    {
      id: 4,
      title: "Mes équipes",
      path: "/mes-equipes",
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div className="container py-10 flex justify-between items-center ">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">Logo</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavBarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="absolute w-2 h-2 rounded-full bg-secondary bottom-0 left-1/2 -translate-x-1/2 invisible group-hover:visible"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="btn primary-btn">Get Started</button>
          </ul>
        </div>
        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
