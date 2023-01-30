import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const StyledAbout = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  background-image: url("bg.svg");
  background-size: cover;
  background-position: top;

  section {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    height: auto;
    width: calc(100% - 24rem);
    @media (max-width: 1280px) {
      width: calc(100% - 12rem);
    }
    @media (max-width: 1024px) {
      width: calc(100% - 8rem);
    }
    @media (max-width: 900px) {
      width: calc(100% - 6rem);
    }
    max-width: 1920px;
    margin: 3rem auto;

    p {
      font-size: 1.5rem;

      span {
        font-weight: bold;
      }
    }
    img {
      margin: auto;
    }

    .crimson {
      color: crimson;
      p {
        text-align: center;
      }
    }

    div.what-we-do {
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: row;

      @media (max-width: 900px) {
        flex-direction: column;
      }

      .card {
        width: 100%;
        height: auto;
        margin: 2rem;
        padding: 2rem;

        @media (max-width: 900px) {
          margin: 2rem 0;
        }

        background-color: white;
        border-radius: 2rem;
        box-shadow: 10px 10px 54px 24px rgba(0, 0, 0, 0.29);

        li {
          margin: 0.5rem 0;
        }

        .heading {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
        }
      }
    }
  }

  .header {
    aspect-ratio: 15/1;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='128' preserveAspectRatio='none' viewBox='0 0 1920 128'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1920' height='128' x='0' y='0' fill='rgba(144%2c 196%2c 244%2c 1)'%3e%3c/rect%3e%3cg%3e%3cpath d='M1930.5 58.5L1917.5 58.5L1904.5 58.5L1891.5 58.5L1878.5 58.5L1865.5 58.5L1852.5 58.5L1839.5 58.5' stroke='rgba(27%2c 150%2c 243%2c 1)' stroke-width='2.17'%3e%3c/path%3e%3cpath d='M1837.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0z' fill='rgba(27%2c 150%2c 243%2c 1)'%3e%3c/path%3e%3cpath d='M1007.5 58.5L994.5 58.5M1163.5 58.5L1150.5 58.5L1137.5 58.5L1124.5 58.5L1111.5 58.5L1098.5 58.5L1085.5 45.5L1072.5 45.5L1059.5 45.5L1046.5 45.5L1033.5 45.5L1020.5 45.5L1007.5 45.5L994.5 32.5L981.5 32.5L968.5 32.5L955.5 32.5L942.5 32.5L929.5 32.5L916.5 32.5L903.5 45.5M1670.5 58.5L1657.5 45.5L1644.5 45.5L1631.5 45.5L1618.5 45.5L1605.5 45.5L1592.5 45.5L1579.5 45.5L1566.5 45.5M1774.5 71.5L1761.5 84.5L1748.5 84.5L1735.5 84.5L1722.5 84.5L1709.5 84.5L1696.5 84.5L1683.5 84.5L1670.5 84.5L1657.5 84.5L1644.5 84.5M1761.5 71.5L1748.5 58.5L1735.5 45.5L1722.5 45.5L1709.5 45.5L1696.5 45.5L1683.5 58.5M1436.5 58.5L1423.5 45.5M1371.5 58.5L1358.5 71.5L1345.5 71.5M1605.5 58.5L1592.5 71.5L1579.5 71.5L1566.5 71.5L1553.5 71.5L1540.5 71.5L1527.5 71.5L1514.5 71.5L1501.5 71.5L1488.5 71.5L1475.5 71.5M1644.5 58.5L1631.5 71.5L1618.5 71.5L1605.5 71.5M1657.5 58.5L1644.5 71.5M1735.5 71.5L1722.5 58.5L1709.5 58.5L1696.5 58.5M1267.5 58.5L1254.5 45.5L1241.5 45.5L1228.5 45.5L1215.5 45.5L1202.5 45.5L1189.5 45.5L1176.5 45.5L1163.5 45.5L1150.5 45.5L1137.5 45.5L1124.5 45.5L1111.5 45.5L1098.5 45.5L1085.5 32.5L1072.5 32.5L1059.5 32.5L1046.5 32.5M1813.5 71.5L1800.5 58.5L1787.5 58.5L1774.5 58.5L1761.5 58.5M1527.5 45.5L1514.5 58.5M1683.5 71.5L1670.5 71.5L1657.5 71.5M1137.5 84.5L1124.5 71.5M1514.5 45.5L1501.5 45.5M1397.5 58.5L1384.5 45.5L1371.5 45.5L1358.5 45.5L1345.5 45.5L1332.5 45.5L1319.5 45.5L1306.5 45.5L1293.5 45.5L1280.5 45.5M1449.5 58.5L1436.5 71.5L1423.5 71.5L1410.5 71.5L1397.5 71.5L1384.5 71.5L1371.5 71.5L1358.5 84.5M1930.5 71.5L1917.5 71.5L1904.5 71.5L1891.5 71.5L1878.5 71.5L1865.5 71.5L1852.5 71.5L1839.5 71.5L1826.5 71.5L1813.5 71.5L1800.5 71.5L1787.5 71.5L1774.5 71.5L1761.5 71.5L1748.5 71.5L1735.5 71.5L1722.5 71.5L1709.5 71.5L1696.5 71.5L1683.5 71.5L1670.5 58.5L1657.5 58.5L1644.5 58.5L1631.5 58.5L1618.5 58.5L1605.5 58.5L1592.5 58.5L1579.5 58.5L1566.5 58.5L1553.5 58.5L1540.5 45.5L1527.5 45.5L1514.5 45.5L1501.5 58.5L1488.5 58.5L1475.5 58.5L1462.5 58.5L1449.5 58.5L1436.5 58.5L1423.5 58.5L1410.5 58.5L1397.5 58.5L1384.5 58.5L1371.5 58.5L1358.5 58.5L1345.5 58.5L1332.5 58.5L1319.5 58.5L1306.5 58.5L1293.5 58.5L1280.5 58.5L1267.5 58.5L1254.5 58.5L1241.5 58.5L1228.5 58.5L1215.5 58.5L1202.5 58.5L1189.5 58.5L1176.5 58.5L1163.5 58.5L1150.5 71.5L1137.5 84.5L1124.5 84.5L1111.5 71.5L1098.5 71.5L1085.5 58.5L1072.5 58.5L1059.5 58.5L1046.5 58.5L1033.5 58.5L1020.5 58.5L1007.5 58.5L994.5 45.5L981.5 45.5L968.5 45.5L955.5 45.5L942.5 45.5' stroke='rgba(27%2c 150%2c 243%2c 1)' stroke-width='2.17'%3e%3c/path%3e%3cpath d='M940.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM992.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM901.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1564.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1642.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1681.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1421.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1343.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1473.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1603.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1642.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1694.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1044.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1759.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1512.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1655.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1122.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1499.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1278.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1356.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0z' fill='rgba(27%2c 150%2c 243%2c 1)'%3e%3c/path%3e%3cpath d='M1774.5 32.5L1761.5 45.5M1683.5 32.5L1670.5 45.5M1839.5 45.5L1826.5 45.5L1813.5 45.5L1800.5 45.5L1787.5 45.5L1774.5 45.5M1566.5 32.5L1553.5 32.5L1540.5 32.5L1527.5 32.5L1514.5 32.5L1501.5 32.5L1488.5 32.5M1930.5 45.5L1917.5 45.5L1904.5 45.5L1891.5 45.5L1878.5 45.5L1865.5 45.5L1852.5 45.5L1839.5 45.5L1826.5 32.5L1813.5 32.5L1800.5 32.5L1787.5 32.5L1774.5 32.5L1761.5 32.5L1748.5 32.5L1735.5 32.5L1722.5 32.5L1709.5 32.5L1696.5 32.5L1683.5 32.5L1670.5 32.5L1657.5 32.5L1644.5 32.5L1631.5 32.5L1618.5 32.5L1605.5 32.5L1592.5 32.5L1579.5 32.5L1566.5 32.5L1553.5 45.5' stroke='rgba(27%2c 150%2c 243%2c 1)' stroke-width='2.17'%3e%3c/path%3e%3cpath d='M1551.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1759.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1668.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1772.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1486.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0z' fill='rgba(27%2c 150%2c 243%2c 1)'%3e%3c/path%3e%3cpath d='M617.5 71.5L604.5 58.5L591.5 45.5L578.5 32.5L565.5 32.5L552.5 32.5L539.5 32.5L526.5 32.5L513.5 32.5L500.5 32.5L487.5 32.5L474.5 32.5L461.5 32.5L448.5 32.5L435.5 32.5L422.5 32.5L409.5 32.5L396.5 32.5L383.5 32.5M695.5 71.5L682.5 71.5L669.5 71.5L656.5 71.5L643.5 71.5L630.5 71.5L617.5 84.5M1878.5 84.5L1865.5 97.5M1917.5 84.5L1904.5 97.5L1891.5 97.5L1878.5 97.5M578.5 71.5L565.5 84.5L552.5 84.5M1163.5 84.5L1150.5 97.5M1592.5 97.5L1579.5 84.5L1566.5 84.5L1553.5 84.5L1540.5 84.5M994.5 97.5L981.5 97.5L968.5 97.5M1111.5 97.5L1098.5 84.5L1085.5 84.5L1072.5 84.5M812.5 84.5L799.5 71.5L786.5 71.5L773.5 71.5M1813.5 97.5L1800.5 84.5L1787.5 84.5L1774.5 84.5M591.5 71.5L578.5 58.5L565.5 58.5L552.5 58.5L539.5 58.5L526.5 58.5L513.5 58.5L500.5 58.5M929.5 84.5L916.5 84.5L903.5 84.5L890.5 84.5L877.5 84.5L864.5 71.5L851.5 58.5L838.5 58.5L825.5 58.5L812.5 58.5L799.5 45.5L786.5 45.5L773.5 45.5L760.5 45.5L747.5 45.5L734.5 45.5L721.5 45.5L708.5 45.5L695.5 45.5L682.5 45.5L669.5 45.5L656.5 45.5L643.5 45.5M1254.5 71.5L1241.5 71.5L1228.5 71.5L1215.5 71.5L1202.5 71.5L1189.5 71.5L1176.5 71.5L1163.5 71.5M630.5 58.5L617.5 45.5L604.5 45.5L591.5 32.5M1306.5 84.5L1293.5 84.5L1280.5 84.5L1267.5 84.5L1254.5 84.5M1033.5 97.5L1020.5 84.5L1007.5 84.5L994.5 84.5L981.5 71.5L968.5 58.5L955.5 58.5L942.5 58.5L929.5 58.5L916.5 58.5L903.5 58.5L890.5 58.5L877.5 58.5L864.5 58.5L851.5 45.5L838.5 45.5L825.5 45.5L812.5 45.5L799.5 32.5L786.5 32.5L773.5 32.5L760.5 32.5L747.5 32.5M1410.5 84.5L1397.5 97.5M1449.5 97.5L1436.5 97.5L1423.5 97.5M1852.5 97.5L1839.5 84.5L1826.5 84.5L1813.5 84.5M838.5 84.5L825.5 71.5L812.5 71.5M864.5 84.5L851.5 97.5L838.5 97.5L825.5 97.5L812.5 97.5L799.5 97.5L786.5 97.5M1176.5 84.5L1163.5 97.5M1059.5 97.5L1046.5 84.5L1033.5 84.5L1020.5 71.5M955.5 84.5L942.5 71.5L929.5 71.5L916.5 71.5L903.5 71.5M1189.5 84.5L1176.5 97.5M1930.5 84.5L1917.5 84.5L1904.5 84.5L1891.5 84.5L1878.5 84.5L1865.5 84.5L1852.5 97.5L1839.5 97.5L1826.5 97.5L1813.5 97.5L1800.5 97.5L1787.5 97.5L1774.5 97.5L1761.5 97.5L1748.5 97.5L1735.5 97.5L1722.5 97.5L1709.5 97.5L1696.5 97.5L1683.5 97.5L1670.5 97.5L1657.5 97.5L1644.5 97.5L1631.5 97.5L1618.5 97.5L1605.5 97.5L1592.5 97.5L1579.5 97.5L1566.5 97.5L1553.5 97.5L1540.5 97.5L1527.5 97.5L1514.5 97.5L1501.5 97.5L1488.5 97.5L1475.5 97.5L1462.5 97.5L1449.5 97.5L1436.5 84.5L1423.5 84.5L1410.5 84.5L1397.5 84.5L1384.5 97.5L1371.5 97.5L1358.5 97.5L1345.5 84.5L1332.5 84.5L1319.5 84.5L1306.5 84.5L1293.5 71.5L1280.5 71.5L1267.5 71.5L1254.5 71.5L1241.5 84.5L1228.5 84.5L1215.5 84.5L1202.5 84.5L1189.5 84.5L1176.5 84.5L1163.5 84.5L1150.5 84.5L1137.5 97.5L1124.5 97.5L1111.5 97.5L1098.5 97.5L1085.5 97.5L1072.5 97.5L1059.5 97.5L1046.5 97.5L1033.5 97.5L1020.5 97.5L1007.5 97.5L994.5 97.5L981.5 84.5L968.5 84.5L955.5 84.5L942.5 84.5L929.5 84.5L916.5 97.5L903.5 97.5L890.5 97.5L877.5 97.5L864.5 84.5L851.5 84.5L838.5 84.5L825.5 84.5L812.5 84.5L799.5 84.5L786.5 84.5L773.5 84.5L760.5 84.5L747.5 84.5L734.5 84.5L721.5 84.5L708.5 84.5L695.5 71.5L682.5 58.5L669.5 58.5L656.5 58.5L643.5 58.5L630.5 58.5L617.5 71.5L604.5 71.5L591.5 71.5L578.5 71.5L565.5 71.5' stroke='rgba(27%2c 150%2c 243%2c 1)' stroke-width='2.17'%3e%3c/path%3e%3cpath d='M563.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM381.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM615.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1863.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1876.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM550.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1148.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1538.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM966.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1070.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM771.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1772.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM498.33 58.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM641.33 45.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1161.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM589.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1252.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM745.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1395.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1421.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1811.33 84.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM810.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM784.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1161.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1018.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM901.33 71.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0zM1174.33 97.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0z' fill='rgba(27%2c 150%2c 243%2c 1)'%3e%3c/path%3e%3cpath d='M1930.5 32.5L1917.5 32.5L1904.5 32.5L1891.5 32.5L1878.5 32.5L1865.5 32.5L1852.5 32.5L1839.5 32.5' stroke='rgba(27%2c 150%2c 243%2c 1)' stroke-width='2.17'%3e%3c/path%3e%3cpath d='M1837.33 32.5 a2.17 2.17 0 1 0 4.34 0 a2.17 2.17 0 1 0 -4.34 0z' fill='rgba(27%2c 150%2c 243%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1920' height='128' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    display: grid;
    align-items: center;
    justify-items: center;

    h1 {
      color: white;
      font-size: 4rem;

      @media (max-width: 900px) {
        font-size: 3rem;
      }
    }
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>ERESCOM | O nás</title>
        <meta name="description" content="Erescom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/e.svg" />
      </Head>
      <StyledAbout>
        <Navbar />
        <div className="header">
          <h1>O nás a o firmě</h1>
        </div>
        <section>
          <div>
            <div className="what-we-do">
              <div className="card">
                <p className="heading">Vše pro pájení a odpájení</p>
                <ul>
                  <li>
                    ruční pájecí mikropájky, mikropájky s tzv.
                    &quot;minivlnou&quot; (DENON SS-8000, SS-8100 D, SS-8200,
                    SS-8300 a SS-8400) PACE ST 20 E a ST 40 s displayem,
                    DIAMETRAL SBL 530.1A s vypínací automatikou 1B
                  </li>
                  <li>
                    ruční odpájecí nářadí: odsávací pistole SC 7000 Z - s
                    profukem, horkovzduŠný pájecí a odpájecí přístroj LEISTER
                    HOT JET S
                  </li>
                  <li>
                    strojní pájení: pájecí vlny (stolní, průmyslové,
                    laboratorní), pájení desek PS s klasickou montáží, s povrch.
                    montáží (SMT), přetavovací pece IR reflow - KONTAKT SYSTEME,
                    ELECTROVERT, EBSO, ESSEMTECH, SEHO, TECHNOPRINT a EPM
                  </li>
                  <li>
                    pomocný pájecí materiál všeho druhu - naše i zahraniční
                    cínové trubičkové pájky, tyče do pájecích vln, pájecí pasty,
                    tavidla i bezoplachová, dosíerovací zařízení, chemikálie,
                    bezolovnaté pájky
                  </li>
                  <li>
                    mycí zařízení desek PS - průběžná i stacionární a
                    ultrazvukem.
                  </li>
                </ul>
              </div>

              <div className="card">
                <p className="heading">
                  Vše pro osazování a opravy desek plošných spojů
                </p>
                <ul>
                  <li>
                    osazovací pracoviště SMD součástek: ruční, poloautomaty,
                    automaty svět. výrobců, IN-LINE
                  </li>
                  <li>
                    opravárenská pracoviště pro opravy DPS: klasická montáž i
                    SMT, vision systém, test. součástek
                  </li>
                  <li>
                    optické přístroje: prosvětlovací lupy, stereomikroskopy
                    (systém EICKHORST, VISION STEREO - SYSTÉMY), CCD kamery
                  </li>
                  <li>
                    čištění desek DPS, spreye, lepící pásky na DPS, tekuté krycí
                    masky
                  </li>
                  <li>montážní rámeček pro opravy desek LEISTER</li>
                  <li>upínací zařízení od firmy BERNSTEIN</li>
                </ul>
              </div>
            </div>
            <div className="what-we-do">
              <div className="card">
                <p className="heading">Vše pro vlastní výrobu desek PS</p>
                <ul>
                  <li>
                    brusky, cínovačky, fotoplotery, lisy, HAL, osvětlovací rámy,
                    leptačky, vrtačky, stříhačky, zlatičky, atd.
                  </li>
                </ul>
              </div>

              <div className="card">
                <p className="heading">
                  Vše pro ochranu před účinky elektrostatického pole
                </p>
                <ul>
                  <li>
                    návrh a vybavení antistatických pracovišť: ošetření stolů,
                    podlah, ionizátory vzduchu
                  </li>
                  <li>
                    dodávky antistatických náramků, obuvi, plášťů, židlí, boxů,
                    přepravek, zásobníků
                  </li>
                  <li>
                    balící a přepravní materiál: sáčky, molitany, krabičky atd.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="crimson">
            <p>ZDARMA</p>
            <ul>
              <li>Servis zajištěn</li>
              <li>Rádi přijedeme i k Vám</li>
              <li>Vypracujeme projekty výrobních linek technologie SMT</li>
              <li>Poradenská činnost v oblasti pájení a oprav desek PS</li>
              <li>
                Vykupujeme nadnormativní zásoby všech druhů olovnatých a
                bezolovnatých Sn-pájek, drátů, trubiček, tyčí, bloků, atd. za
                předem dohodnuté ceny
              </li>
            </ul>
          </div>
          <p>
            Firma <span>ERESCOM SMT v. o. s.</span> zajišťuje pro CZ a SK trh
            dodávky a servis zařízení pro investiční elektroniku, předevąím
            zařízení na výrobu a opravy desek PS v klasické i SMT montáži. Je
            dodavatelem široké škály ručních pájecích i odpájecích zařízení vč.
            cínových pájek a tavidel. Provádí zdarma projekty výrobních linek
            technologie SMT a poradenství v oblasti pájení.
          </p>
          <Image
            src="/logo_color.svg"
            alt="logo"
            height={96 * 2}
            width={192 * 2}
            priority
          />
          <p>
            Dále komplexní projekty antistatických pracovišť &quot;na klíč&quot;
            vč. antistatických nátěrů a vodivých lepidel.
          </p>
          <p>
            Firma byla založena v lednu roku 1991 a za celou dobu 25-ti let
            trvání vychovala postupně další pokračovatele v oboru své činnosti
            mladší generace. Což chápeme jako positivum naší činnosti... <br />V
            současné době je přes šest tisíc zákazníků s našimi službami a
            rychloobrátkovým servisem více jak spokojeno, o čemž svědčí celá
            řada pochvalných dopisů a telefonátů, vč. referenčního listu, kam
            jsme svá zařízení dodali...
          </p>
        </section>
      </StyledAbout>
    </>
  );
};

export default About;
