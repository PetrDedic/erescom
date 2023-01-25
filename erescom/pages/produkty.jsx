import Head from "next/head";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";

const StyledProducts = styled.div`
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: row;
    height: calc(100% - 6rem);
  }
`;

const StyledMenu = styled.div`
  height: 100%;
  width: 16rem;
  padding: 2rem 0;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='256' height='952' preserveAspectRatio='none' viewBox='0 0 256 952'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='256' height='952' x='0' y='0' fill='rgba(27%2c 150%2c 243%2c 0.35)'%3e%3c/rect%3e%3cpath d='M176.25 189.13 a52.75 52.75 0 1 0 105.5 0 a52.75 52.75 0 1 0 -105.5 0z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M185.52774368591278 108.41615225720757L232.30024287398263 85.60368015451559 209.48777077129063 38.83118096644576 162.7152715832208 61.643653069137734z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M172.38022653556965 85.38364741873332L102.81824352929831 123.85586650210878 161.74785655793627 160.67917560358123z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M88.17315577436628 609.5080109501097L66.82659305908652 589.6020191809275 47.64088676295328 631.5748591384382z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-14.884164677298985 885.1350989597765L5.746646994044859 901.2536555817645 19.609076091354915 862.2481597637548z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M67.25375934790527 715.6803769807767L58.498154619395294 786.9890550761745 129.80683271479302 795.7446598046845 138.562437443303 724.4359817092867z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M160.138%2c354.159C176.909%2c354.381%2c190.81%2c341.637%2c198.092%2c326.528C204.499%2c313.235%2c200.453%2c298.376%2c193.223%2c285.513C185.801%2c272.308%2c175.274%2c259.61%2c160.138%2c258.999C144.143%2c258.353%2c129.733%2c268.582%2c122.075%2c282.639C114.735%2c296.112%2c116.675%2c312.003%2c123.883%2c325.547C131.635%2c340.113%2c143.639%2c353.941%2c160.138%2c354.159' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M150.66637693437764 600.2750652066646L177.49994799148885 605.9787168078924 172.6386398647749 562.8765344216117z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M134.97325062469383 163.38191305681733L196.75453530950986 146.89075782107238 157.9248996027923 106.68149297332167z' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M216.663%2c923.903C228.479%2c923.856%2c236.304%2c912.766%2c241.64%2c902.223C246.373%2c892.871%2c247.572%2c882.058%2c242.477%2c872.899C237.241%2c863.486%2c227.433%2c857.2%2c216.663%2c857.322C206.085%2c857.442%2c197.024%2c864.249%2c191.844%2c873.473C186.779%2c882.493%2c186.767%2c893.143%2c191.335%2c902.425C196.574%2c913.07%2c204.799%2c923.951%2c216.663%2c923.903' fill='rgba(27%2c 150%2c 243%2c 0.45)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='256' height='952' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .category {
    width: calc(100% - 4rem);
    height: 4rem;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;

    transition: 250ms;

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

const Menu = () => {
  return (
    <StyledMenu>
      <div className="category">Páječky</div>
      <div className="category">Pájky</div>
      <div className="category">ESD produkty</div>
      <div className="category">Odsávačky</div>
      <div className="category">Chemie</div>
    </StyledMenu>
  );
};

const Produkty = () => {
  return (
    <>
      <Head>
        <title>ERESCOM | Produkty</title>
        <meta name="description" content="Erescom produkty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/e.svg" />
      </Head>
      <StyledProducts>
        <Navbar />
        <main>
          <Menu />
          <Products />
        </main>
      </StyledProducts>
    </>
  );
};

export default Produkty;
