import React from "react";
import { Box, Image } from "@chakra-ui/react";
import LogoDrinf from '../../img/cropped-logo-logo.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image 
        src={LogoDrinf} 
        objectFit='cover'
        alt='Drinks' 
      />
    </Box>
  );
}