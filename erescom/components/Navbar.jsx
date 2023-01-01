import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNavbar = styled.div`
  width: 100%;
  height: 6rem;

  background-color: #a1a1a1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin: 0 2rem;
  }

  nav {
    height: 100%;
    margin: 0 3rem;

    display: flex;
    flex-direction: row;
    gap: 3rem;

    a {
      font-size: 1.5rem;
      letter-spacing: 0.25rem;
      align-self: center;
      text-decoration: none;
      color: lightgrey;

      transition: 250ms;

      &:hover {
        color: grey;
      }

      &.active {
        color: white;
      }
    }
  }
`;

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledNavbar>
      <Image src="/logo_color.svg" height={96} width={192} priority />
      <nav>
        <Link href="/" className={currentRoute === "/" ? "active" : ""}>
          Domů
        </Link>
        <Link
          href="/produkty"
          className={currentRoute === "/produkty" ? "active" : ""}
        >
          Produkty
        </Link>
        <Link
          href="/about"
          className={currentRoute === "/about" ? "active" : ""}
        >
          O nás
        </Link>
        <Link
          href="/contact"
          className={currentRoute === "/contact" ? "active" : ""}
        >
          Kontakt
        </Link>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
