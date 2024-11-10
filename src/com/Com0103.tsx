import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Com0100 from "./com0100.tsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  bgcolor: "#ffffff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
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
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

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
              label="With normal TextField"
              id="outlined-start-adornment"
              sx={{ m: 0.3, width: "7ch", height: "1ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                },
              }}
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">
                Weight
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </div>
          <div>
            <TextField
              label="With normal TextField"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                },
              }}
              variant="filled"
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <FilledInput
                id="filled-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="filled-weight-helper-text">
                Weight
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <TextField
              label="With normal TextField"
              id="standard-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <Input
                id="standard-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="standard-weight-helper-text">
                Weight
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Box>
      </Modal>
      <Com0100 />
    </div>
  );
}
