import * as React from "react";
import { Grid, GlobalStyles, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PushPinIcon from "@mui/icons-material/PushPin";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import back from "../img/back.png";
import intro from "../img/intro.png";
import organiz from "../img/orgaz.png";
import img2013 from "../img/img2013.jpg";
import img2017 from "../img/img2017.jpg";
import img2016 from "../img/img2016.jpg";
import img2018 from "../img/img2018.jpg";
import img2019 from "../img/img2019.jpg";
import img2021 from "../img/img2021.jpg";
import img2022 from "../img/img2022.jpg";
import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
const theme = createTheme({
  // You can customize your theme here
});

const Goyugu0100: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const years = [
    {
      year: 2011,
      image: require("../img/img2013.jpg"),
      text: "고양시 거리입양 캠페인 자원봉사단체운영",
    },
    {
      year: 2013,
      image: require("../img/img2013.jpg"),
      text: "애니밴드 입양센터 개소",
    },
    {
      year: 2015,
      image: require("../img/img2013.jpg"),
      text: "사단법인 등록 및 지정기부 단체등록",
    },
    {
      year: 2016,
      image: require("../img/img2016.jpg"),
      text: "안산 펫 페스티벌",
    },
    {
      year: 2017,
      image: require("../img/img2017.jpg"),
      text: "고유거 애니밴드의 진솔한 바자회",
    },
    {
      year: 2018,
      image: require("../img/img2018.jpg"),
      text: "해피가 돌아왔다 tv출연(예티), 곤지암보호소 19마리 구조",
    },
    {
      year: 2019,
      image: require("../img/img2019.jpg"),
      text: "입양센터 이전, 온세상이 학교다 출연, 하남시 번식장 26마리 구조",
    },
    {
      year: 2021,
      image: require("../img/img2021.jpg"),
      text: "댕댕런 사료 후원",
    },
    {
      year: 2020,
      image: require("../img/byunk.jpg"),
      text: "벽강보호소 80마리 구조",
    },
    {
      year: 2022,
      image: require("../img/img2022.jpg"),
      text: "아이비 유치원, 아이비키즈 어린이집 교육",
    },
  ];

  const countries = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg", // 예시: 미국 국기
      name: "United States",
      adoptionInfo: (
        <>
          구조견의 40%는
          <br />
          미국으로 입양됩니다.
        </>
      ),
    },
    {
      flag: "https://www.worldometers.info/img/flags/ca-flag.gif", // 예시: 캐나다 국기
      name: "Canada",
      adoptionInfo: (
        <>
          구조견의 40%는
          <br />
          캐나다로 입양됩니다.
        </>
      ),
      //doptionInfo: "구조 견 40%는 캐나다로 입양됩니다.",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", // 예시: 영국 국기
      name: "Germany",
      //adoptionInfo: "구조 견 15%는 독일로 입양됩니다.",
      adoptionInfo: (
        <>
          구조견의 15%는
          <br />
          독일로 입양됩니다.
        </>
      ),
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg", // 예시: 호주 국기
      name: "Eureop",
      adoptionInfo: (
        <>
          구조견의 5%는
          <br />
          유럽으로 입양됩니다.
        </>
      ),
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "800px", // 부모 요소를 벗어나지 않도록 설정
          maxHeight: "180px", // 부모 요소를 벗어나지 않도록 설정
          overflow: "hidden", // 넘치는 부분 제거
          marginTop: "-5px",
          margin: 0,
          padding: 0, // 공백 제거
          display: "flex", // 중앙 정렬을 위해 flex 사용
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover", // 부모 요소를 꽉 채움 (공백 제거)
        }}
      >
        <img
          src={back}
          alt="back"
          style={{
            maxWidth: "100%", // 부모 요소를 벗어나지 않도록 설정
            maxHeight: "100%", // 부모 요소를 벗어나지 않도록 설정
            objectFit: "cover", // 비율 유지
            marginTop: "-5px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 0, // padding을 0으로 설정하여 불필요한 여백 제거
          margin: 0, // 불필요한 여백 제거
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            display: "flex", // Flex로 변경하여 탭들이 균등하게 배치되도록 설정
            justifyContent: "flex-start", // 탭들을 왼쪽에 정렬
            borderBottom: 1,
            borderColor: "divider",
            padding: 0, // 양옆 패딩 제거
            width: "100%", // 부모 요소의 너비를 꽉 채우도록 설정
            boxSizing: "border-box", // 부모 요소의 padding이나 border를 포함한 너비 계산
            objectFit: "cover", // 비율 유지
          }}
        >
          <Tab label="단체소개" sx={{ padding: 0, flex: 1 }} />
          <Tab label="조직도" sx={{ padding: 0, flex: 1 }} />
          <Tab label="단체연혁" sx={{ padding: 0, flex: 1 }} />
          <Tab label="입양현황" sx={{ padding: 0, flex: 1 }} />
        </Tabs>

        {/* 탭 콘텐츠 섹션 */}
        {activeTab === 0 && (
          <Box sx={{ padding: 2 }}>
            {/* 소개 섹션 */}
            <Box
              id="about"
              sx={{
                padding: 0, // padding 제거
                margin: 0, // margin 제거
                width: "100%", // 부모 요소의 너비를 꽉 채움
                height: "100%", // 부모 요소의 높이를 꽉 채움
                boxSizing: "border-box", // padding이나 border를 포함한 너비 계산
                //padding: { xs: "20px", sm: "40px" }, // 반응형 패딩 설정
                //pl: { xs: "20px", sm: "110px" },
                backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
                position: "relative", // 세로 선을 추가하기 위한 relative 설정
                mx: "auto", // 모바일에서 양쪽 마진을 자동으로 설정하여 중앙 정렬
                textAlign: { xs: "center", sm: "left" }, // 모바일에서는 중앙 정렬, 큰 화면에서는 왼쪽 정렬
                maxWidth: { xs: "100%", sm: "calc(100% - 60px)" }, // 큰 화면에서는 여백 추가
              }}
            >
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
              {/* <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: " #FFFFFF",
                  borderRadius: "2px",
                  zIndex: 1,
                }}
              /> */}
              <br />
              <br />
              <Typography
                variant="h4"
                sx={{
                  width: { xs: "100%", sm: "90%" },
                  textAlign: { xs: "center", sm: "left" },
                  mb: 2,
                  fontWeight: "bold",
                  pl: { xs: 0, sm: "30px" },
                  fontSize: { xs: "1.1rem", sm: "1.5rem" },
                  mx: { xs: "auto", sm: 0 },
                  opacity: 0,
                  animation: "fadeIn 4s forwards",
                }}
              >
                유기동물과 함께하는 고유거는
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "8%",
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#FEFAE0",
                  zIndex: 10,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "92%",
                  width: "2px",
                  height: "100%",
                  backgroundColor: "#FEFAE0",
                  zIndex: 10,
                }}
              />
              <Box sx={{ maxWidth: "1200px", mx: "auto", p: { xs: 2, sm: 4 } }}>
                <Grid container spacing={4}>
                  {/* 왼쪽 텍스트 섹션 */}
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                        textAlign: { xs: "center", sm: "left" },
                        lineHeight: { xs: "1.4", sm: "1.6" },
                        opacity: 0,
                        animation: "fadeIn 4s forwards",
                      }}
                    >
                      경기도 사단법인 비영리 보호동물단체로서 <br />
                      동물보호의 전반적인 활동을 주로하고있습니다. <br />
                      <br />
                      유기동물의 구조와 치료, 입양 전까지의 보호 <br />
                      거리입양캠페인, 국내 및 해외입양,
                      <br />
                      사설보호소의 시설,사료지원, 중성화 수술에 <br />
                      적극활동을 하고 있습니다 <br />
                      <br />
                      학생들의 캠페인과 보호소 봉사로 <br />
                      사회 봉사활동의 장을 열어주고 있습니다.
                      <br />
                      무수히 태어나지고, 그래서 버려지고 방치되는 수 많은
                      <br />
                      동물들이 존중없는 삶 속에서 살아가고 있습니다.
                      <br />
                      <br />
                      <br />
                      <Typography
                        variant="h5"
                        sx={{
                          width: { xs: "100%", sm: "90%" },
                          textAlign: { xs: "center", sm: "left" },
                          mb: 2,
                          fontWeight: "bold",
                          pl: { xs: 0, sm: "0px" },
                          fontSize: { xs: "1.1rem", sm: "1.5rem" },
                          mx: { xs: "auto", sm: 0 },
                          opacity: 0,
                          animation: "fadeIn 4s forwards",
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
                      자연과 함께 보호받아야하는 <br />
                      소중한 우리의 동반자임을 추구합니다 <br />
                      생명을 존중하고 책임을 지고자 하는 <br />
                      고유거와 함께해주세요. <br />
                      <br />
                      가족의 따듯한 손길을 기다리는 아이들을 <br />
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
                        src={intro}
                        alt="Logo2"
                        style={{
                          width: "60%",
                          maxWidth: { xs: "40px", sm: "150px" },
                          marginBottom: "20px",
                          marginLeft: "40px",
                        }}
                      />
                    </a>
                  </Grid>
                </Grid>
                {/* <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: " #FFFFFF",
                    borderRadius: "2px",
                    zIndex: 1,
                  }}
                /> */}
              </Box>
            </Box>
          </Box>
        )}
        {activeTab === 1 && (
          <div>
            <Box sx={{ padding: 2 }}>
              <Box sx={{ padding: 2 }}>
                <Box
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={organiz}
                    alt="organiz"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    margin: "0 10px",
                    marginTop: "15px",
                    marginLeft: "-2px",
                    width: "100%",
                    borderColor: "#D3D3D3", // 찐하지 않은 회색 선 색상
                    borderWidth: "0.5px", // 선의 두께 조정
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    paddingTop: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px",
                      backgroundColor: "#FEFAE0",
                      marginBottom: "3px",
                    }}
                  >
                    <Typography
                      sx={{
                        flex: 1.2,
                        fontSize: { xs: "0.8rem", sm: "1.5rem" },
                      }}
                    >
                      애니밴드팀
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "0 10px" }}
                    />
                    <Typography
                      variant="body2"
                      align="left"
                      sx={{ flex: 3, fontSize: "0.7rem" }}
                    >
                      유기견들의 구조 활동 및 입양에 힘쓰고 있습니다. 행복한
                      삶을 지원하기 위해 노력합니다.
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px",
                      backgroundColor: "#FEFAE0",
                      marginBottom: "3px",
                    }}
                  >
                    <Typography
                      sx={{
                        flex: 1.2,
                        fontSize: { xs: "0.8rem", sm: "1.5rem" },
                      }}
                    >
                      거리캠페인팀
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "0 10px" }}
                    />
                    <Typography
                      variant="body2"
                      align="left"
                      sx={{ flex: 3, fontSize: "0.7rem" }}
                    >
                      거리에 나가 시민들에게 유기견 입양 캠페인을 진행합니다. 더
                      나은 유기견문화를 확장해갈 수 있도록 노력합니다.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px",
                      backgroundColor: "#FEFAE0",
                      marginBottom: "3px",
                    }}
                  >
                    <Typography
                      sx={{
                        flex: 1.2,
                        fontSize: { xs: "0.8rem", sm: "1.5rem" },
                      }}
                    >
                      실버타운팀
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "0 10px" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ flex: 3, fontSize: "0.7rem" }}
                      align="left"
                    >
                      현재 활동은 하지않으나 모금운동을 진행중입니다.
                      실버타운에서 강아지와 사람이 함께 늙어가는 것을 목표로
                      하고있습니다.
                    </Typography>
                  </Box>

                  {/* 다른 팀들도 동일한 방식으로 작성 */}
                </Box>
              </Box>
            </Box>
          </div>
        )}
        {activeTab === 2 && (
          <Box sx={{ padding: 2 }}>
            {/* Right side: Accordion for each year */}
            <Box
              sx={{
                position: "relative",
                margintTop: "0px",
                paddingLeft: "20px",
              }}
            >
              <Box sx={{ flexGrow: 1, margintTop: "0px" }}>
                {years.map((year) => (
                  <Accordion
                    key={year.year}
                    sx={{
                      border: "none", // Accordion 테두리 제거
                      boxShadow: "none", // Accordion 그림자 제거
                      padding: 0,
                    }}
                    defaultExpanded
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel-${year.year}-content`}
                      id={`panel-${year.year}-header`}
                      sx={{
                        border: "none",

                        boxShadow: "none",
                        padding: 0,
                        marginTop: "7px",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        height: "auto",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                          //alignItems: "flex-end", // Align to the bottom
                          bottom: "-21px", // Align it below the summary box
                        }}
                      >
                        {/* 압정 아이콘 */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "8px", // 압정 위치 조정
                            left: "-9px", // 압정 위치 조정
                          }}
                        >
                          <PushPinIcon
                            sx={{ fontSize: 20, color: "#B0B0B0" }}
                          />
                        </Box>
                        {/* 세로선 */}
                        <Box
                          sx={{
                            width: "2px",
                            backgroundColor: "#B0B0B0",
                            height: "70%", // 세로선 길이를 70%로 설정
                            position: "absolute",
                            bottom: 0, // 아래쪽에 위치하도록 설정
                            left: "0px",
                          }}
                        />
                        {/* 내용 */}
                        <Box sx={{ marginLeft: "20px", textAlign: "left" }}>
                          <Typography variant="h6" sx={{ fontSize: "1.4rem" }}>
                            {year.year}
                          </Typography>
                          <Box
                            sx={{
                              width: "3cm",
                              height: "1px",
                              backgroundColor: "#B0B0B0",
                              marginY: "8px",
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{ fontSize: "0.7rem" }}
                          >
                            {year.text}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ position: "relative", padding: 0 }}>
                      {/* Details 내부의 세로선 */}
                      <Box
                        sx={{
                          width: "2px",
                          backgroundColor: "#B0B0B0",
                          height: "100%",
                          position: "absolute",
                          left: "0px",
                          border: "none",

                          boxShadow: "none",
                        }}
                      />
                      <Box sx={{ marginLeft: "-100px" }}>
                        <img
                          src={year.image}
                          alt={`Image for ${year.year}`}
                          style={{
                            width: "200px",
                            height: "auto",
                            marginBottom: "10px",
                            marginTop: "20px",
                          }}
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Box>
        )}
        {activeTab === 3 && (
          <Box sx={{ padding: 2 }}>
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
                        fontSize: { xs: "0.7rem", sm: "1.5rem" }, // 모바일에서 작은 글씨, 더 큰 화면에서 약간 큰 글씨
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
                  매년거리입양캠페인팀 300여마리 <br />& 애니밴드 입양센터팀
                  350여 마리 입양진행
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.7rem" },
                    color: "#555",
                  }}
                >
                  고유거 입양센터에서는 품질높은 양육환경과 <br />
                  체계적 케어를 제공하기 위해 <br />
                  50마리 이내로 유지 및 관리하고 있으며, <br />
                  국내에서 외면받는 아이들의 경우
                  <br />
                  해외단체와의 연계를 통해 행복한 삶을 <br />
                  살아갈 수 있도록 노력하고있습니다.
                  <br />
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
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
            sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
          >
            (사) 경기도 고양시 덕양구 토당로 52 (토당동) 능곡역프라자 103호 (우)
            90508
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
          >
            MAIL: rniduwl@naver.com <br />
            TEL: 070-4793-2020
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
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
};

export default Goyugu0100;
