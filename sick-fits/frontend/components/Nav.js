import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/items">Shop</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/signup">SignUp</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/acount">Acount</Link>
    </NavStyles>
  );
};

export default Nav;
