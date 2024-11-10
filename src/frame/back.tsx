// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { createTheme } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout } from "@toolpad/core/DashboardLayout";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ibk_logo from "../img/ibk_logo.png"; // 로고 이미지
// import Com0101 from "../com/com0101.tsx";
// import Com0102 from "../com/Com0102.tsx";
// import Com0103 from "../com/Com0103.tsx";
// import Com0110 from "../com/com0110.tsx"; // 추가
// import Com1000 from "../com/Com1000.tsx"; // 추가

// const NAVIGATION = [
//   {
//     kind: "header",
//     title: "기업 재무",
//   },
//   {
//     segment: "financial",
//     title: "기업 재무목록",
//     icon: <DashboardIcon />,
//     onClick: (navigate) => navigate("/financial"),
//   },
//   {
//     segment: "financial_de",
//     title: "기업별 재무재표",
//     icon: <DashboardIcon />,
//     onClick: (navigate) => navigate("/financial_de"),
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Analytics",
//   },
//   {
//     segment: "reports",
//     title: "여신신청정보",
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: "sales",
//         title: "여신승인정보",
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: "traffic",
//         title: "관리자화면",
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: "integrations",
//     title: "조기경보",
//     icon: <LayersIcon />,
//   },
// ];

// // 화면 색상 변경
// const demoTheme = createTheme({
//   cssVariables: {
//     colorSchemeSelector: "data-toolpad-color-scheme",
//   },
//   colorSchemes: { light: true, dark: true },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });
// function DemoPageContent({ pathname }) {
//   let content;
//   if (pathname === "/financial") {
//     content = <Com0102 />;
//   } else if (pathname === "/financial_de") {
//     content = <Com0110 />;
//   } else {
//     content = <div>기본 화면입니다.</div>;
//   }

//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       {content}
//     </Box>
//   );
// }
// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };
// function AppProviderBasic(props) {
//   const { window } = props;

//   const [selectedComponent, setSelectedComponent] = useState("");

//   const [pathname, setPathname] = React.useState("/Com0103.tsx");

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window !== undefined ? window() : undefined;

//   return (
//     <AppProvider
//       branding={{
//         title: "",
//         logo: <img src={ibk_logo} alt="ibk_logo" />,
//       }}
//       sx={{
//         "& .MuiDrawer-root": {
//           width: "300px", // 네비게이션 바의 너비 조절
//           //transfrom: "scale(0.8)",
//         },
//       }}
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <DemoPageContent pathname={pathname} />
//       </DashboardLayout>
//       {/* {renderSelectedComponent()} */}
//     </AppProvider>
//   );
// }

// AppProviderBasic.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

// export default AppProviderBasic;
