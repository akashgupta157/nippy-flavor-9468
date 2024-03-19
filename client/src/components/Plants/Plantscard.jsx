import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const Plantscard = ({ _id, image, english_name }) => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      flexDirection={["row", "row", "column", "column"]}
      m={"50px 0"}
      pl={["5px", "0px", "0px", "0px"]}
      pr={["5px", "0px", "0px", "0px"]}
      width={["380px", "500px", "260px", "240px"]}
      height={["150px", "150px", "320px", "320px"]}
      marginLeft={["5px", "5px", "0px", "0px"]}
      borderRadius={"10px"}
      boxShadow={
        " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      }
      cursor={"pointer"}
    >
      <Image
        loading="lazy"
        onClick={() => navigate(`/plants/${_id}`)}
        src={image}
        borderRadius={"8px 8px 0px 0px"}
        width={["180px", "200px", "260px", "240px"]}
        height={["150px", "150px", "200px", "220px"]}
      />
      <Text
        fontFamily={"Roboto(woff2),sans-serif"}
        fontWeight={700}
        fontSize={"24px"}
        lineHeight="31.2px"
        p={"15px"}
        font-stretch="100%"
        _hover={{
          color: "#6DB644",
        }}
        cursor={"pointer"}
      >
        {english_name}
      </Text>
    </Box>
  );
};
