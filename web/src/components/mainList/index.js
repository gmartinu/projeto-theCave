import { Delete, Edit, Search } from "@mui/icons-material";
import {
  Divider,
  Grow,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { Button, Paper, TextField } from "components";
import PaginationComponent from "components/pagination";
import { useDebounce } from "hooks";
import { AppContext } from "index";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { goToAddPage } from "utils/go2AddPage";

const ColoredCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export default function MainList({ model, params, columns }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { dialog, snack } = React.useContext(AppContext)
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const _debounce = useDebounce(search);
  const { data: dataModel, mutate } = model.useModel({
    page: page,
    search: _debounce ? _debounce : undefined,
  });

  const removeData = (row) => {
    dialog.showConfirm(`'Você deseja remover: "${row.nome}"" da lista ?`, "Atenção", () => {
      model.delete(row.id).then(() => {
        mutate();
        snack.success("Removido com sucesso!")
      }).catch(() => {
        snack.error("Por favor, contatar o suporte.")
      })
    }, )}

  return (
    <>
      <Grow in={true}>
        <Paper>
          <Box p={2} pb={0} display="flex">
            <TextField
              fullWidth
              id="campo-pesquisa"
              label={`Pesquisa em ${dataModel?.count} itens...`}
              autoFocus
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
              style={{ marginRight: 10 }}
            />
            <Button
              onClick={() => goToAddPage("novo", path, history)}
              variant="contained"
            >
              Incluir
            </Button>
          </Box>
          <Divider />
          <Table
            size="small"
            style={{
              minHeight: 688,
              flexDirection: "column",
            }}
          >
            <TableHead>
              {columns.map((column, i) => (
                <ColoredCell align="left" key={i}>
                  {column.Header}
                </ColoredCell>
              ))}
              <ColoredCell align="center" style={{ width: "10%" }}>
                Ações
              </ColoredCell>
            </TableHead>
            <TableBody>
              {dataModel?.rows?.map((row, key) => (
                <TableRow key={key} style={{ height: 43.39}}>
                  {columns.map((column, i) => (
                    <TableCell key={i}>
                      {typeof column.acessor === "function"
                        ? column.acessor(row)
                        : row[column.acessor]}
                    </TableCell>
                  ))}
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => goToAddPage(row.id, path, history)}
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small"
                      onClick={() => removeData(row)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="center" p={1}>
            <PaginationComponent
              setPage={setPage}
              page={page}
              count={dataModel?.count}
              pageSize={15}
            />
          </Box>
        </Paper>
      </Grow>
      {/* <Box position="absolute" bottom={20} right={20}>
        <Zoom
          in={true}
          timeout={600}
          style={{
            transitionDelay: `250ms`,
          }}
          unmountOnExit
        >
          <Fab
            onClick={() => goToAddPage("novo", path, history)}
            style={{ width: 100, height: 100 }}
            color="primary"
          >
            <Add style={{ fontSize: 50 }} />
          </Fab>
        </Zoom>
      </Box> */}
    </>
  );
}
