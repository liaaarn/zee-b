"use client";
import {
  Grid,
  InputAdornment,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import CustomFormLabel from "../../components/forms/theme-elements/CustomFormLabel";
import CustomOutlinedInput from "../../components/forms/theme-elements/CustomOutlinedInput";
import {
  IconBuildingArch,
  IconMail,
  IconMessage2,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import CustomRadio from "../../components/forms/theme-elements/CustomRadio";

const BasicIcons = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container spacing={3}>
        {/* 1 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-name"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Nama
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconUser size="20" />
              </InputAdornment>
            }
            id="bi-name"
            placeholder="Nama"
            fullWidth
          />
        </Grid>
        {/* 2 */}
        {/* <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-company"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Company
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconBuildingArch size="20" />
              </InputAdornment>
            }
            id="bi-company"
            placeholder="ACME Inc."
            fullWidth
          />
        </Grid> */}
        {/* 3 */}
        {/* <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-email"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Email
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconMail size="20" />
              </InputAdornment>
            }
            id="bi-email"
            placeholder="john.deo"
            fullWidth
          />
        </Grid> */}
        {/* 4 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-phone"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Nomor Telepon
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <IconPhone size="20" />
              </InputAdornment>
            }
            id="bi-phone"
            placeholder="Nomor telepon"
            fullWidth
          />
        </Grid>
        {/* 5 */}
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-message"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Deskripsi
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomOutlinedInput
            id="bi-message"
            startAdornment={
              <InputAdornment position="start">
                <IconMessage2 size="20" />
              </InputAdornment>
            }
            placeholder="Tambahkan keterangan"
            multiline
            fullWidth
          />
          <Grid
            item
            xs={12}
            sm={3}
            display="flex"
            alignItems="start"
            justifyContent="end"
          ></Grid>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignItems="center">
          <CustomFormLabel
            htmlFor="bi-message"
            sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
          >
            Makan di mana?
          </CustomFormLabel>
        </Grid>
        <Grid item xs={12} sm={9}>
          <FormControl component="fieldset">
            <RadioGroup name="cs-address" value={value} onChange={handleChange}>
              <FormControlLabel
                value="radio1"
                control={<CustomRadio />}
                label="Tempat"
              />
              <FormControlLabel
                value="radio2"
                control={<CustomRadio />}
                label="Rumah"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={9}>
          <Button variant="contained" color="primary">
            Kirim
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BasicIcons;
