import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
export default function Com0100() {
  // 컬럼정의
  const columns = [
    {
      field: "accountType",
      headerName: "재무구분",
      // ...baseColumnOptions,
      flex: 1,
      headerClassName: "custom-header", // 클래스 이름
    },
    {
      field: "parentAccountName",
      headerName: "상위계정과목",
      // ...baseColumnOptions,
      flex: 1,
      headerClassName: "custom-header", // 클래스 이름
    },

    {
      field: "accountSubName",
      headerName: "계정과목명",
      // ...baseColumnOptions,
      valueGetter: (value, members) => members.accountSubName || "N/A", // 값이 없을 때 "N/A"를 표시

      headerClassName: "custom-header", // 클래스 이름
      flex: 2, // 기존보다 큰 값으로 설정해 더 넓게 표시
      minWidth: 150, // 최소 너비 설정
      cellClassName: "custom-cell",
      // colSpan: (value, members) => {
      //   if (
      //     members.accountType === "1" ||
      //     members.accountType === "2" ||
      //     members.accountType === "3"
      //   ) {
      //     return 5;
      //   }
      //   if (members.parent_account_id.length === "3") {
      //     return 4;
      //   }
      //   return undefined;
      // },
      // valueGetter: (value, members) => {
      //   if (
      //     members.accountType === "1" ||
      //     members.accountType === "2" ||
      //     members.accountType === "3"
      //   ) {
      //     return members.accountType;
      //   }
      //   return value;
      // },
    },
    // {
    //   field: "entryId",
    //   headerName: "entryId",
    //   //...baseColumnOptions,
    //   flex: 1,
    //   sortable: false,
    // },

    {
      field: "amount",
      headerName: "금액",
      flex: 1,
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [members, setMembers] = useState([]);

  React.useEffect(() => {
    axios
      .get("/testDatabaseConnection3")
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정
        setMembers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          "& .bold": {
            fontWeight: 600,
          },
        }}
      >
        <DataGrid
          //disableColumnFilter
          //disableRowSelectionOnClick
          hideFooter
          showCellVerticalBorder
          showColumnVerticalBorder
          //getCellClassName={getCellClassName}
          //columnGroupingModel={columnGroupingModel}
          columns={columns}
          rows={members}
          getRowId={(members, index) => `${members.entryId}-${index}`}
          // getRowId={(members) => members.entryId}
        />
      </Box>
    </div>
  );
}
