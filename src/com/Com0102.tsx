/**
 * 파일명 : com0102m.jsx
 * 설명   : 기업정보 조회
 * 수정내역
 ************************************************
 * Version    개발일자      개발자    개발내용
 ************************************************
 *   0.1     2024.10.10     유혜진  기업정보 조회
 */

/************************************************
 * Import 영역
 ************************************************/

import { DataGrid } from "@mui/x-data-grid";
import reducer from "../reducer/default_reducer.jsx";
import common from "../libs/Common.jsx";
import * as CommonProxy from "../libs/CommonProxy.jsx";
import axios from "axios";
import { useState } from "react";
import { useGridApiRef, gridColumnFieldsSelector } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal/Modal.js";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";

/************************************************
 * 전역변수 선언영역
 ************************************************/
const Com0102 = () => {
  const [fieldValues, setFieldValues] = React.useState({
    loanAmount: "",
    customerId: "",
    legalEntityCode: "",
    parentCustomerId: "",
    customerKoreanNm: "",
    industryCode: "",
    customerEngNm: "",
    customerType: "",
    registrationNumber: "",
    contactNumHp: "",
    contactNumOf: "",
    contactNumEtc: "",
    registDt: "", // Date 타입으로 변경
    oanAmount: "",
    representativeName: "",
    address: "",
  });

  /************************************************
   * State / Columns 선언영역
   ************************************************/

  const [members, setMembers] = useState([]);

  const [dataReload, setDataReload] = React.useState(false); // 데이터 재로드 상태 추가

  const columns = [
    {
      field: "customerId",
      headerName: "기업명",
      width: 130,
      editable: true,
    },
    { field: "legalEntityCode", headerName: "법인코드", width: 75 },
    {
      field: "parentCustomerId",
      headerName: "모기업코드",
      width: 100,
    },
    {
      field: "customerKoreanNm",
      headerName: "기업한글명",
      width: 100,
    },
    {
      field: "industryCode",
      headerName: "법인여부",
      width: 100,
    },
    {
      field: "customerType",
      headerName: "고객타입",
      width: 100,
    },
    {
      field: "registrationNumber",
      headerName: "사업자번호",
      width: 150,
    },
    { field: "registDt", headerName: "등록일", width: 100 },
  ];

  /************************************************
   * 이벤트 함수 영역
   ************************************************/
  /**
   * 기능 : 조회 및 초기 조회 함수
   * 설명 : 조회
   * param : requestData
   * return : response.data.List
   */

  const loadData = () => {
    const requestData = {
      CustomerId: selectedIds,
    };

    axios
      .post("/SelectMember", requestData)
      .then((response) => {
        setMembers(response.data.List);
        console.log("Select Data loaded:", response.data.List);
      })
      .catch((error) => console.log("Failed to load data:", error));
  };

  React.useEffect(() => {
    loadData(); // 데이터 로드
  }, []);

  React.useEffect(() => {
    const requestData = {
      CompanyId: selectedIds,
    };

    console.log(requestData);
    axios
      .post("/SelectMember", requestData)
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.List)
        ) {
          setMembers(response.data.data.List); // response.data.data.List를 배열로 설정
          console.log("Data loaded:", response.data.data.List);
        } else {
          console.log("Data format is not an array or missing List key");
        }
      })
      .catch((error) => console.log("Failed to load data:", error));
  }, [dataReload]);

  /************************************************
   * 이벤트 함수 영역
   ************************************************
   * 기능 : 조회 및 초기 조회 함수
   * 설명 : 조회
   * param : requestData
   * return : response.data.List
   ************************************************/

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const apiRef = useGridApiRef();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const getColumnFields = () => {
    if (apiRef.current) {
      // getAllColumns을 통해 현재 그리드의 모든 컬럼을 가져옴
      const columns = apiRef.current.getAllColumns();
      const columnFields = columns.map((col) => col.field);
    } else {
      console.log("apiRef is not initialized yet");
    }
  };

  const SearchList = () => {
    const requestData = {
      customerId: searchText,
    };

    console.log(requestData);
    axios
      .post("/SelectMember", requestData)
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.List)
        ) {
          setMembers(response.data.data.List);
          console.log("Data loaded:", response.data.data.List);
        } else {
          console.log("Data format is not an array or missing List key");
        }
      })
      .catch((error) => console.log("Failed to load data:", error));
  };

  const AddCorList = () => {
    handleOpen();
  };

  const ModalClose = () => {
    handleClose();
  };

  const [selectedIds, setSelectedIds] = React.useState([]); // 선택된 행의 ID 목록

  const handleSelectionChange = (newSelection) => {
    setSelectedIds(newSelection);
    console.log("Selected rows:", newSelection);
  };

  /* 삭제 */
  const DeleteCorList = (params) => {
    const requestData = {
      CompanyId: selectedIds,
    };

    axios
      .post("/deleteMember", requestData) // POST 요청
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정

        loadData();
        console.log("Deletion successful:", response.data);

        setSnackbarMessage("OK"); // 메시지 설정
        setOpenSnackbar(true); // Snackbar 열기
        handleClose(); // 작업 완료 후 모달 닫기
        // setDataReload(!dataReload); // dataReload 값을 변경하여 useEffect 트리거
      })
      .catch((error) => console.log(error));
  };

  const UpdateCorList2 = () => {
    const requestData = {
      customerKoreanNm: fieldValues.customerKoreanNm,
      customerEngNm: fieldValues.customerEngNm,
      customerId: fieldValues.customerId,
      registrationNumber: fieldValues.registrationNumber,
      // 필요한 다른 필드들도 추가할 수 있습니다.
    };

    console.log(requestData);

    axios
      .post("/UpdateCutInfo", requestData) // POST 요청
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정
        //loadData();
        console.log("Deletion successful:", response.data);
        setSnackbarMessage("OK"); // 메시지 설정
        setOpenSnackbar(true); // Snackbar 열기
        handleClose(); // 작업 완료 후 모달 닫기
        loadData();
        // setDataReload(!dataReload); // dataReload 값을 변경하여 useEffect 트리거
      })
      .catch((error) => console.log(error));
  };

  /************************************************
   * 함수 영역
   ************************************************
   * 기능 : 수정 버튼 클릭 시 row데이터 가져오기
   * 설명 : 조회
   * param : requestData
   * return : response.data.data.List
   ************************************************/

  const UpdateCorList = () => {
    const requestData = {
      // 필요한 요청 데이터 (예: 필터 조건 등)
      customerId: selectedIds.length > 0 ? selectedIds[0] : "",
    };

    console.log(requestData);
    axios
      .post("/SelectMember", requestData)
      .then((response) => {
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.List)
        ) {
          // List의 첫 번째 항목을 가져와서 새로운 변수에 담기
          const firstMember = response.data.data.List[0];
          console.log("First member:", firstMember);

          // firstMember가 객체일 경우, 상태에 반영
          if (firstMember && typeof firstMember === "object") {
            setFieldValues({
              customerKoreanNm: firstMember.customerKoreanNm || "",
              customerEngNm: firstMember.customerEngNm || "",
              customerId: firstMember.customerId || "",
              registrationNumber: firstMember.registrationNumber || "",
              contactNumHp: firstMember.contactNumHp || "",
              contactNumOf: firstMember.contactNumOf || "",
              contactNumEtc: firstMember.contactNumEtc || "",
              address: firstMember.address || "",
              loanAmount: firstMember.loanAmount || "",
            });
          }

          handleOpen();
        } else {
          console.log("Data format is not an array or missing List key");
        }
      })
      .catch((error) => console.log("Failed to load data:", error));
  };

  // 행 클릭 시 실행될 핸들러 함수
  const handleRowClick = (params) => {
    console.log("Row clicked: ", params.row); // 클릭한 행의 데이터
    getColumnFields(); // 컬럼 필드 가져오기
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    getColumnFields(); // 컬럼 필드 가져오기
    if (members.length > 0) {
    }
    setOpen(true); // 모달 열기
  };
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)  scale(0.8)",
    width: "70%", // 화면 너비의 70%
    height: "70%", // 화면 높이의 70%
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto", // 스크롤을 활성화하는 설정
  };
  const [age, setAge] = React.useState("");

  const [searchText, setSearchText] = useState(""); // 검색어 상태
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  /************************************************
   * 렌더링 영역
   ************************************************
   * 기능 : 그리드 데이터 조회
   * 설명 : 조회
   * param :
   * return :
   ************************************************/
  return (
    <div>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }} // 아래 컴포넌트와의 간격 설정 (margin-bottom)
        justifyContent="flex-end" // 오른쪽 정렬 설정
        alignItems="center" // 수직 중앙 정렬
      >
        <TextField
          label="기업코드"
          value={searchText} // 입력 값을 상태로 연결
          onChange={(e) => setSearchText(e.target.value)} // 상태 업데이트
          variant="outlined"
          size="small"
          sx={{
            fontSize: "0.75rem",
            width: "150px",
            "& .MuiInputBase-root": {
              height: "40px", // Select와 동일한 높이 설정
            },
          }}
        />

        <Button
          endIcon={<SendIcon />}
          variant="contained"
          size="small" // 버튼 크기를 작게 설정
          sx={{ fontSize: "0.75rem", padding: "4px 8px" }} // 글씨 크기와 버튼의 패딩 조정
          onClick={SearchList}
        >
          검색
        </Button>
        <Button
          variant="contained"
          size="small" // 버튼 크기를 작게 설정
          sx={{ fontSize: "0.75rem", padding: "4px 8px" }} // 글씨 크기와 버튼의 패딩 조정
          onClick={AddCorList}
        >
          신규추가
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{ fontSize: "0.75rem", padding: "4px 8px" }}
          onClick={UpdateCorList}
        >
          수정
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ fontSize: "0.75rem", padding: "4px 8px" }}
          onClick={DeleteCorList}
        >
          삭제
        </Button>
      </Stack>

      <Box sx={{ height: "90%", width: "100%" }}>
        <DataGrid
          rows={Array.isArray(members) ? members : []}
          columns={columns}
          getRowId={(members) => members.customerId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          apiRef={apiRef} // DataGrid에 apiRef 연결
          pageSizeOptions={[10]}
          checkboxSelection
          //disableRowSelectionOnClick
          onRowClick={handleRowClick} // 행 클릭 시 실행될 핸들러 함수 연결
          onRowSelectionModelChange={(newSelection) =>
            handleSelectionChange(newSelection)
          }
        />

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style} id="scrollable-modal-description">
            <div>
              <TextField
                label="기업한글명"
                id="filled-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                value={fieldValues.customerKoreanNm}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    customerKoreanNm: e.target.value,
                  })
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                //variant="filled"
              />
              <TextField
                label="기업영어명"
                id="filled-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                value={fieldValues.customerEngNm}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    customerEngNm: e.target.value,
                  })
                }
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  },
                }}
                //variant="filled"
              />
              <TextField
                disabled
                label="기업코드"
                id="filled-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    customerId: e.target.value,
                  })
                }
                value={fieldValues.customerId}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                //variant="filled"
              />
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  대출총액
                </InputLabel>
                <Input
                  disabled
                  value={fieldValues.loanAmount}
                  onChange={(e) =>
                    setFieldValues({
                      ...fieldValues,
                      loanAmount: e.target.value,
                    })
                  }
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div>
              <TextField
                disabled
                label="사업자번호"
                id="standard-start-adornment"
                value={fieldValues.registrationNumber}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    registrationNumber: e.target.value,
                  })
                }
                sx={{ m: 1, width: "25ch" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
              <TextField
                label="회사전화번호"
                id="standard-start-adornment"
                value={fieldValues.contactNumOf}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    contactNumOf: e.target.value,
                  })
                }
                sx={{ m: 1, width: "25ch" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  산업구분
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={fieldValues.industryCode}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                label="개인휴대전화번호"
                id="standard-start-adornment"
                value={fieldValues.contactNumHp}
                onChange={(e) =>
                  setFieldValues({
                    ...fieldValues,
                    contactNumHp: e.target.value,
                  })
                }
                sx={{ m: 1, width: "25ch" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
              <TextField
                label="집전화번호"
                value={fieldValues.contactNumHp}
                id="standard-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  개인구분
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={fieldValues.industryCode}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>개인사업자</MenuItem>
                  <MenuItem value={20}>기업</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="소재지"
                id="standard-start-adornment"
                value={fieldValues.address}
                onChange={(e) =>
                  setFieldValues({ ...fieldValues, address: e.target.value })
                }
                sx={{ m: 1, width: "60ch" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start"> </InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />
            </div>
            <Stack spacing={2} direction="row" justifyContent="flex-end">
              <Button variant="outlined">삭제</Button>
              <Button variant="outlined" onClick={ModalClose}>
                취소
              </Button>
              <Button variant="outlined" onClick={UpdateCorList2}>
                수정
              </Button>
            </Stack>
          </Box>
        </Modal>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // 정가운데로 배치
        >
          <MuiAlert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{
              width: "100%", // 너비를 화면의 30%로 설정
              textAlign: "center",
              p: 8, // 패딩 추가
            }}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>

        {/* <Com0104 /> */}
      </Box>
    </div>
  );
};

export default Com0102;
function dispatch(arg0: { type: string; data_node: string; value: any }) {
  throw new Error("Function not implemented.");
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%", // 화면 너비의 60%
  height: "60%", // 화면 높이의 60%
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
