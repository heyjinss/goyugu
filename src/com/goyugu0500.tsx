import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
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
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";

import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
// 더미 데이터
const mockData = [
  {
    title: "잘 살아보시개 출연",
    date: "24.03.06",
    views: 440,
    comments: 0,
    thumbnail: "https://via.placeholder.com/300x180",
  },
  {
    title: "우리집에 해피가 왔다 출연",
    date: "24.03.06",
    views: 398,
    comments: 0,
    thumbnail: "https://via.placeholder.com/300x180",
  },
  // 추가 데이터 생략...
];

// 메인 컴포넌트
const Goyugu0500: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 6; // 페이지당 아이템 수
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // 현재 페이지의 데이터 계산
  const displayedVideos = mockData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div style={{ padding: "0px" }}>
        {/* 백그라운드 이미지 */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "800px",
            maxHeight: "180px",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          <img
            src={back}
            alt="back"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: 0,
              padding: 0,
            }}
          />
        </Box>

        {/* 탭 */}
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tab label="활동영상" sx={{ flex: 1 }} />
            <Tab label="구조활동" sx={{ flex: 1 }} />
          </Tabs>
        </Box>

        {/* 조건부 렌더링 */}
        {activeTab === 0 && (
          <div style={{ padding: "20px" }}>
            <br />
            <Grid container spacing={2} justifyContent="center">
              {displayedVideos.map((video, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      border: "1px solid #ddd",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="120"
                      image={video.thumbnail}
                      alt={video.title}
                    />
                    <CardContent
                      sx={{
                        padding: "8px",
                        "&:last-child": { paddingBottom: "8px" },
                      }}
                    >
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        sx={{ fontSize: "10px", marginBottom: "4px" }}
                      >
                        {video.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                        noWrap
                      >
                        {video.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: "10px" }}
                      >
                        {video.comments} comments • {video.views} views
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* 페이지네이션 */}
            <Pagination
              count={Math.ceil(mockData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
        )}
        {activeTab === 1 && (
          <div style={{ padding: "20px" }}>
            <Box
              sx={{
                mb: 2,
                ml: "auto", // 모바일에서 중앙 정렬
                mr: "auto", // 모바일에서 중앙 정렬
                width: "", // 모바일에서 90% 너비
                height: "2px", // 선의 두께
                background: "#FFFFFF",
                borderRadius: "2px", // 선 끝을 둥글게
                mx: "auto", // 모바일에서 중앙 정렬
              }}
            ></Box>

            <div
              style={{
                msOverflowStyle: "none", // Internet Explorer/Edge에서 스크롤바 숨기기
                align: "center",
                marginLeft: "0px",
                marginRight: "0px",
                width: "350px",
                height: "400px",
                overflowX: "auto", // 수평 스크롤만 활성화
                overflowY: "hidden", // 세로 스크롤은 숨기기
                whiteSpace: "nowrap", // 아이템들이 한 줄로 나열
                touchAction: "pan-x", // 수평 스크롤만 활성화

                scrollSnapType: "x mandatory", // 스크롤 스냅 적용
                WebkitOverflowScrolling: "touch", // iOS에서 부드러운 스크롤
              }}
            >
              {/* 여러 개의 아이템을 나열 */}
              <div
                style={{
                  display: "inline-block",
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2024년 7월
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  함평번식장 구조 10마리
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2024년 7월
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  함평번식장 구조 10마리
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2024년 8월
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  충북제천번식장 구조 13마리
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2023년 8월
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  신원동 불법 번식장 구조
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2020년-2021년
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  벽강보호소 80마리구조
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
              <div
                style={{
                  display: "inline-block",
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2019년
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  하남시 보호소 구조
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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
                  width: "80%", // 모바일에서 80% 크기로 설정
                  height: "250px", // 모바일에서는 높이를 줄임
                  marginRight: "15px",
                  backgroundColor: "#f0f0f0", // 부드러운 회색 배경
                  borderRadius: "8px", // 모서리 둥글게
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
                  padding: "10px",
                  boxSizing: "border-box",
                  textAlign: "center", // 텍스트 가운데 정렬
                  overflow: "hidden", // 이미지가 박스를 벗어나지 않도록 설정
                }}
              >
                {/* 연도 */}
                <div
                  style={{
                    fontSize: "14px", // 모바일에서는 폰트 크기 줄임
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "8px",
                    textTransform: "uppercase", // 연도는 대문자로
                  }}
                >
                  2017년
                </div>

                {/* 소제목 */}
                <div
                  style={{
                    fontSize: "12px", // 모바일에서는 소제목 폰트 크기 줄임
                    fontWeight: "600",
                    color: "#555",
                    marginBottom: "10px",
                    fontFamily: "'Nanum Gothic', sans-serif", // 폰트 스타일
                  }}
                >
                  곤지암 보호소 구조활동
                </div>

                {/* 이미지 */}
                <div
                  style={{
                    height: "170px", // 이미지 크기 줄임
                    width: "100%",
                    overflow: "hidden", // 이미지가 박스를 넘지 않게
                    borderRadius: "5px",
                    marginBottom: "10px", // 이미지와 텍스트 간 간격
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

              {/* 다른 아이템들도 동일한 방식으로 수정 */}
              {/* ... 반복되는 코드 (다른 아이템들) ... */}
            </div>
          </div>
        )}
      </div>
      <div>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
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
              (사) 경기도 고양시 덕양구 토당로 52 (토당동) 능곡역프라자 103호
              (우) 90508
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
      </div>
    </div>
  );
};

export default Goyugu0500;
