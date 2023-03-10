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

    .container {
      width: 100%;
      padding: 0 10%;
      padding-bottom: 6rem;
      margin: 1rem auto;

      background-image: url("bg.svg");
      background-size: cover;
      background-position: top;

      img {
        margin: 2rem auto 3rem auto;
        height: 7rem;
        padding: 1rem;
        background-color: white;
        border-radius: 2rem;
      }
      p {
        font-size: 1.25rem;
      }

      .product {
        display: flex;
        flex-direction: row;

        &.pic {
          flex-direction: column;
          gap: 0;

          * {
            margin: 0 !important;
            max-width: 100% !important;
          }
          img {
            border-radius: 1rem 1rem 0 0 !important;
          }
          div.outer {
            border-radius: 0 0 0rem !important;
          }
        }

        &.images {
          justify-content: space-evenly;
          gap: 2rem;
          margin: 2rem 0;

          @media (max-width: 900px) {
            flex-direction: column;
          }
        }

        @media (max-width: 900px) {
          flex-direction: column;
        }

        img.example {
          object-fit: contain;
          margin: 1rem;
          height: 100%;
          max-height: 25vh;
          max-width: 75vw;
          border-radius: 1rem;
        }
      }
    }
  }
`;

const StyledMenu = styled.div`
  height: 6rem;
  min-height: 6rem;
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

const If = ({ isTrue, children }) => (isTrue ? children : null);

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
          <div className="container">
            <If isTrue={category === "DEN-ON"}>
              <img src="./denon.png" alt="" />
              <div className="product images">
                <div className="product pic">
                  <img src="./sc-7000z.jpg" alt="" className="example" />
                  <Accordion header="orig. odp??jec?? za????zen?? DEN-ON SC-7000Z">
                    El. pistole m?? trvale vyh????van?? hrot na nastavitelnou
                    teplotu od 350?? do 500??C.
                    <br />
                    <ul>
                      <li>Nap??t?? 220 V</li>
                      <li>frekvence 50/60 Hz</li>
                      <li>p????kon 120 W</li>
                      <li>podtlak 650 mmHg</li>
                    </ul>
                    <br />
                    Ods??v??n?? p??jky, profuk, horkovzdu??n?? re??im. Odstran??n??
                    ??ipov??ch a SMD sou????stek se prov??d?? snadn??ji a efektivn??ji.
                    Nejlep???? n??stroj uzn??van?? po cel??m sv??t??. Antistatick??
                    proveden??.
                    <br />
                    <br />
                    <ul>
                      Odp??jec?? hroty
                      <li>4SCSTD - @ 1.0 mm</li>
                      <li>4SC000A - @ 0.8 mm</li>
                      <li>4SC000B - @ 1.5 mm</li>
                      <li>4SC000C - @ 0.8 mm , jemn??</li>
                      <li>4SC000D - @ 0.8 mm , velmi jemn??</li>
                      <li>4SC000E - @ 1. 0 mm , jemn??</li>
                      <li>4SC000F - @ 1.5 mm , jemn??</li>
                      <li>4ST800 - stoj??nek k SC-7000Z</li>
                    </ul>
                    <br />
                    <p>
                      Zaji????ujeme z??ru??n?? i poz??ru??n?? profesion??ln?? SERVIS !!!
                    </p>
                  </Accordion>
                </div>
                <div className="product pic">
                  <img src="./img_ss8200_01.jpg" alt="" className="example" />
                  <Accordion header="tu??kov?? mikrop??jka DEN-ON SS-8200">
                    Kompaktn?? a velice lehk?? tu??kov?? mikrop??jka. M?? stejn?? v??kon
                    jako p??jec?? stanice. Topn?? t??l??sko 200 W a regulace teploty
                    se dosahuje pomoc?? kompaktn?? ovl??dac?? jednotky um??st??n?? v
                    rukojeti , kabel se zapojuje p????mo do z??suvky. Extr??m??
                    kr??tk?? oh??ev ??in?? p??jku okam??it?? p??ipravenou k p??jen??. ??ada
                    standardn??ch hrot?? d??laj?? z SS-8200 jednu z
                    nejuniverz??ln??j????ch p??je??ek na trhu.
                    <ul>
                      <li>Teplotn?? rozsah 200 - 450??C</li>
                      <li>Zaru??uje dokonalost p??jen??.</li>
                      P??jec?? hroty:
                      <li>81-01-01 a?? 81-01-11</li>
                    </ul>
                  </Accordion>
                </div>
              </div>
            </If>
            <If isTrue={category === "ALPHA"}>
              <img
                src="https://static.wixstatic.com/media/e58b0a_550d8aea65254438b0f65e520f1c39e3.png/v1/fill/w_390,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e58b0a_550d8aea65254438b0f65e520f1c39e3.png"
                alt=""
              />
              <div className="product images">
                <div className="product pic">
                  <img src="./alpha.png" alt="" className="example" />
                  <Accordion>
                    P??jky, c??ny - trubi??kov??, bez tavidla, ty??e, tavidla
                  </Accordion>
                </div>
              </div>
            </If>
            <If isTrue={category === "STANNOL"}>
              <img
                src="https://www.pbt.cz/getattachment/c6085310-ab7f-4b4d-af50-d6449060757b/Stannol.aspx?width=200"
                alt=""
              />

              <div className="product images">
                <div className="product pic">
                  <img src="./stan.png" alt="" className="example" />
                  <Accordion>
                    P??jky, c??ny - trubi??kov??, bez tavidla, ty??e, tavidla, IPA
                  </Accordion>
                </div>
              </div>
            </If>
            <If isTrue={category === "PRIBRAM"}>
              <img
                src="https://www.kovopb.cz/wp-content/uploads/logo-kovohute.png"
                alt=""
              />
              <p>
                Dlouholet?? zku??enosti a modern?? technologick?? z??zem?? umo????uj??
                firm?? KH P????bram vyr??b??t p??jky odpov??daj??c?? nejp????sn??j????m
                evropsk??m norm??m, spl??uj??c?? nezbytn?? po??adavky na????zen??
                Evropsk??ho parlamentu a Rady (ES) ??. 1907/2006
                (&quot;REACH&quot;).
              </p>
              <br />
              <p>
                KH P????bram jsou kvalitn??m ??esk??m v??robcem, tradi??n??m a
                spolehliv??m dodavatelem v??robk?? a slitin na b??zi olova, c??nu a
                drah??ch kov??. Hutnick?? tradice v??roby olova a st????bra na
                P????bramsku sah?? do d??vn?? minulosti, a?? v 19. stolet??, kdy
                p????bramsk?? st????brorudn?? dolov??n?? a hutnictv?? dos??hlo evropsk??ho
                a?? sv??tov??ho v??znamu.
              </p>
              <br />
              <p>
                V roce 2021 je na st??vaj??c??m m??st?? 235 let Kovohut?? P????bram.
              </p>
              <br />
              <ul>
                <li>Trubi??kov?? p??jky - Tuzemsko L/F</li>
                <li>Tavidla</li>
                <li>Ty??ov?? p??jky pro strojn?? p??jen??</li>
                <li>Dezoxida??n?? p????sada do p??jec??ch l??zn??</li>
                <li>P??jky pro elektroniku a elektrotechniku</li>
                <li>Tavidla</li>
                <li>Ty??ov?? p??jky pro strojn?? p??jen??</li>
                <li>P??jka na hlin??k</li>
                <li>Dezoxida??n?? p????sada do p??jec??ch l??zn??</li>
                <li>Ty??ov?? p??jky lit??</li>
              </ul>
            </If>
            <If isTrue={category === "BONDLINE"}>
              <img
                src="https://www.bondline.co.uk/wp-content/uploads/2019/01/logo.png"
                alt=""
              />
              <p>
                Bondline Electronics je vysoce kvalitn??m p??edn??m britsk??m
                v??robcem a dodavatelem produkt?? Static Control v r??mci odv??tv??
                ESD. Bondline dod??v?? do elektronick??ho pr??myslu ji?? od roku
                1986, t??m dohromady m?? dlouholet?? znalosti v oblasti statick??
                kontroly s ??adou antistatick??ch produkt??, produkt?? ESD a
                produkt?? pro kontrolu statick?? elekt??iny.
              </p>
              <p>
                Praktick?? sada vodiv??ch kart??????, skv??l?? pro ??i??t??n?? sou????st??
                v??ech velikost?? citliv??ch na statickou elekt??inu. Sada ESD
                ??t??tc??, vhodn?? pro mnoho aplikac?? a v??ce????elov?? pou??it??, a?? u??
                pot??ebujete vy??istit mikroelektroniku nebo v??t???? desky plo??n??ch
                spoj??. Antistatick?? produkty lze pou????vat na EPA pracovi??t??ch, v
                laborato????ch a ??ist??ch prostorech (clean rooms) p??i pr??ci s
                elektrostatick??m n??bojem.
                <br />
                <br />
              </p>
              <ul>
                <li>
                  ESD n??ramky : pr??miov?? vysoce antialergick?? nastaviteln??
                  komfortn?? n??ramek na ruku v ESD proveden?? - HCA10
                  (obj.??.001641)
                </li>
                <li>
                  ESD no??n?? p??sek: pr??miov?? uzem??ovac?? no??n?? p??sky, nastaviteln??
                  v ESD proveden??, zap??n??n?? na such?? zip, 1MOhm - HS2 (
                  obj.??.00164)
                </li>
                <li>
                  ESD kabl??k : spiral. (6ft) 1Mohm kabl. 2xP10 - CCS10 (
                  obj.??.001642)
                </li>
                <li>
                  ESD kabl??k: spiral.(6ft) kabl. 10mm z??padka na jack - CCJ10
                </li>
                <li>
                  ESD kart????e: komplexn?? ??ada kart??????, kter?? umo????uj?? bezpe??n??
                  ??i??t??n?? ESD citliv??ch sestav - KB1, 20x24x65 mm (
                  obj.??.1610ESD)
                </li>
                <li>
                  ESD obuv: antistatick?? obuv pro ??ist?? prostory - r??zn??
                  velikosti
                </li>
              </ul>
              <div className="product images">
                <div className="product pic">
                  <img src="./esd1.png" alt="" className="example" />
                  <Accordion header="ESD n??ramky">
                    Pr??miov?? vysoce antialergick?? nastaviteln?? komfortn?? n??ramek
                    na ruku v ESD proveden?? - HCA10 (obj.??.001641)
                  </Accordion>
                </div>
                <div className="product pic">
                  <img src="./esd2.png" alt="" className="example" />
                  <Accordion header="ESD kart????e">
                    Komplexn?? ??ada kart??????, kter?? umo????uj?? bezpe??n?? ??i??t??n?? ESD
                    citliv??ch sestav - KB1, 20x24x65 mm ( obj.??.1610ESD)
                  </Accordion>
                </div>
                <div className="product pic">
                  <img src="./esd3.png" alt="" className="example" />
                  <Accordion header="ESD obuv">
                    Antistatick?? obuv pro ??ist?? prostory - r??zn?? velikosti Je to
                    jenom zlomek produkt?? firmy:
                  </Accordion>
                </div>
              </div>
            </If>
            <If isTrue={category === "TECHSPRAY"}>
              <img src="./techspray.png" alt="" />
              <p>
                TechSpray je v??robce n??t??r??, technick??ch sprej??, ??ist??c??ch
                prost??edk?? a dal????ch nejr??zn??j????ch chemik??li??.
              </p>
              <div className="product images">
                <div className="product pic">
                  <img src="./flux.png" alt="" className="example" />
                  <Accordion header="FLUX REMOVER">
                    FLUX REMOVER je jemn??, ale ????inn?? ??isti??, kter?? bez probl??m??
                    odstran?? zbytky p??jec??ch p????pravk??. ??etrn?? intenzivn??
                    ??i??t??n?? DPS a elektronick??ch modul??, vhodn?? i pro
                    odma????ov??n?? za????zen?? a p????stroj??.
                  </Accordion>
                </div>
              </div>
            </If>
            <If isTrue={category === "NOVATIO"}>
              <img
                src="https://novatio.com/img/novatio/logo-novatio.svg"
                alt=""
              />
              <div className="product images">
                <div className="product pic">
                  <img src="./nova.png" alt="" className="example" />
                  <Accordion header="FLUX REMOVER">
                    GLASS FOAM je univerz??ln?? odma????ovac?? a ??ist??c?? p??na,
                    nezanech??v?? ??mouhy.
                  </Accordion>
                </div>
              </div>
            </If>
          </div>
        </main>
      </StyledProducts>
    </>
  );
};

export default Produkty;
