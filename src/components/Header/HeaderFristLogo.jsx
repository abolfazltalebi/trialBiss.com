import Button from '../Button';
import { Link } from 'react-router-dom';
import { navLinksRight } from '../../constanst/HeaderItems';

export default function HeaderFristLogo() {
  return (
    <div className="md:flex items-center gap-4 hidden">
        <ul className="flex items-center gap-6">
          {navLinksRight.map(({ id, label, path }) => {
            return (
              <li className="capitalize" key={id}>
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
        <Button variant="header">contact us</Button>
      </div>
  )
}
