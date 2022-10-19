/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : '';

    return new ImageResponse(
      (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#333',
                fontSize: 32,
                fontWeight: 600,
            }}
        >
            {/* @ts-ignore */}
            <svg tw="w-220 h-256 absolute -left-90" viewBox="0 0 2194 2500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2194 1250.22C2194 1104.88 2011.99 967.141 1732.93 881.725C1797.33 597.301 1768.71 371.014 1642.59 298.566C1613.52 281.572 1579.54 273.522 1542.42 273.522V373.25C1562.99 373.25 1579.54 377.275 1593.4 384.877C1654.22 419.759 1680.61 552.58 1660.03 723.413C1655.12 765.451 1647.07 809.724 1637.23 854.892C1549.57 833.426 1453.87 816.88 1353.25 806.147C1292.88 723.413 1230.27 648.282 1167.21 582.543C1313 447.039 1449.85 372.802 1542.87 372.802V273.075C1419.88 273.075 1258.89 360.728 1096.11 512.778C933.322 361.622 772.327 274.864 649.345 274.864V374.591C741.917 374.591 879.21 448.381 1025 582.99C962.391 648.73 899.782 723.413 840.303 806.147C739.234 816.88 643.532 833.426 555.879 855.339C545.593 810.619 537.991 767.239 532.624 725.649C511.605 554.816 537.543 421.995 597.916 386.666C611.333 378.616 628.774 375.039 649.345 375.039V275.311C611.78 275.311 577.792 283.361 548.276 300.355C422.611 372.802 394.437 598.642 459.282 882.172C181.119 968.036 0 1105.33 0 1250.22C0 1395.57 182.013 1533.31 461.071 1618.72C396.673 1903.15 425.294 2129.43 551.407 2201.88C580.475 2218.87 614.463 2226.92 652.029 2226.92C775.011 2226.92 936.005 2139.27 1098.79 1987.22C1261.57 2138.38 1422.57 2225.14 1545.55 2225.14C1583.11 2225.14 1617.1 2217.09 1646.62 2200.09C1772.28 2127.64 1800.46 1901.8 1735.61 1618.28C2012.88 1532.86 2194 1395.12 2194 1250.22V1250.22ZM1611.74 951.936C1595.19 1009.63 1574.62 1069.1 1551.36 1128.58C1533.03 1092.81 1513.8 1057.03 1492.78 1021.25C1472.21 985.477 1450.29 950.595 1428.38 916.607C1491.88 925.998 1553.15 937.626 1611.74 951.936ZM1406.91 1428.21C1372.03 1488.59 1336.26 1545.83 1299.14 1599.05C1232.5 1604.86 1164.98 1607.99 1097 1607.99C1029.47 1607.99 961.943 1604.86 895.757 1599.49C858.639 1546.27 822.415 1489.48 787.532 1429.55C753.545 1370.97 722.687 1311.49 694.513 1251.57C722.24 1191.64 753.545 1131.71 787.085 1073.13C821.968 1012.76 857.744 955.514 894.862 902.296C961.496 896.482 1029.02 893.352 1097 893.352C1164.53 893.352 1232.06 896.482 1298.24 901.849C1335.36 955.067 1371.59 1011.86 1406.47 1071.79C1440.46 1130.37 1471.31 1189.85 1499.49 1249.78C1471.31 1309.7 1440.46 1369.63 1406.91 1428.21ZM1551.36 1370.08C1575.51 1430 1596.08 1489.93 1613.08 1548.06C1554.49 1562.37 1492.78 1574.45 1428.83 1583.84C1450.74 1549.41 1472.65 1514.08 1493.23 1477.85C1513.8 1442.08 1533.03 1405.85 1551.36 1370.08ZM1097.89 1847.25C1056.3 1804.31 1014.71 1756.46 973.571 1704.14C1013.82 1705.93 1054.96 1707.27 1096.55 1707.27C1138.59 1707.27 1180.18 1706.38 1220.88 1704.14C1180.63 1756.46 1139.04 1804.31 1097.89 1847.25ZM765.172 1583.84C701.669 1574.45 640.401 1562.82 581.817 1548.51C598.364 1490.82 618.935 1431.34 642.19 1371.86C660.526 1407.64 679.755 1443.42 700.774 1479.19C721.793 1514.97 743.259 1549.85 765.172 1583.84ZM1095.66 653.202C1137.25 696.133 1178.84 743.985 1219.98 796.308C1179.73 794.519 1138.59 793.178 1097 793.178C1054.96 793.178 1013.37 794.072 972.676 796.308C1012.93 743.985 1054.52 696.133 1095.66 653.202ZM764.725 916.607C742.812 951.042 720.899 986.371 700.327 1022.59C679.755 1058.37 660.526 1094.15 642.19 1129.92C618.041 1070 597.469 1010.07 580.475 951.936C639.06 938.073 700.774 925.998 764.725 916.607V916.607ZM360.002 1476.51C201.691 1408.98 99.2801 1320.44 99.2801 1250.22C99.2801 1180.01 201.691 1091.02 360.002 1023.94C398.462 1007.39 440.499 992.632 483.879 978.769C509.369 1066.42 542.91 1157.65 584.5 1251.12C543.357 1344.14 510.264 1434.92 485.22 1522.13C440.947 1508.26 398.909 1493.06 360.002 1476.51ZM600.6 2115.57C539.78 2080.69 513.394 1947.87 533.966 1777.03C538.885 1735 546.935 1690.72 556.773 1645.55C644.426 1667.02 740.129 1683.57 840.75 1694.3C901.123 1777.03 963.732 1852.16 1026.79 1917.9C880.999 2053.41 744.153 2127.64 651.134 2127.64C631.01 2127.2 614.016 2123.17 600.6 2115.57V2115.57ZM1661.38 1774.8C1682.39 1945.63 1656.46 2078.45 1596.08 2113.78C1582.67 2121.83 1565.23 2125.41 1544.65 2125.41C1452.08 2125.41 1314.79 2051.62 1169 1917.01C1231.61 1851.27 1294.22 1776.59 1353.7 1693.85C1454.77 1683.12 1550.47 1666.57 1638.12 1644.66C1648.41 1689.83 1656.46 1733.21 1661.38 1774.8V1774.8ZM1833.55 1476.51C1795.09 1493.06 1753.05 1507.82 1709.67 1521.68C1684.18 1434.03 1650.64 1342.8 1609.05 1249.33C1650.2 1156.31 1683.29 1065.53 1708.33 978.321C1752.61 992.185 1794.64 1007.39 1834 1023.94C1992.31 1091.46 2094.72 1180.01 2094.72 1250.22C2094.27 1320.44 1991.86 1409.43 1833.55 1476.51V1476.51Z" fill="#61DAFB"/>
                <path d="M1096.55 1454.6C1209.43 1454.6 1300.93 1363.1 1300.93 1250.22C1300.93 1137.35 1209.43 1045.85 1096.55 1045.85C983.68 1045.85 892.179 1137.35 892.179 1250.22C892.179 1363.1 983.68 1454.6 1096.55 1454.6Z" fill="#61DAFB"/>
            </svg>
            <div tw="flex absolute left-50 items-left text-white ml-100 max-w-3/6 flex-col">
                <div style={{
                    fontWeight: 600
                }} 
                tw="text-[120px]">mnik01</div>
                <div tw="text-4xl mt-2">{title}</div>
            </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
