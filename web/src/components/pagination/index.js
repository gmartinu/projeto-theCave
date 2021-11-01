import { Pagination } from "@mui/material";

export default function PaginationComponent({
  count,
  page,
  setPage,
  pageSize,
}) {
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      count={(count < pageSize
        ? 0
        : Number(count / pageSize) + Number(count % pageSize !== 0 ? 1 : 0)
      ).toFixed(0)}
      showFirstButton
      showLastButton
      page={page}
      onChange={handleChangePage}
    />
  );
}
