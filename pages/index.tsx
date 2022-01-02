import * as React from 'react';
import type { NextPage } from 'next';
import Box from "@material-ui/core/Box";

import logo from "../public/Image/prepits-logo.png";
import Image from 'next/image';




const Home: NextPage = () => {
  return (

        <Box
          sx={{
            padding: "20px 0",
            width: "70%",
          }}
        >
          <Image src={logo} alt="Logo" />
        </Box>

  );
};

export default Home;
