import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // 링크를 클릭하기 위한 react-router-dom 사용
import { styled, keyframes } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import history from "./history.tsx"; // About 컴포넌트
import donate from "./donate.tsx"; // About 컴포넌트
import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../img/goyuLOGO2.png"; // 로고 이미지를 import로 가져오기
import logo2 from "../img/goyu.png"; // 로고 이미지를 import로 가져오기
import video from "../img/video.mp4"; // 로고 이미지를 import로 가져오기
import video3 from "../img/video3.mp4"; // 로고 이미지를 import로 가져오기
import video4 from "../img/video4.mp4"; // 로고 이미지를 import로 가져오기
import video5 from "../img/video5.mp4"; // 로고 이미지를 import로 가져오기
import logo3 from "../img/goyu111.jpg"; // 로고 이미지를 import로 가져오기
import logo4 from "../img/goyu112.jpg"; // 로고 이미지를 import로 가져오기
import gonji from "../img/gonji.jpg"; // 로고 이미지를 import로 가져오기
import byunk from "../img/byunk.jpg"; // 로고 이미지를 import로 가져오기
import hampyeng from "../img/hampyeng.jpg"; // 로고 이미지를 import로 가져오기
import seongju from "../img/seongju.jpg"; // 로고 이미지를 import로 가져오기
import sinwon from "../img/sinwon.jpg"; // 로고 이미지를 import로 가져오기
import hanam from "../img/hanam.jpg"; // 로고 이미지를 import로 가져오기
import intro from "../img/intro.png"; // 로고 이미지를 import로 가져오기
import back from "../img/back.png"; // 로고 이미지를 import로 가져오기
import Grid from "@mui/material/Grid";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import { GlobalStyles } from "@mui/material";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // i18n 라이브러리 사용 시

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  margin: "10px",
  padding: "15px 30px",
  color: "white",
  backgroundColor: "#ff6b6b",
  borderRadius: "5px",
  textDecoration: "none",
  transition: "background-color 0.3s",
  width: "100%", // 부모 요소의 너비에 맞추어 버튼을 100%로 설정
  maxWidth: "200px", // 너무 길어지지 않도록 최대 너비 설정
  textAlign: "center", // 텍스트 가운데 정렬
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  <Router>
    <Routes>
      <Route path={history} element={<history />} />
      <Route path="/donate" element={<donate />} />
    </Routes>
  </Router>;
  // 애니메이션 정의
  const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.95);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`;

  // 애니메이션이 적용된 이미지 스타일 컴포넌트
  const AnimatedImage = styled("img")({
    width: "100%",
    height: "200px",
    borderRadius: "16px",
    objectFit: "cover",
    opacity: 0,
    transform: "scale(0.95)",
    animation: `${fadeIn} 0.5s ease forwards`, // 애니메이션 적용
  });
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ko"); // 기본값은 한국어

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ko" ? "en" : "ko"));
  };

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  const [showHearts, setShowHearts] = useState(false);

  const handleNavigate = () => {
    // 절대경로로 /donate로 이동
    navigate("/donate");
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleMenuItemClick = (path) => {
    navigate(path); // 경로 변경
    handleMenuClose(); // 메뉴 닫기
  };
  const countries = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg", // 예시: 미국 국기
      name: "United States",
      adoptionInfo: "구조 견 40%는 미국으로 입양됩니다.",
    },
    {
      flag: "https://www.worldometers.info/img/flags/ca-flag.gif", // 예시: 캐나다 국기
      name: "Canada",
      adoptionInfo: "구조 견 40%는 캐나다로 입양됩니다.",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", // 예시: 영국 국기
      name: "Germany",
      adoptionInfo: "구조 견 15%는 독일로 입양됩니다.",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg", // 예시: 호주 국기
      name: "Eureop",
      adoptionInfo: "구조 견 5%는 유럽으로 입양됩니다.",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      {/* 상단 네비게이션 바 */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "90px", sm: "100px" },
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0 10px", sm: "0 0.5cm" },
          marginRight: "30px", // 왼쪽으로 이동
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {/* 좌측 로고 */}
        <a href="/">
          <img
            src={logo3}
            alt="Logo"
            style={{ height: "80%", maxHeight: "90px" }}
          />
        </a>

        {/* 데스크톱 메뉴 */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { sm: "20px" },
            marginLeft: "220px",
            marginRight: "auto",
            justifyContent: "center", // 항목을 중앙 정렬

            flexGrow: 1, // 가능한 너비를 채우도록 설정
          }}
        >
          <Link
            to={history} // history.tsx로 이동
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 10px",
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거 소개" : "About GoYouGo"}
          </Link>
          <Link
            to="/history.tsx" // history.tsx로 이동
            //href="#dogs"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거의 아이들" : "Our dog's"}
          </Link>
          <a
            href="#news"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거의 소식" : "Goyugu news"}
          </a>
          <a
            href="#with"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "함께하기" : "With Goyugu"}
          </a>
          <Button
            onClick={() => changeLanguage("en")}
            sx={{
              fontSize: "1rem",
              color: "#333",
              fontWeight: "bold",
              marginLeft: "10px",
              border: "1px solid #ccc",
              padding: "5px 15px",
              display: { xs: "flex", sm: "inline-flex" }, // 모바일과 웹 모두에서 표시
              borderRadius: "20px",
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            EN
          </Button>
        </Box>
        <Button
          onClick={() => changeLanguage("en")}
          sx={{
            fontSize: "1rem",
            color: "#b87a7a",
            fontWeight: "bold",
            border: "1px solid #ccc",
            padding: "0px 1px",
            display: { xs: "flex", sm: "none" },
            borderRadius: "20px",
            marginRight: "120px", // 왼쪽으로 이동
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
        {/* 모바일 메뉴 (햄버거 아이콘) */}

        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
              justifyContent: "flex-start", // 아이콘을 왼쪽으로 정렬
              width: "100%", // Box의 너비를 전체 화면으로 설정
              position: "absolute", // 아이콘 위치를 절대 위치로 설정
              left: "80vw", // 화면 왼쪽에서 80% 지점에 위치하도록 설정
              paddingLeft: { xs: "150px", md: "80px" }, // 작은 화면에서는 작은 여백, 더 큰 화면에서는 여백을 넓게
            },
          }}
        >
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* <MenuItem onClick={handleMenuClose} component={Link} to={history}>
              {language === "ko" ? "단체소개" : "About Goyugu"}
            </MenuItem> */}

            <MenuItem
              onClick={() => {
                handleMenuClose(); // 메뉴 닫기
                navigate("/history.tsx"); // 네비게이션
              }}
            >
              {language === "ko" ? "단체소개" : "About Goyugu"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#dogs">
              {language === "ko" ? "고유거 아이들" : "Our dog's"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#news">
              {language === "ko" ? "고유거 이야기" : "Goyugu news"}
            </MenuItem>
            <MenuItem onClick={handleNavigate}>
              {language === "ko" ? "함께하기" : "With Goyugu"}
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          marginTop: { xs: "90px", sm: "100px" }, // 네비게이션 바 높이에 맞춰서 아래로 내려오도록 설정
          justifyContent: "center",
          height: "100vh", // 화면 높이에 맞추기
          width: "100%", // 부모 Box의 너비에 맞추기 // 화면 너비에 맞추기
          border: "8px solid rgba(255, 245, 225, 0.8)", // 테두리 색상과 두께 설정
          //borderRadius: "16px", // 둥근 테두리 설정
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0, // 배경으로 설정
          }}
          sx={{
            display: { xs: "none", sm: "block" }, // 모바일에서는 숨기고, 작은 화면 이상에서만 보이도록 설정
          }}
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 모바일용 비디오 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0, // 배경으로 설정
          }}
          sx={{
            display: { xs: "block", sm: "none" }, // 모바일 화면에서는 보이고, 큰 화면에서는 숨기도록 설정
          }}
        >
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 오버레이 */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", // 전체 화면 너비에 맞추기
            height: "100%", // 전체 화면 높이에 맞추기
            backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
            zIndex: 0, // 오버레이가 비디오 위에 오도록 설정
          }}
        />

        {/* 텍스트 */}
        <Box
          className="text"
          sx={{
            position: "relative",
            color: "#333",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: {
                xs: "1.1rem", // mobile size (xs)
                sm: "2rem", // tablet size (sm)
                md: "2.5rem", // desktop size (md)
                opacity: 0, // 초기 상태에서 보이지 않도록 설정
                animation: "fadeIn 4s forwards", // 애니메이션 적
              },
            }}
          >
            {language === "ko"
              ? "유기견 한마리를 입양한다고"
              : "The world might not change"}
            <br />
            {language === "ko"
              ? "세상이 달라지진 않지만"
              : "if you adopt just one stray dog,"}
            <br />
            {language === "ko"
              ? "그 강아지에게는 온세상이 바뀌는 일입니다."
              : "but for that dog, their whole world changes."}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            {language === "ko"
              ? "고유거 애니밴드입니다."
              : "The world might not change"}
            <br />
            {language === "ko"
              ? "따스한 눈길과 발걸음으로"
              : "Please reach out to our dogs"}
            <br />
            {language === "ko"
              ? "우리 아이들에게 손을 내밀어 주세요"
              : "with a warm gaze and gentle steps."}
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
          // marginTop: "30px",  // 전체 화면에서의 marginTop 설정
          padding: "20px", // 내용이 화면에서 잘리거나 가까워지지 않도록 패딩 추가 (선택 사항)
        }}
      >
        {/* 내용 */}
      </div>
      <ThemeProvider theme={theme}>
        {/* 소개 섹션 */}
        <Box
          id="about"
          sx={{
            padding: { xs: "20px", sm: "40px" }, // 반응형 패딩 설정
            //marginTop: { xs: "30px", sm: "30px" },
            pl: { xs: "20px", sm: "110px" },
            backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
            position: "relative", // 세로 선을 추가하기 위한 relative 설정
            mx: "auto", // 모바일에서 양쪽 마진을 자동으로 설정하여 중앙 정렬
            textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 왼쪽 정렬
            maxWidth: { xs: "100%", sm: "calc(100% - 60px)" }, // 큰 화면에서는 여백 추가
          }}
        >
          {" "}
          <GlobalStyles
            styles={{
              "@keyframes fadeIn": {
                from: {
                  opacity: 0,
                },
                to: {
                  opacity: 1,
                },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute", // 가로선을 절대 위치로 설정
              //top: "30%", // 세로 중앙에 위치시키기 위한 top 설정 (전체 높이의 50% 위치에 배치)
              left: 0,
              width: "100%", // 화면 너비에 맞추기
              height: "2px", // 가로선의 두께
              background: " #FFFFFF", // 색상 그라데이션
              borderRadius: "2px", // 끝을 둥글게 설정
              zIndex: 1, // 다른 요소들보다 위에 표시되도록 설정
            }}
          />
          <br></br>
          <br></br>
          <Typography
            variant="h4"
            sx={{
              width: { xs: "100%", sm: "90%" },
              textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙, 웹에서는 왼쪽 정렬
              mb: 2,
              fontWeight: "bold",
              pl: { xs: 0, sm: "30px" },
              fontSize: { xs: "1.1rem", sm: "1.5rem" },
              mx: { xs: "auto", sm: 0 }, // 모바일에서는 중앙 정렬
              opacity: 0, // 초기 상태에서 보이지 않도록 설정
              animation: "fadeIn 4s forwards", // 애니메이션 적
            }}
          >
            유기동물과 함께하는 애니밴드는요
          </Typography>
          <Box
            sx={{
              // 가로 선은 위에 추가되었으므로, 여기서는 세로 선을 추가
              position: "absolute",
              top: 0,
              left: "8%", // 화면의 80% 위치에 세로 선을 배치
              width: "2px", // 세로 선의 두께
              height: "100%", // 세로 선의 높이
              backgroundColor: "#FFFFFF", // 세로 선의 색상 (하얀색)
              zIndex: 10, // 다른 요소 위로 오도록 설정
            }}
          />
          <Box
            sx={{
              // 가로 선은 위에 추가되었으므로, 여기서는 세로 선을 추가
              position: "absolute",
              top: 0,
              left: "92%", // 화면의 80% 위치에 세로 선을 배치
              width: "2px", // 세로 선의 두께
              height: "100%", // 세로 선의 높이
              backgroundColor: "#FFFFFF", // 세로 선의 색상 (하얀색)
              zIndex: 10, // 다른 요소 위로 오도록 설정
            }}
          />
          <Box sx={{ maxWidth: "1200px", mx: "auto", p: { xs: 2, sm: 4 } }}>
            <Grid container spacing={4}>
              {/* 왼쪽 텍스트 섹션 */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // 화면 크기에 따라 글씨 크기 조정
                    textAlign: { xs: "center", sm: "left" }, // 작은 화면에서는 중앙 정렬
                    lineHeight: { xs: "1.4", sm: "1.6" }, // 줄 간격 조정
                    opacity: 0, // 초기 상태에서 보이지 않도록 설정
                    animation: "fadeIn 4s forwards", // 애니메이션 적
                  }}
                >
                  경기도 사단법인 비영리 보호동물단체로서 <br />
                  동물보호의 전반적인 활동을 주로하고있습니다. <br />
                  <br />
                  유기동물의 구조와 치료, 입양 전까지의 보호 <br />
                  거리입양캠페인, 국내 및 해외입양, 사설보호소의 시설,
                  <br />
                  사료지원, 중성화 수술에 적극활동을 하고 있습니다 <br />
                  <br />
                  학생들의 캠페인과 보호소 봉사로 <br />
                  사회 봉사활동의 장을 열어주고 있습니다.
                  <br />
                  무수히 태어나지고, 그래서 버려지고 방치되는 수 많은 동물들이
                  존중없는 삶 속에서 살아가고 있습니다.
                  <br />
                  <br />
                  <br />
                  <Typography
                    variant="h5"
                    sx={{
                      width: { xs: "100%", sm: "90%" },
                      textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙, 웹에서는 왼쪽 정렬
                      mb: 2,
                      fontWeight: "bold",
                      pl: { xs: 0, sm: "0px" },
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                      mx: { xs: "auto", sm: 0 }, // 모바일에서는 중앙 정렬
                      opacity: 0, // 초기 상태에서 보이지 않도록 설정
                      animation: "fadeIn 4s forwards", // 애니메이션 적
                    }}
                  >
                    그래서 고유거는
                  </Typography>
                  <br />
                  무분별한 개인가정 번식과 <br />
                  불법운영 번식장, 동물을 사고파는 모든 행위, <br />
                  개 식용, 모피, 동물실험을 강력히 반대합니다. <br />
                  <br />
                  모든 동물은 인간과 같이 존중받아야 할 생명이고 <br />
                  자연과 함께 보호받아야하는 소중한 우리의 동반자임을 추구합니다{" "}
                  <br />
                  생명을 존중하고 책임을 지고자 하는 <br />
                  고유거와 함께해주세요. <br />
                  <br />
                  가족의 따듯한 손길을 기다리는 아이들이 있습니다. <br />
                  "사지말고 가족으로 입양" 해주시길 부탁드립니다. <br />
                  <br />
                </Typography>
              </Grid>

              {/* 오른쪽 로고 및 이미지 섹션 */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // marginTop: "10px", // 'margintop' 오타 수정
                  // marginLeft: "10px", // 오른쪽 정렬을 위한 설정
                  // marginRight: "10px", // 오른쪽 여백 추가 (필요에 따라 조정)
                }}
              >
                <a href="/">
                  <img
                    src={intro}
                    alt="Logo2"
                    style={{
                      width: "60%",
                      maxWidth: { xs: "40px", sm: "150px" }, // 작은 화면에서는 작은 로고 크기
                      marginBottom: "20px",
                      marginLeft: "40px",
                    }}
                  />
                </a>
              </Grid>
            </Grid>
            <Box
              sx={{
                position: "absolute", // 가로선을 절대 위치로 설정
                //top: "30%", // 세로 중앙에 위치시키기 위한 top 설정 (전체 높이의 50% 위치에 배치)
                left: 0,
                width: "100%", // 화면 너비에 맞추기
                height: "2px", // 가로선의 두께
                background: " #FFFFFF", // 색상 그라데이션
                borderRadius: "2px", // 끝을 둥글게 설정
                zIndex: 1, // 다른 요소들보다 위에 표시되도록 설정
              }}
            />
          </Box>
        </Box>
        <Box
          id="organization"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            marginTop: "30px",
            //pl: { xs: 0, sm: "30px" },
            mx: "30px", // 양쪽 마진을 20px로 설정
            pl: { xs: "20px", sm: "80px" },
          }}
        >
          {" "}
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              //ml: { xs: 0, sm: "10px", md: "20px" }, // 왼쪽 마진을 반응형으로 설정
              mr: { xs: 0, sm: "10px", md: "10px" }, // 왼쪽 마진을 반응형으로 설정
              mb: 2,
              mt: { xs: 2, sm: 3 }, // 상단 여백 설정 (모바일에서는 작게, 큰 화면에서는 조금 더 크게)
              fontWeight: "bold",
              //pl: { xs: 0, sm: "30px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
            }}
          >
            고유거 구조 스토리
          </Typography>
          <Box
            sx={{
              mb: 2,
              ml: { xs: "auto", sm: "0px", md: "0px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              mr: { xs: "auto", sm: "0px", md: "10px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              width: { xs: "70%", sm: "80%" }, // 모바일에서는 70%, 큰 화면에서는 90% 너비
              height: "2px", // 선의 두께
              background:
                "linear-gradient(90deg, #FFD1DC, #FFB6C1, #FFE4B5, #FFFACD, #E0FFFF, #B0E0E6, #D8BFD8)",
              borderRadius: "2px", // 선 끝을 둥글게
              mx: { xs: "auto", sm: "0" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 기본 정렬
            }}
          ></Box>
          <div
            style={{
              msOverflowStyle: "none", // Internet Explorer/Edge에서 스크롤바 숨기기
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              touchAction: "pan-x", // 수평 스크롤만 활성화
            }}
          >
            {/* 여러 개의 아이템을 나열 */}
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2024년 7월
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                함평번식장 구조 10마리
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={hampyeng} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "rgba(255, 245, 225, 0.6)", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2024년 8월
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                충북제천 번식장 구조 13마리
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={hampyeng} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "rgba(255, 245, 225, 0.6)", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2023년 8월
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                신원동 불법 번식장 구조
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={sinwon} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "rgba(255, 245, 225, 0.6)", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2017
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                곤지암 보호소
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={gonji} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "rgba(255, 245, 225, 0.6)", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2019
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                하남시 보호소
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={hanam} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "220px", // 아이템 크기 조정
                height: "300px", // 높이 조정
                marginRight: "20px",
                backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                borderRadius: "8px", // 모서리 둥글게
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                padding: "20px",
                boxSizing: "border-box",
                textAlign: "center", // 텍스트 가운데 정렬
                overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
              }}
            >
              {/* 연도 */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  textTransform: "uppercase", // 연도는 대문자로
                }}
              >
                2020-2021
              </div>

              {/* 소제목 */}
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#555",
                  marginBottom: "15px",
                  fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                }}
              >
                벽강보호소 80마리구조
              </div>

              {/* 이미지 */}
              <div
                style={{
                  height: "140px",
                  width: "100%",
                  overflow: "hidden", // 이미지가 박스를 넘지 않게
                  borderRadius: "5px",
                  marginBottom: "15px", // 이미지와 텍스트 간 간격
                }}
              >
                <img
                  src={byunk} // 임시 이미지
                  alt="아이템 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지하며 영역에 맞게 채우기
                  }}
                />
              </div>
            </div>
          </div>
        </Box>
        <Box
          id="dogs"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            marginTop: "30px",
            //pl: { xs: 0, sm: "30px" },
            mx: "30px", // 양쪽 마진을 20px로 설정
            pl: { xs: "30px", sm: "80px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              ml: { xs: 0, sm: "10px", md: "0px" }, // 왼쪽 마진을 반응형으로 설정
              mr: { xs: 0, sm: "10px", md: "00px" }, // 왼쪽 마진을 반응형으로 설정
              mb: 2,
              mt: { xs: 2, sm: 3 }, // 상단 여백 설정 (모바일에서는 작게, 큰 화면에서는 조금 더 크게)
              fontWeight: "bold",
              pl: { xs: 0, sm: "0px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
            }}
          >
            입양현황
          </Typography>
          <Box
            sx={{
              mb: 2,
              ml: { xs: "auto", sm: "40px", md: "50px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              mr: { xs: "auto", sm: "40px", md: "10px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              width: { xs: "70%", sm: "90%" }, // 모바일에서는 70%, 큰 화면에서는 90% 너비
              height: "2px", // 선의 두께
              background:
                "linear-gradient(90deg, #FFD1DC, #FFB6C1, #FFE4B5, #FFFACD, #E0FFFF, #B0E0E6, #D8BFD8)",
              borderRadius: "2px", // 선 끝을 둥글게
              mx: { xs: "auto", sm: "0" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 기본 정렬
            }}
          ></Box>
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "#fafafa",
              borderRadius: "10px",
              fontSize: { xs: "0.8rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: { xs: "1.0rem", sm: "1.5rem" },
              }}
            >
              해외 입양 50%
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {countries.map((country, index) => (
                <Grid item xs={6} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      padding: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                      fontSize: { xs: "0.8rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      style={{
                        width: "80px",
                        height: "auto",
                        marginBottom: "10px",
                        borderRadius: "5px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: { xs: "0.8rem", sm: "1.0rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
                      }}
                    >
                      {country.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.7rem" },
                        color: "#555",
                      }}
                    >
                      {country.adoptionInfo}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <br />
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: { xs: "1.0rem", sm: "1.5rem" },
              }}
            >
              국내 입양 50%
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontSize: { xs: "0.8rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: { xs: "0.8rem", sm: "1.0rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
                }}
              >
                매년거리입양캠페인팀 300여마리 & 애니밴드 입양센터팀 350여 마리
                입양진행
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.7rem" },
                  color: "#555",
                }}
              >
                고유거 입양센터에서는 품질높은 양육환경과 체계적 케어를 제공하기
                위해 <br />
                50마리 이내로 유지 및 관리하고 있으며, 국내에서 외면받는
                아이들의 경우
                <br />
                해외단체와의 연계를 통해 행복한 삶을 살아갈 수 있도록
                노력하고있습니다.
                <br />
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="dogs"
          sx={{
            padding: { xs: "10px", sm: "20px" },
            marginTop: "30px",
            pl: { xs: 0, sm: "30px" },
            mx: "30px", // 양쪽 마진을 20px로 설정
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              ml: { xs: 0, sm: "10px", md: "20px" }, // 왼쪽 마진을 반응형으로 설정
              mr: { xs: 0, sm: "10px", md: "10px" }, // 왼쪽 마진을 반응형으로 설정
              mb: 2,
              mt: { xs: 2, sm: 3 }, // 상단 여백 설정 (모바일에서는 작게, 큰 화면에서는 조금 더 크게)
              fontWeight: "bold",
              pl: { xs: 0, sm: "30px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
            }}
          >
            고유거의 아이들
          </Typography>

          <Box
            sx={{
              mb: 2,
              ml: { xs: "auto", sm: "40px", md: "50px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              mr: { xs: "auto", sm: "40px", md: "10px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
              width: { xs: "70%", sm: "90%" }, // 모바일에서는 70%, 큰 화면에서는 90% 너비
              height: "2px", // 선의 두께
              background:
                "linear-gradient(90deg, #FFD1DC, #FFB6C1, #FFE4B5, #FFFACD, #E0FFFF, #B0E0E6, #D8BFD8)",
              borderRadius: "2px", // 선 끝을 둥글게
              mx: { xs: "auto", sm: "0" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 기본 정렬
            }}
          ></Box>
          {/* 이미지들을 감싸는 그리드 컨테이너 */}
          <Box
            sx={{
              ml: { xs: 0, sm: "10px", md: "10px" }, // 왼쪽 마진을 반응형으로 설정
              mr: { xs: 0, sm: "20px", md: "40px" }, // 오른쪽 마진을 반응형으로 설정
              mt: { xs: 2, sm: 3 }, // 상단 여백 설정
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr 1fr", sm: "1fr 1fr 1fr" }, // 모든 화면 크기에서 3열
              pl: { xs: 0, sm: "30px" }, // 모바일에서는 패딩 없음, 큰 화면에서는 30px 패딩
              gap: { xs: "4px", sm: "10px", md: "10px" }, // 모바일에서 4px, 큰 화면에서는 더 넓은 간격
            }}
          >
            {/* 각 이미지 박스 */}
            {[image1, image2, image3, image4, image5, image6].map(
              (image, index) => (
                <Box
                  key={index}
                  sx={{
                    objectFit: "cover",
                    opacity: 0, // 초기 상태에서 투명하게 설정
                    transform: "scale(0.95)", // 초기 상태에서 약간 작게 설정
                    transition: "opacity 0.1s ease, transform 0.1s ease", // 부드러운 전환 효과
                    animation: "fadeIn 0.1s ease forwards", // 애니메이션 효과 추가
                    "@keyframes fadeIn": {
                      "0%": { opacity: 0, transform: "scale(0.95)" },
                      "100%": { opacity: 1, transform: "scale(1)" },
                    },

                    padding: { xs: "2px", sm: "10px" }, // 모바일에서 패딩을 줄여 이미지가 더 크게 보이도록 설정
                    position: "relative",
                  }}
                >
                  <AnimatedImage
                    src={image}
                    alt={`Dog ${index + 1}`}
                    style={{
                      objectFit: "cover",
                      opacity: 0, // 초기 상태에서 투명하게 설정
                      transform: "scale(0.95)", // 초기 상태에서 약간 작게 설정
                      transition: "opacity 0.2s ease, transform 0.2s ease", // 부드러운 전환 효과
                      animation: "fadeIn 0.2s ease forwards", // 애니메이션 효과 추가
                      "@keyframes fadeIn": {
                        "0%": { opacity: 0, transform: "scale(0.95)" },
                        "100%": { opacity: 2, transform: "scale(1)" },
                      },
                      width: "100%",
                      height: "200px", // 일정한 높이로 설정
                      borderRadius: "16px",
                      objectFit: "cover", // 이미지가 박스 크기에 맞춰지도록 설정
                    }}
                  />
                </Box>
              )
            )}
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: "block", // block으로 설정하여 중앙 정렬할 수 있게
            margin: "0 auto", // 수평 중앙 정렬
            fontSize: { xs: "0.9rem", sm: "1rem" },
            padding: { xs: "6px 12px", sm: "8px 16px" },
            borderRadius: "5px",
            backgroundColor: "primary.light", // 밝은 색상 설정 (primary.light 사용)
            "&:hover": {
              backgroundColor: "primary.main", // hover 시 기본 색상으로 변경
            },
            boxShadow: 2, // 약간의 그림자 추가 (선택 사항)
          }}
        >
          더보기
        </Button>
      </ThemeProvider>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "20px", // 상단 여백
        }}
      ></Box>

      <Box
        id="news"
        sx={{
          padding: { xs: "20px", sm: "40px" },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            mb: 2,
            fontWeight: "bold",
            pl: { xs: 0, sm: "60px" },
            fontSize: { xs: "1.2rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
          }}
        >
          애니밴드의 소식을 전해요
        </Typography>
        <Box
          sx={{
            mb: 2,
            ml: { xs: "auto", sm: "40px", md: "50px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
            mr: { xs: "auto", sm: "40px", md: "10px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
            width: { xs: "70%", sm: "90%" }, // 모바일에서는 70%, 큰 화면에서는 90% 너비
            height: "2px", // 선의 두께
            background:
              "linear-gradient(90deg, #FFD1DC, #FFB6C1, #FFE4B5, #FFFACD, #E0FFFF, #B0E0E6, #D8BFD8)",
            borderRadius: "2px", // 선 끝을 둥글게
            mx: { xs: "auto", sm: "0" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 기본 정렬
          }}
        ></Box>
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* 첫 번째 서비스 박스 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "300px" },
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.instagram.com/p/DCIqU-CzMRS/embed"
              width="100%"
              height="405"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </Box>

          {/* 두 번째 서비스 박스 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "300px" },
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.instagram.com/p/DB_f7yxzK6M/embed"
              width="100%"
              height="405"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </Box>

          {/* 세 번째 서비스 박스 */}
          <Box
            sx={{
              width: { xs: "100%", sm: "300px" },
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.instagram.com/p/DB1Fi9lTiLA/embed"
              width="100%"
              height="405"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
            ></iframe>
          </Box>
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        id="with"
        sx={{
          padding: { xs: "20px", sm: "40px" },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "20px" }}>
          <img
            src={logo}
            alt="Cute Dog"
            style={{ width: "300px", borderRadius: "10px" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.1em", sm: "1.7em" }, // 모바일에서는 1.3em, 큰 화면에서는 1.7em
              color: "#333",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            후원은 마음으로 하는 입양입니다. <br />
            아이들의 세상을 밝혀줄 발걸음에 동참해주세요.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95em", sm: "1.2em" }, // 모바일에서는 1em, 큰 화면에서는 1.2em
              color: "#555",
            }}
          >
            우리에게 찾아온 이 아이들의
            <br />
            새로운 희망이 되어주세요.
          </Typography>

          {/* Buttons Section */}
          <div style={{ marginTop: "30px" }}>
            <a
              href="https://www.instagram.com/aniband_gouku/"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              정기후원 <br />
              (Monthly donation)
            </a>
            <a
              href="https://band.us/band/73964201/post/10"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              봉사신청
              <br /> (Support application)
            </a>
            <a
              href="https://www.instagram.com/aniband_gouku/"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              입양상담하기 <br />
              (Adoption application)
            </a>
          </div>
        </div>
      </Box>
      <Box
        id="news"
        sx={{
          padding: { xs: "20px", sm: "40px" },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            mb: 2,
            fontWeight: "bold",
            pl: { xs: 0, sm: "60px" },
            fontSize: { xs: "1.2rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
          }}
        >
          고유거와 함께 해주세요
        </Typography>
        <Box
          sx={{
            mb: 2,
            ml: { xs: "auto", sm: "40px", md: "50px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
            mr: { xs: "auto", sm: "40px", md: "10px" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 마진
            width: { xs: "70%", sm: "100%" }, // 모바일에서는 70%, 큰 화면에서는 90% 너비
            height: "2px", // 선의 두께
            background:
              "linear-gradient(90deg, #FFD1DC, #FFB6C1, #FFE4B5, #FFFACD, #E0FFFF, #B0E0E6, #D8BFD8)",
            borderRadius: "2px", // 선 끝을 둥글게
            mx: { xs: "auto", sm: "0" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 기본 정렬
          }}
        ></Box>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "100px", // 상단 마진
              maxWidth: "90%", // 화면 너비의 80%로 제한
              margin: "0 auto", // 가로 중앙 정렬
              padding: "0 5px", // 좌우 패딩
              gap: "1px", // 카드 사이의 간격을 0으로 설정
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image1}
                alt="Image 1"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                임시보호하기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                <br />
                사람의 손길이 필요한 아이들이 <br />
                가족을 찾을 때까지 함께 해주세요.
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                  marginBottom: "20px", // 카드 하단 마진
                }}
              >
                후원하기
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image2}
                alt="Image 2"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                이동봉사하기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                국내와 해외 이동봉사가 절실합니다. 유기동물들이 가족을 찾아갈 수
                있도록 도와주세요
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                }}
              >
                이동봉사 신청하기
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image3}
                alt="Image 3"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                봉사하기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                애니밴드는 순수봉사자의 헌신으로 이루어지는 곳입니다.
                거리입양캠페인,보호소 봉사 등으로 함께해주세요
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                }}
              >
                보호소 봉사 신청하기
              </Button>
            </Box>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "100px", // 상단 마진
              maxWidth: "90%", // 화면 너비의 80%로 제한
              margin: "0 auto", // 가로 중앙 정렬
              padding: "0 5px", // 좌우 패딩
              gap: "1px", // 카드 사이의 간격을 0으로 설정
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image1}
                alt="Image 1"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                유기견 실상 알리기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                <br />
                주변에 생명존중의 가치와 <br />
                유기동물의 실상을 알리고 우리아이들의 이야기를 해주세요.
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                  marginBottom: "20px", // 카드 하단 마진
                }}
              >
                공유하기
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image2}
                alt="Image 2"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                입양하기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                유기견 한마리르 입양한다고 세상이 달라지진않지만 강아지에게는
                온세상이 바뀝니다.
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                }}
              >
                이동봉사 신청하기
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "25%" }, // 모바일에서는 전체 너비, 작은 화면에서는 3개씩
                backgroundColor: "#F1F8FF",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // 여유 공간을 균등하게 분배
                height: "100%", // 높이를 고정하여 모든 박스가 동일하게 보이도록 설정
              }}
            >
              <img
                src={image3}
                alt="Image 3"
                style={{
                  width: "80%", // 이미지 너비를 조정하여 가운데에 잘 맞도록 설정
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                고유거 회원되기
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                고유거의 회원이 되셔서 동물보호활동에 적극 참여해주세요
              </Typography>
              <Button
                //component={Link}
                to="#"
                variant="contained"
                sx={{
                  backgroundColor: "#ff6b6b",
                  color: "#fff",
                  padding: "8px 16px",
                  textDecoration: "none",
                }}
              >
                고유거 가입하기
              </Button>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
      {/* 푸터 섹션 */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          color: "#BDBDBD",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // 모바일에서는 세로 정렬, 큰 화면에서는 가로 정렬
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" },
          boxSizing: "border-box",
          gap: { xs: 2, sm: 0 }, // 모바일에서 요소 간 간격 추가
        }}
      >
        {/* Footer 텍스트 */}
        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            padding: { xs: "0 5%", sm: "0 20px" }, // 모바일에서 좌우 패딩을 줄임
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", marginBottom: "5px" }}
          >
            (사) 경기도 고양시 덕양구 토당로 52 (토당동) 능곡역프라자 103호 (우)
            90508
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", marginBottom: "5px" }}
          >
            MAIL: rniduwl@naver.com <br />
            TEL: 070-4793-2020
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", marginBottom: "5px" }}
          >
            사업자등록번호: 785-82-00048
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
            COPYRIGHT 2024 사단법인 고유거 ALL RIGHTS RESERVED
          </Typography>
        </Box>

        {/* 소셜 미디어 아이콘 */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            width: { xs: "100%", sm: "auto" },
            boxSizing: "border-box",
            paddingTop: { xs: "10px", sm: 0 }, // 모바일에서 상단 여백 추가
          }}
        >
          <Instagram sx={{ fontSize: "24px", cursor: "pointer" }} />
          <YouTube sx={{ fontSize: "24px", cursor: "pointer" }} />
          <Facebook sx={{ fontSize: "24px", cursor: "pointer" }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
