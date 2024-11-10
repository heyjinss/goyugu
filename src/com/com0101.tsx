import * as React from "react";
import {
  DataGrid,
  gridPageSelector,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Pagination from "@mui/material/Pagination";
import { useGridApiRef, gridColumnFieldsSelector } from "@mui/x-data-grid";

function Toolbar() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      sx={(theme) => ({ padding: theme.spacing(1.5, 0) })}
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function UseGridSelector() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 10,
  });
  // 행 클릭 시 실행될 핸들러 함수
  const handleRowClick = (params) => {
    console.log("Row clicked: ", params.row); // 클릭한 행의 데이터
    getColumnFields(); // 컬럼 필드 가져오기
  };

  const apiRef = useGridApiRef();

  const getColumnFields = () => {
    if (apiRef.current) {
      // getAllColumns을 통해 현재 그리드의 모든 컬럼을 가져옴
      const columns = apiRef.current.getAllColumns();

      const columnFields = columns.map((col) => col.field);
      console.log(columnFields);
    } else {
      console.log("apiRef is not initialized yet");
    }
  };
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        loading={loading}
        paginationModel={paginationModel}
        apiRef={apiRef} // DataGrid에 apiRef 연결
        onPaginationModelChange={setPaginationModel}
        hideFooter
        onRowClick={handleRowClick} // 행 클릭 시 실행될 핸들러 함수 연결
        slots={{
          toolbar: Toolbar,
        }}
      />
    </div>
  );
}
