import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-[#132034]">
      <nav className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-7">
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="uppercase text-[#c2a672] font-bold text-2xl">
              Placeholder
            </h1>
          </a>
        </Link>
        {/* <div> */}
        <div className="flex space-x-16">
          <div>
            <p className="uppercase text-white">
              <span className="text-[#c2a672]">Welcome back,</span> Din Djarin
            </p>
          </div>
          <div>
            <Link legacyBehavior href={"/"}>
              <a className="uppercase text-sm text-white hover:font-bold">
                Home
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href={""}>
              <a className="uppercase text-sm hover:font-bold text-white">
                My Learnings
              </a>
            </Link>
          </div>
          <div>
            <Link legacyBehavior href={""}>
              <a className="uppercase text-sm hover:font-bold text-white">
                Log out
              </a>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;

// <header>
// <nav className={`nav`}>
//   <Link href={"/"}>
//     <a>
//       <h1 className="logo">CodeWithMarish</h1>
//     </a>
//   </Link>
//   <div
//     onClick={() => setNavActive(!navActive)}
//     className={`nav__menu-bar`}
//   >
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
//   <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//     {MENU_LIST.map((menu, idx) => (
//       <div
//         onClick={() => {
//           setActiveIdx(idx);
//           setNavActive(false);
//         }}
//         key={menu.text}
//       >
//         <NavItem active={activeIdx === idx} {...menu} />
//       </div>
//     ))}
//   </div>
// </nav>
// </header>
