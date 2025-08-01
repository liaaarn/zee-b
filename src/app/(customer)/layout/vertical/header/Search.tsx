import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { IconSearch, IconX } from "@tabler/icons-react";
import Menuitems from "../sidebar/MenuItems";
import Link from "next/link";

interface menuType {
  title: string;
  id: string;
  subheader: string;
  children: menuType[];
  href: string;
}

const Search = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [search, setSerach] = useState("");

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  const filterProducts = (data: any[], keyword: string) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const products = [
    { id: 1, title: "Paket Nasi Ayam Goreng", href: "/menu/detail1" },
    { id: 2, title: "Paket Nasi Ikan Mujair Goreng", href: "/menu/detail2" },
    { id: 3, title: "Paket Berbuka", href: "/menu/detail3" },
    { id: 4, title: "Paket Nasi Ayam Bakar", href: "/menu/detail4" },
  ];

  const searchData = filterProducts(products, search);

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <IconSearch size="16" />
      </IconButton>
      <Dialog
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        fullWidth
        maxWidth={"sm"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { position: "fixed", top: 30, m: 0 } }}
      >
        <DialogContent className="testdialog">
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              id="tb-search"
              placeholder="Search here"
              fullWidth
              onChange={(e) => setSerach(e.target.value)}
              inputProps={{ "aria-label": "Search here" }}
            />
            <IconButton size="small" onClick={handleDrawerClose2}>
              <IconX size="18" />
            </IconButton>
          </Stack>
        </DialogContent>
        <Divider />
        <Box p={2} sx={{ maxHeight: "60vh", overflow: "auto" }}>
          <Typography variant="h5" p={1}>
            Pencarian
          </Typography>
          <Box>
            <List component="nav">
              {searchData.map((product) => (
                <ListItemButton
                  key={product.id}
                  sx={{ py: 0.5, px: 1 }}
                  href={product.href}
                  component={Link}
                >
                  <ListItemText
                    primary={product.title}
                    secondary={product.href}
                    sx={{ my: 0, py: 0.5 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Search;
