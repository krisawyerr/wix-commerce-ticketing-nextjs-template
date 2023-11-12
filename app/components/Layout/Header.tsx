import { CartBag } from '@app/components/CartBag/CartBag';
import { NavBar } from './NavBar/NavBar';
import { Login } from '@app/components/Login/Login';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="h-header z-40 w-full fullNav"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex px-6 sm:px-14 h-header items-center gap-4 sm:gap-8 navBanner">
        <h2 className="flex-1 title">
          <a href="/">SHIRT STORE #1030</a>
        </h2>
        {/* <div>
          <Login />
        </div> */}
        <section className="flex items-center gap-4 sm:gap-8">
          <div>
            <CartBag />
          </div>
          <div>
            <NavBar />
          </div>
        </section>
      </div>
    </header>
  </>
);

export default Header;
