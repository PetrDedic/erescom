import Head from "next/head";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";
import { useScrollContainer } from "react-indiana-drag-scroll";
import { useState } from "react";

const StyledProducts = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    height: calc(100% - 6rem);
  }
`;

const StyledMenu = styled.div`
  height: 6rem;
  width: auto;
  min-width: 100%;
  padding: 0 2rem;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='960' height='64' preserveAspectRatio='none' viewBox='0 0 960 64'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3crect width='960' height='64' x='0' y='0' fill='rgba(27%2c 150%2c 243%2c 0.35)'%3e%3c/rect%3e%3cpath d='M27.490472286051457 22.60953069827523L15.726900209626272 16.088876218895706 20.969817806671934 34.37310277470041z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M523.042%2c42.414C527.006%2c42.524%2c530.959%2c40.976%2c533.048%2c37.605C535.246%2c34.059%2c535.472%2c29.466%2c533.259%2c25.93C531.157%2c22.572%2c527.002%2c21.735%2c523.042%2c21.619C518.794%2c21.494%2c513.883%2c21.633%2c511.729%2c25.297C509.559%2c28.988%2c511.596%2c33.502%2c513.957%2c37.074C516.033%2c40.215%2c519.278%2c42.309%2c523.042%2c42.414' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M883.404%2c65.711C888.343%2c65.515%2c893.32%2c63.717%2c895.711%2c59.391C898.038%2c55.179%2c896.874%2c50.06%2c894.299%2c45.995C891.918%2c42.237%2c887.853%2c39.96%2c883.404%2c39.964C878.962%2c39.968%2c875.065%2c42.357%2c872.543%2c46.014C869.544%2c50.363%2c866.732%2c55.812%2c869.283%2c60.438C871.883%2c65.154%2c878.023%2c65.924%2c883.404%2c65.711' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M49.66070638442787 52.57067291535662L41.50051582533812 57.669725901471644 46.59956881145314 65.82991646056139 54.759759370542895 60.730863474446366z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M158.10872785833266 7.863597826780367L164.88600538535633 2.568608308069779 153.55488234377862-4.949813223110443z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M437.4763265456512 26.306187675333753L436.4014569834667 10.934836797035178 422.1049756673526 27.381057237518256z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M219.72278876162076 30.62346157083707L223.25882394029767 13.98772400105868 206.62308637051927 10.45168882238178 203.08705119184236 27.087426392160168z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M379.703%2c42.516C381.902%2c42.508%2c384.436%2c42.722%2c385.637%2c40.88C386.908%2c38.931%2c386.288%2c36.333%2c384.996%2c34.398C383.842%2c32.67%2c381.781%2c32.026%2c379.703%2c31.989C377.542%2c31.951%2c375.281%2c32.412%2c374.075%2c34.205C372.734%2c36.199%2c372.351%2c38.93%2c373.698%2c40.92C374.943%2c42.758%2c377.483%2c42.524%2c379.703%2c42.516' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M566.28 63.58 a18.36 18.36 0 1 0 36.72 0 a18.36 18.36 0 1 0 -36.72 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M615.76 23.03 a11.41 11.41 0 1 0 22.82 0 a11.41 11.41 0 1 0 -22.82 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M351.98086205897425 58.79239199927738L364.11097627582006 52.06855989372382 357.38714417026654 39.938445676878 345.2570299534207 46.66227778243155z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M804.1188924721724 6.8790339651328285L814.2243030029593 14.49400699855873 821.8392760363853 4.388596467771814 811.7338655055984-3.2263765656540873z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M702.4963986311267-1.9564852508718371L701.0231044878859 8.526547288109276 711.506137026867 9.999841431350012 712.9794311701078-0.48319110763110174z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M489.1160186705172 47.61231995425448L479.2864395147221 47.44074401187302 479.1148635723406 57.27032316766814 488.9444427281357 57.44189911004959z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M848.9193234448126 65.53680812314668L855.2193096802436 49.94379501512775 833.3263103367937 59.236821887715664z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M886.95 21.33 a17.89 17.89 0 1 0 35.78 0 a17.89 17.89 0 1 0 -35.78 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M275.67800645339673 46.54668031084177L269.2573538736198 55.06717406825844 277.7778476310365 61.48782664803535 284.1985002108134 52.96733289061868z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M634.63 20.3 a12.74 12.74 0 1 0 25.48 0 a12.74 12.74 0 1 0 -25.48 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M880.56 23.99 a11.06 11.06 0 1 0 22.12 0 a11.06 11.06 0 1 0 -22.12 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M926.937%2c41.316C931.484%2c41.467%2c936.152%2c40.245%2c938.724%2c36.492C941.65%2c32.223%2c942.758%2c26.528%2c940.127%2c22.071C937.529%2c17.669%2c932.047%2c16.375%2c926.937%2c16.522C922.121%2c16.66%2c917.308%2c18.565%2c914.998%2c22.793C912.766%2c26.88%2c913.912%2c31.836%2c916.435%2c35.75C918.735%2c39.319%2c922.693%2c41.175%2c926.937%2c41.316' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='960' height='64' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

  display: flex;
  flex-direction: row;
  gap: 2rem;
  overflow: auto;
  white-space: nowrap;
  align-items: center;

  @media (min-width: 1800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .category {
    width: auto;
    padding: 0.25rem;
    height: 4rem;
    background-color: white;
    border-radius: 1rem;
    flex-shrink: 0;

    transition: 250ms;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;

    transition: 250ms;

    &.selected {
      background-color: gray;
    }

    img {
      object-fit: contain;
      height: 3rem;
      margin: 0.25rem 0.5rem;

      border-radius: 0.5rem;
    }

    &:hover {
      background-color: #1b96f3;
      color: white;
      cursor: pointer;
    }
  }
`;

const StyledDetails = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const If = ({ isTrue, children }) => (isTrue ? children : null);

const Products = () => {
  const productList = [
    { name: "Tužková pájecí stanice SS8200", text: "dummy" },
    { name: "Digitální pájecí stanice SS8300", text: "dummy" },
  ];

  return (
    <StyledDetails>
      {productList.map((product, index) => (
        <Accordion key={index} header={product.name} text={product.text} />
      ))}
    </StyledDetails>
  );
};

const Produkty = () => {
  const [category, setCategory] = useState("DEN-ON");

  const Menu = (props) => {
    const scrollContainer = useScrollContainer();
    return (
      <StyledMenu ref={scrollContainer.ref}>
        <div
          className={category === "DEN-ON" ? "category selected" : "category"}
          onClick={() => setCategory("DEN-ON")}
        >
          <img src="./denon.png" alt="" />
        </div>
        <div
          className={category === "ALPHA" ? "category selected" : "category"}
          onClick={() => setCategory("ALPHA")}
        >
          <img
            src="https://static.wixstatic.com/media/e58b0a_550d8aea65254438b0f65e520f1c39e3.png/v1/fill/w_390,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58b0a_550d8aea65254438b0f65e520f1c39e3.png"
            alt=""
          />
        </div>
        <div
          className={category === "STANNOL" ? "category selected" : "category"}
          onClick={() => setCategory("STANNOL")}
        >
          <img
            src="https://www.pbt.cz/getattachment/c6085310-ab7f-4b4d-af50-d6449060757b/Stannol.aspx?width=200"
            alt=""
          />
        </div>
        <div
          className={category === "PRIBRAM" ? "category selected" : "category"}
          onClick={() => setCategory("PRIBRAM")}
        >
          <img
            src="https://www.kovopb.cz/wp-content/uploads/logo-kovohute.png"
            alt=""
          />
        </div>
        <div
          className={category === "BONDLINE" ? "category selected" : "category"}
          onClick={() => setCategory("BONDLINE")}
        >
          <img
            src="https://www.bondline.co.uk/wp-content/uploads/2019/01/logo.png"
            alt=""
          />
        </div>
        <div
          className={
            category === "TECHSPRAY" ? "category selected" : "category"
          }
          onClick={() => setCategory("TECHSPRAY")}
        >
          <img src="./techspray.png" alt="" />
        </div>
        <div
          className={category === "NOVATIO" ? "category selected" : "category"}
          onClick={() => setCategory("NOVATIO")}
        >
          <img src="https://novatio.com/img/novatio/logo-novatio.svg" alt="" />
        </div>
      </StyledMenu>
    );
  };

  return (
    <>
      <Head>
        <title>ERESCOM | Produkty</title>
        <meta name="description" content="Erescom produkty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/e.svg" />
      </Head>
      <StyledProducts category={category} setCategory={setCategory}>
        <Navbar />
        <main>
          <Menu />
          <If isTrue={category === "DEN-ON"}>
            <div>DEN ON</div>
          </If>
          <If isTrue={category === "ALPHA"}>
            <div>ALPHA</div>
          </If>
          <If isTrue={category === "STANNOL"}>
            <div>STANNOL</div>
          </If>
          <If isTrue={category === "PRIBRAM"}>
            <div>PRIBRAM</div>
          </If>
          <If isTrue={category === "BONDLINE"}>
            <div>BONDLINE</div>
          </If>
          <If isTrue={category === "TECHSPRAY"}>
            <div>TECHSPRAY</div>
          </If>
          <If isTrue={category === "NOVATIO"}>
            <div>NOVATIO</div>
          </If>
        </main>
      </StyledProducts>
    </>
  );
};

export default Produkty;
