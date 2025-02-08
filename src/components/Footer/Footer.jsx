import { Link } from "react-router-dom";
import logo from "@/assets/images/icons/Trial.svg";

export default function Footer() {
  const quickLinks = [
    { id: 1, label: "Contact", src: "/contact" },
    { id: 2, label: "Refund policy", src: "/refund-policy" },
    { id: 3, label: "Terms and Conditions", src: "/team-and-conditions" },
  ];
  const follow = [
    { id: 1, name: "Facebook", src: "www.Facebook.com" },
    { id: 2, name: "Instagram", src: "www.Instagram.com" },
    { id: 3, name: "YouTube", src: "www.YouTube.com" },
  ];
  return (
    <footer className="bg-[#fdf9ed]">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6 ">
        {/* logo */}
        <div className="space-y-4">
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-1 ">
            <img src={logo} alt="" />
            <h2 className="capitalize font-bold">trail biss</h2>
          </div>
          <p className="text-sm">
            2118 Thornridge Cir. Syracuse, Connecticut 35624
          </p>
        </div>
        {/* contact */}
        <div className="space-y-4">
          <h2 className="font-medium capitalize text-lg">contact</h2>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm">
              hello@trailbliss.com
            </Link>
            <Link to="" className="text-sm">
              (319) 555-0115
            </Link>
            <Link to="" className="text-sm">
              (225) 555-0118
            </Link>
          </div>
        </div>
        {/* Quick links */}
        <div className="space-y-4">
          <h2 className="font-medium capitalize text-lg">Quick links</h2>
          <div className="flex flex-col gap-4">
            {quickLinks.map((Qitem) => {
              return (
                <Link to={Qitem.src} className="text-sm" key={Qitem.id}>
                  {Qitem.label}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Follow us */}
        <div className="space-y-4">
          <h2 className="font-medium capitalize text-lg">Follow us</h2>
          <div className="flex flex-col gap-4">
            {follow.map((Fitem) => {
              return (
                <Link to={Fitem.src} className="text-sm" key={Fitem.id}>
                  {Fitem.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* follow */}
      </div>
    </footer>
  );
}
