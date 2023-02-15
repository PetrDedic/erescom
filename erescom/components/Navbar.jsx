import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../hooks/useToggle";

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
    @media (max-width: 900px) {
      display: none;
    }
  }

  .menu-button {
    @media (min-width: 900px) {
      display: none;
    }

    color: white;
    fill: white;

    height: 64px;
    width: 64px;
    align-self: center;

    position: absolute;
    left: -96px;
    top: -1px;
    padding: 1rem;

    background-color: #a1a1a1;

    border-left: ${(props) => (props.open ? "1px black solid" : "none")};
  }

  .menu {
    height: 100vh;
    width: 50%;
    background-color: white;

    position: fixed;
    transform: ${(props) =>
      !props.open ? "translateX(200%)" : "translateX(100%)"};
    transition: 250ms;
    z-index: 999999999;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [open, toggleOpen] = useToggle(false, [true, false]);

  return (
    <StyledNavbar open={open}>
      <Image
        src="/logo_color.svg"
        alt="logo"
        height={96}
        width={192}
        priority
      />
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
          href="/o-nas"
          className={currentRoute === "/o-nas" ? "active" : ""}
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

      <div className="menu">
        <FontAwesomeIcon
          icon={faBars}
          className="menu-button"
          onClick={() => toggleOpen()}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
