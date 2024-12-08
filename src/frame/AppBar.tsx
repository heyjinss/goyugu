import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import ibk_logo from "../img/goyu111.jpg"; // 로고 이미지
import Com0101 from "../com/com0101.tsx";
import Com0102 from "../com/Com0102.tsx";
import Com0103 from "../com/Com0103.tsx";
import Com0110 from "../com/com0110.tsx"; // 추가
import Com1000 from "../com/Com1000.tsx"; // 추가
import Goyugu0100 from "../com/goyugu0100.tsx";
import Goyugu0200 from "../com/goyugu0200.tsx";
import Goyugu0300 from "../com/goyugu0300.tsx";
import Goyugu0400 from "../com/goyugu0400.tsx";
import Goyugu0500 from "../com/goyugu0500.tsx";
import Goyugu0600 from "../com/goyugu0600.tsx";
import { FaPaw, FaBuilding, FaHandHoldingHeart, FaTasks } from "react-icons/fa";
const NAVIGATION = [
  {
    segment: "organization",
    title: "단체소개",
    icon: <FaBuilding />,
    onClick: (navigate) => navigate("/organization"),
  },
  {
    segment: "donate",
    title: "후원안내",
    icon: <FaHandHoldingHeart />,
    onClick: (navigate) => navigate("/donate"),
  },

  {
    segment: "active",
    title: "주요활동",
    icon: <FaTasks />,
    onClick: (navigate) => navigate("/active"),
  },
  {
    segment: "dog",
    title: "함께하는 아이들",
    icon: <FaPaw />,
    onClick: (navigate) => navigate("/dog"),
  },
];

// 화면 색상 변경

function DemoPageContent({ pathname }) {
  let content;
  if (pathname === "/organization") {
    content = <Goyugu0100 />;
  } else if (pathname === "/donate") {
    content = <Goyugu0200 />;
  } else if (pathname === "/active") {
    content = <Goyugu0500 />;
  } else if (pathname === "/dog") {
    content = <Goyugu0400 />;
  } else {
    content = <Goyugu0600 />;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0", // 추가: 이미지 여백 제거
        padding: "0", // 추가: 이미지 여백 제거
        textAlign: "center",
      }}
    >
      {content}
    </Box>
  );
}
DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function AppProviderBasic(props) {
  const { window } = props;

  //const [selectedComponent, setSelectedComponent] = useState("");

  const [pathname, setPathname] = React.useState("/goyugu0600.tsx");
  const navigate = (path) => setPathname(path);

  const router = React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate,
    }),
    [pathname]
  );

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;
  const theme = createTheme({
    palette: {
      mode: "light", // 다크 모드를 강제로 라이트 모드로 설정
    },
  });

  return (
    <AppProvider
      branding={{
        title: "",
        logo: (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginLeft: "110px",
              alignItems: "center",
            }}
          >
            {/* 로고는 왼쪽에 두고 */}
            <img
              src={ibk_logo}
              alt="ibk_logo"
              sx={{ width: "200px", height: "auto", marginLeft: "20px" }}
            />

            {/* 버튼은 오른쪽에 두기 */}
            <Button
              onClick={() => changeLanguage("en")}
              sx={{
                fontSize: "0.6rem",
                color: "#b87a7a",
                fontWeight: "bold",
                marginLeft: "-60px",
                border: "1px solid #ccc",
                padding: "0px 1px",
                display: { xs: "flex", sm: "none" }, // 화면 크기에 따라 버튼 보이기
                borderRadius: "20px",
                marginRight: "80px", // 오른쪽 여백 추가
                height: "20px", // 버튼 높이를 설정
                width: "15px",
                transition: "background-color 0.3s ease, transform 0.2s ease", // 전환 효과
                "&:hover": {
                  backgroundColor: "#f0f0f0", // 호버 시 배경색
                },
                "&:active": {
                  transform: "scale(0.95)", // 클릭 시 약간 축소
                },
              }}
            >
              EN
            </Button>
          </Box>
        ),
      }}
      sx={{
        // 상단 바의 높이를 설정
        "& .MuiAppBar-root": {
          //height: "350px", // 상단 바의 높이를 350px로 설정 (원하는 값으로 조정)
          display: "flex", // 플렉스박스 사용
          alignItems: "center", // 수직으로 중앙 정렬
          justifyContent: "center", // 가로로 중앙 정렬
          backgroundColor: "#ffffff", // 백그라운드 색상 설정 (흰색 예시)
        },
        "& .MuiDrawer-root": {
          width: "300px", // 네비게이션 바의 너비 설정
          height: "350px",
        },
        // AppBar의 기본 툴바(달 모양 아이콘을 포함한) 숨기기
        "& .MuiToolbar-root": {
          display: "none", // 툴바 숨기기
        },
      }}
      navigation={NAVIGATION}
      router={router}
      theme={theme} // theme을 라이트 모드로 설정
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
      {/* {renderSelectedComponent()} */}
    </AppProvider>
  );
}

AppProviderBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default AppProviderBasic;
