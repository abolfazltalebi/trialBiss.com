import { Link } from "react-router-dom";
import { navLinksLeft } from "../../constanst/HeaderItems";

export default function HeaderLastLogo() {
  return (
    <div className="hidden md:inline">
      <ul className="flex items-center gap-6">
        {navLinksLeft.map(({ id, label, path }) => {
          return (
            <li className="capitalize" key={id}>
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
