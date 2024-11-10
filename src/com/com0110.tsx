import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Com0100 from "./com0100.tsx";
export default function ColumnSpanningFunction() {
  // const items = [
  //   { id: 1, item: "Paperclip", quantity: 100, price: 1.99 },
  //   { id: 2, item: "Paper", quantity: 10, price: 30 },
  //   { id: 3, item: "Pencil", quantity: 100, price: 1.25 },
  // ];

  // const rows = [
  //   ...items,
  //   { id: "SUBTOTAL", label: "Subtotal", subtotal: 624 },
  //   { id: "TAX", label: "Tax", taxRate: 10, taxTotal: 62.4 },
  //   { id: "TOTAL", label: "Total", total: 686.4 },
  // ];

  // const baseColumnOptions = {
  //   sortable: false,
  //   pinnable: false,
  //   hideable: false,
  // };

  // 컬럼정의

  const columns = [
    {
      field: "fiscalYear",
      headerName: "재무년도",
      // colSpan: (value, members) => {
      //   if (
      //     members.accountType === "1" ||
      //     members.accountType === "2" ||
      //     members.accountType === "3"
      //   ) {
      //     return 10;
      //   }
      //   // if (members.parent_account_id.length === "3") {
      //   //   return 4;
      //   // }
      //   return undefined;
      // },
      // valueGetter: (value, members) => {
      //   if (
      //     members.accountType === "1" ||
      //     members.accountType === "2" ||
      //     members.accountType === "3"
      //   ) {
      //     return "members.accountType";
      //   }
      //   return value;
      // },
      flex: 1,
    },
    {
      field: "customerId",
      headerName: "회사코드",
      //...baseColumnOptions,
      flex: 1,
      sortable: false,
    },
    {
      field: "accountType",
      headerName: "재무구분",
      // ...baseColumnOptions,
      flex: 1,
    },
    {
      field: "parentAccountName",
      headerName: "상위계정과목",
      // ...baseColumnOptions,
      flex: 1,
    },
    {
      field: "parentAccountId",
      headerName: "상위계정코드",
      // ...baseColumnOptions,

      flex: 1,
    },

    {
      field: "accountSubName",
      headerName: "계정과목명",
      // ...baseColumnOptions,
      flex: 1,
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
    {
      field: "entryId",
      headerName: "entryId",
      //...baseColumnOptions,
      flex: 1,
      sortable: false,
    },

    {
      field: "amount",
      headerName: "금액",
      flex: 1,
    },
    {
      field: "startDate",
      headerName: "재무산정시작월",
      //...baseColumnOptions,
      flex: 1,
      sortable: false,
    },
    {
      field: "endDate",
      headerName: "재무산정끝월",
      //...baseColumnOptions,
      flex: 1,
      sortable: false,
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [members, setMembers] = useState([]);

  React.useEffect(() => {
    axios
      .get("/testDatabaseConnection2")
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정
        setMembers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
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
        disableColumnFilter
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
        //getCellClassName={getCellClassName}
        columns={columns}
        rows={members}
        getRowId={(members) => members.entryId}
      />
    </Box>
  );
}
