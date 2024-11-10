import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // 링크를 클릭하기 위한 react-router-dom 사용
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
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
  const [showHearts, setShowHearts] = useState(false);

  const handleMouseEnter = () => {
    setShowHearts(true);
  };

  const handleMouseLeave = () => {
    setShowHearts(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
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
          padding: { xs: "0 20px", sm: "0 1.3cm" },
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {/* 좌측 로고 */}
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "80%", maxHeight: "90px" }}
          />
        </a>

        {/* 데스크톱 메뉴 */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { sm: "20px" },
            marginLeft: "300px",
            marginRight: "auto",
          }}
        >
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
            }}
          >
            고유거 소개
          </a>
          <a
            href="#dogs"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
            }}
          >
            고유거의 아이들
          </a>
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
            }}
          >
            고유거 소식
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
            }}
          >
            함께하기
          </a>
        </Box>

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
            <MenuItem onClick={handleMenuClose} component="a" href="#about">
              고유거 소개
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#dogs">
              고유거의 아이들
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#news">
              고유거 소식
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#with">
              함께하기
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundSize: { xs: "contain", sm: "contain" }, // 모바일에서는 cover, 웹에서는 contain으로 설정

          backgroundRepeat: "no-repeat", // 이미지가 반복되지 않도록 설정
          position: "relative", // Overlay와 Typography를 겹치게 하기 위해 설정
          height: { xs: "20vh", sm: "100vh" }, // 화면 높이를 기준으로 설정
          //height: { xs: "800px", sm: "500px" },
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#141212",
          textAlign: "center",
          padding: { xs: "20px", sm: "0" },
        }}
      >
        {/* 투명한 배경색 Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 245, 225, 0.6)", // 반투명 베이지색 오버레이
            zIndex: 1,
          }}
        />

        {/* 텍스트 내용 */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2, // 오버레이 위에 표시되도록 설정
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.5rem" },
              mt: { xs: 1, sm: 2 },
              lineHeight: { xs: "1.3", sm: "1.6" },
              px: { xs: "10px", sm: "0px" },
            }}
          >
            특별한 강아지들의 이야기가 담긴 곳, <br />새 가족들의 따스한 발길이
            필요한 곳,
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.2rem", sm: "2rem" },
              fontWeight: "bold",
              mt: { xs: 1, sm: "2cm" },
              lineHeight: { xs: "1.4", sm: "1.6" },
            }}
          >
            고양시 애니밴드입니다. <br />
            따스한 눈길과 발걸음으로 <br />
            우리 아이들에게 손을 내밀어 주세요
          </Typography>
        </Box>
      </Box>

      <ThemeProvider theme={theme}>
        {/* 소개 섹션 */}

        <Box
          id="about"
          sx={{
            padding: { xs: "20px", sm: "40px" }, // 반응형 패딩 설정
            marginTop: { xs: "30px", sm: "30px" },
            pl: { xs: 0, sm: "75px" },
            mx: "auto", // 모바일에서 양쪽 마진을 자동으로 설정하여 중앙 정렬
            textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 왼쪽 정렬
            maxWidth: { xs: "100%", sm: "calc(100% - 60px)" }, // 큰 화면에서는 여백 추가
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: { xs: "100%", sm: "90%" },
              textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙, 웹에서는 왼쪽 정렬
              mb: 2,
              fontWeight: "bold",
              pl: { xs: 0, sm: "40px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              mx: { xs: "auto", sm: 0 }, // 모바일에서는 중앙 정렬
            }}
          >
            고유거 소개
          </Typography>
          <Box sx={{ maxWidth: "1200px", mx: "auto", p: { xs: 2, sm: 4 } }}>
            <Grid container spacing={4}>
              {/* 왼쪽 텍스트 섹션 */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "1rem", md: "1.2rem" }, // 화면 크기에 따라 글씨 크기 조정
                    textAlign: { xs: "center", sm: "left" }, // 작은 화면에서는 중앙 정렬
                    lineHeight: { xs: "1.4", sm: "1.6" }, // 줄 간격 조정
                  }}
                >
                  사단법인 고유거는 순수 자원봉사자들이 운영하는
                  <br />
                  동물 보호단체입니다. <br />
                  안락사 위기의 유기견과 학대, 방치되는 동물들을 구조하여 <br />
                  보호, 치료 및 관리에 힘을 쓰고 있습니다.
                  <br />
                  <br />
                  뿐만 아니라 해외단체와 연계하여 <br />
                  국내에서 외면과 식용으로 취급받는 믹스견, 토종견에게
                  <br />
                  제 2의 견생을 마련해주기 위해 적극적으로 <br />
                  노력하고 있습니다.
                  <br />
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
                }}
              >
                <a href="/">
                  <img
                    src={logo2}
                    alt="Logo"
                    style={{
                      width: "80%",
                      maxWidth: { xs: "70px", sm: "200px" }, // 작은 화면에서는 작은 로고 크기
                      marginBottom: "20px",
                    }}
                  />
                </a>
              </Grid>
            </Grid>
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
              mr: { xs: 0, sm: "20px", md: "40px" }, // 왼쪽 마진을 반응형으로 설정
              mt: { xs: 2, sm: 3 }, // 상단 여백 설정 (모바일에서는 작게, 큰 화면에서는 조금 더 크게)
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
              pl: { xs: 0, sm: "30px" }, // 모바일에서는 2열, 큰 화면에서는 3열
              gap: { xs: "2px", sm: "10px", md: "10px" },
            }}
          >
            {/* 각 이미지 박스 */}
            {[image1, image2, image3, image4, image5, image6].map(
              (image, index) => (
                <Box
                  key={index}
                  sx={{ padding: "10px" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={image}
                    alt={`Dog ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "250px", // 일정한 높이로 설정
                      borderRadius: "16px",
                      objectFit: "cover",
                    }}
                  />
                  {showHearts && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        pointerEvents: "none", // 하트가 이미지 위에 클릭을 방해하지 않도록 설정
                        overflow: "hidden",
                      }}
                    >
                      {/* 하트 가루 애니메이션 */}
                      <div className="heart" />
                      <div className="heart" />
                      <div className="heart" />
                    </Box>
                  )}
                </Box>
              )
            )}
          </Box>
        </Box>
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
              height="440"
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
              height="440"
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
              height="440"
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
              fontSize: { xs: "1.21em", sm: "1.7em" }, // 모바일에서는 1.3em, 큰 화면에서는 1.7em
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
            우리에게 찾아온 이 아이들의 새로운 희망이 되어주세요.
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
      {/* <ThemeProvider theme={theme}> */}
      {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "100px", // 상단 마진
            padding: "0 10px", // 좌우 패딩
          }}
        >
          {/* 첫 번째 카드 */}
      {/* <Box
            sx={{
              width: { xs: "100%", sm: "30%" }, // 모바일에서는 한 줄에 하나씩, 작은 화면에서는 3개씩
              backgroundColor: "#F1F8FF", // 배경색
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과
              marginBottom: "20px", // 카드 하단 마진
            }}
          > */}
      {/* <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              후원은 마음으로 하는 입양입니다. <br />
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
            > */}
      {/* 후원하기
            </Button>
            <img
              src={image1}
              alt="Image 1"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
          </Box> */}

      {/* 두 번째 카드 */}
      {/* <Box
            sx={{
              width: { xs: "100%", sm: "30%" }, // 모바일에서는 한 줄에 하나씩, 작은 화면에서는 3개씩
              backgroundColor: "#F1F8FF", // 배경색
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과
              marginBottom: "20px", // 카드 하단 마진
            }}
          >
            <img
              src={image2}
              alt="Image 2"
              style={{
                width: "100%",
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
              강아지에게 반려자는 전부입니다. 아이들의 따듯한 빛이 되어주세요.
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
              입양신청하기
            </Button>
          </Box> */}

      {/* 세 번째 카드 */}
      {/* <Box
            sx={{
              width: { xs: "100%", sm: "30%" }, // 모바일에서는 한 줄에 하나씩, 작은 화면에서는 3개씩
              backgroundColor: "#F1F8FF", // 배경색
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과
              marginBottom: "20px", // 카드 하단 마진
            }}
          >
            <img
              src={image3}
              alt="Image 3"
              style={{
                width: "100%",
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
              애니밴드는 순수봉사자의 헌신으로 이루어지는 곳입니다. 함께해주세요
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
            > */}
      {/* 비행 · 상시 · 이동봉사
            </Button>
          </Box>
        </Box> */}
      {/* </ThemeProvider> */}

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
            TEL: 031-970-9204
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
