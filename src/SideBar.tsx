import Box from "@material-ui/core/Box";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import logo from "../public/Image/prepits-logo.png";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#C9EDEE",
    width: "100%",
  },
  link: {
    fontFamily: "Source Sans Pro",
    fontWeight: 700,
  },
});

export const SideBarDemo = () => {
  const muiStyle = useStyles();
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={3} className={muiStyle.container}>
        <Box
          sx={{
            padding: "20px 0",
            width: "70%",
          }}
        >
          <Image src={logo} alt="Logo" />
        </Box>
        <Box>
          <Link href={""}>
            <Typography className={muiStyle.link}> Tables</Typography>
          </Link>
          <Link href={""}>
            <Typography> Menu Mangmenet</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
