import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItems = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Contact", path: "/contact"}
  ];

  const navLinkClass = ({ isActive}) => isActive ? "bg-green-500 text-white rounded p-1" : "text-blue-500 p-1";

  return (
    <div className="w-full bg-gray-500 text-white p-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">James Asugan</h1>
            <div className="flex space-x-4">    
                <ul className="flex space-x-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={navLinkClass}>
                        {item.name}
                    </NavLink>
                  ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header