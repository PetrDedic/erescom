import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledMain = styled.main`
  width: 100%;
  height: auto;
`;
const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  justify-content: center;
  align-content: center;
  &:after {
    position: absolute;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    content: "";
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    //animation: breath 10s infinite;
  }
  .logo {
    width: 40vw;
    height: 20vw;
    position: relative;
    margin: auto;

    @media (max-width: 900px) {
      bottom: 35vh;
      width: 60vw;
      height: 40vw;
    }
  }

  .links {
    position: absolute;
    left: 0;
    right: 0;
    width: max-content;
    margin: auto;
    bottom: 25%;
    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10vw;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 4rem;
    }

    z-index: 5;

    a {
      color: #fff;
      font-size: 3rem;
      text-decoration: none;
      font-family: "Squareo";

      &:hover {
        font-family: "Square";
      }
    }
  }

  p {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 5vh;
    width: 65vw;

    letter-spacing: 0.5rem;
    z-index: 5;
    font-size: 3rem;
    color: #fff;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 1.5rem;
      width: 80vw;
      bottom: 2.5vh;
    }
  }

  @keyframes breath {
    0% {
      -webkit-box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
      -moz-box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
      box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
    }
    50% {
      -webkit-box-shadow: inset 10px -90px 300px -129px rgba(27, 149, 243, 0.5);
      -moz-box-shadow: inset 10px -90px 300px -129px rgba(27, 149, 243, 0.5);
      box-shadow: inset 10px -90px 300px -129px rgba(27, 149, 243, 0.5);
    }
    100% {
      -webkit-box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
      -moz-box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
      box-shadow: inset 10px 77px 300px -129px rgba(27, 149, 243, 0.5);
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>ERESCOM</title>
        <meta name="description" content="Erescom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/e.svg" />
      </Head>
      <StyledMain>
        <Hero>
          <Image
            src="/hero.jpg"
            fill
            priority
            alt="hero"
            sizes="100vw"
            style={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
          <div className="logo">
            <Image
              src="/logo_svg_white.svg"
              fill
              alt="logo"
              priority
              style={{
                zIndex: 5,
                filter: "drop-shadow(25px 25px 25px #222222)",
              }}
              sizes="50vw"
            />
          </div>
          <div className="links">
            <Link href="./produkty">PRODUKTY</Link>
            <Link href="/o-nas">O N??S</Link>
            <Link href="/">KONTAKT</Link>
          </div>
          <p>Ji?? 25 let jsme tu pro V??s!</p>
        </Hero>
      </StyledMain>
    </>
  );
}
