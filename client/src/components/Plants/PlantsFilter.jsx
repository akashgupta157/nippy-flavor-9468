import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

import { useSearchParams } from "react-router-dom";

export const PlantsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFlowerColor = searchParams.getAll("flower_color");

  const [flower_color, setFlowerColor] = useState(initialFlowerColor || "");
  const [isFlowerColorMenuOpen, setIsFlowerColorMenuOpen] = useState(false);

  const initialGrowthHeight = searchParams.getAll("growth_height");
  const [growth_height, setGrowthHeight] = useState(initialGrowthHeight || "");
  const [isGrowthHeightMenuOpen, setIsGrowthHeightMenuOpen] = useState(false);

  const initialLight = searchParams.getAll("light");
  const [light, setLight] = useState(initialLight || []);
  const [isLightMenuOpen, setIsLightMenuOpen] = useState(false);

  const initialGardenStyle = searchParams.getAll("garden_style");
  const [garden_style, setGardenStyle] = useState(initialGardenStyle || "");
  const [isGardenStyleMenuOpen, setIsGardenStyleMenuOpen] = useState(false);

  useEffect(() => {
    let params = {
      flower_color,
      growth_height,
      light,
      garden_style,
    };

    setSearchParams(params);
  }, [flower_color, growth_height, light, garden_style]);

  const handleFlowerColor = (e) => {
    const { value } = e.target;
    setFlowerColor(value);
  };
  const handleHeight = (e) => {
    const { value } = e.target;
    setGrowthHeight(value);
  };
  const handleLight = (e) => {
    const { value } = e.target;
    setLight(value);
  };
  const handleGardenStyle = (e) => {
    const { value } = e.target;
    setGardenStyle(value);
  };

  return (
    <Box
      width={["100%", "100%", "75%", "75%"]}
      margin={"auto"}
      p={["30px 0px 90px 0px"]}
    >
      <Text
        textAlign={"left"}
        lineHeight={"32px"}
        fontSize={"19px"}
        fontWeight={700}
        fontStretch={"100%"}
        text-decoration={"none solid rgb(64, 64, 64)"}
        pb={"20px"}
      >
        Filter by Plant
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={20}
      >
        <Box>
          <Menu
            isOpen={isFlowerColorMenuOpen}
            onOpen={() => setIsFlowerColorMenuOpen(true)}
            onClose={() => setIsFlowerColorMenuOpen(false)}
          >
            <MenuButton
              as={Box}
              cursor={"pointer"}
              bg={"white"}
              _hover={{ bg: "white" }}
              w={["120px", "130px", "150px", "200px"]}
            >
              <Flex
                h={"35px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex justifyContent={"flex-start"} alignItems={"center"}>
                  <Image
                    w={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa374wI2e0xacLz9dvTjOAogn5jQTiQsNUSg&usqp=CAU"
                  />
                  <Box
                    as="span"
                    textAlign="left"
                    fontSize={15}
                    pl={"5px"}
                    pr={"10px"}
                  >
                    Flower color
                  </Box>
                </Flex>
                {isFlowerColorMenuOpen ? (
                  <TbTriangleFilled fontSize="11px" color="#6DB644" />
                ) : (
                  <TbTriangleInvertedFilled fontSize="11px" color="#6DB644" />
                )}
              </Flex>
            </MenuButton>
            <MenuList onClick={handleFlowerColor}>
              <MenuItem value={"blue"}>blue</MenuItem>
              <MenuItem value={"brown"}>brown</MenuItem>
              <MenuItem value={"green"}>green</MenuItem>
              <MenuItem value={"multicolored"}>multicolored</MenuItem>
              <MenuItem value={"orange"}>orange</MenuItem>
              <MenuItem value={"Pink"}>pink</MenuItem>
              <MenuItem value={"Purple"}>purple</MenuItem>
              <MenuItem value={"red"}>red</MenuItem>
              <MenuItem value={"white"}>white</MenuItem>
              <MenuItem value={"yellow"}>yellow</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu
            isOpen={isGrowthHeightMenuOpen}
            onOpen={() => setIsGrowthHeightMenuOpen(true)}
            onClose={() => setIsGrowthHeightMenuOpen(false)}
          >
            <MenuButton
              cursor={"pointer"}
              as={Box}
              bg={"white"}
              _hover={{ bg: "white" }}
              w={["120px", "130px", "150px", "200px"]}
            >
              <Flex
                h={"35px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex alignItems={"center"} justifyContent={"flex-start"}>
                  <Image
                    w={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1Jbsv-Mf5uWHSmkZZ-TQi-xoeF1aEnas1jNCZOp-YPrbe_4xde9LfNau_p7zcpqVDo0&usqp=CAU"
                  />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={15}
                    pl={"5px"}
                    pr={"10px"}
                  >
                    Growth height
                  </Box>
                </Flex>
                {isGrowthHeightMenuOpen ? (
                  <TbTriangleFilled fontSize="11px" color="#6DB644" />
                ) : (
                  <TbTriangleInvertedFilled fontSize="11px" color="#6DB644" />
                )}
              </Flex>
            </MenuButton>
            <MenuList onClick={handleHeight}>
              <MenuItem value={"small"}>small</MenuItem>
              <MenuItem value={"medium"}>medium</MenuItem>
              <MenuItem value={"large"}>large</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu
            isOpen={isLightMenuOpen}
            onOpen={() => setIsLightMenuOpen(true)}
            onClose={() => setIsLightMenuOpen(false)}
          >
            <MenuButton
              cursor={"pointer"}
              as={Box}
              bg={"white"}
              _hover={{ bg: "white" }}
              w={["120px", "130px", "150px", "200px"]}
            >
              <Flex
                h={"35px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex alignItems={"center"} justifyContent={"flex-start"}>
                  <Image
                    w={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-R4MYwIOReYKc6izTyszKECvB5dTgy4MCA&usqp=CAU"
                  />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={15}
                    pl={"5px"}
                    pr={"10px"}
                  >
                    Light
                  </Box>
                </Flex>
                {isLightMenuOpen ? (
                  <TbTriangleFilled fontSize="11px" color="#6DB644" />
                ) : (
                  <TbTriangleInvertedFilled fontSize="11px" color="#6DB644" />
                )}
              </Flex>
            </MenuButton>
            <MenuList onClick={handleLight}>
              <MenuItem value={"sunny"}>sunny</MenuItem>
              <MenuItem value={"shade"}>shade</MenuItem>
              <MenuItem value={"semi-shade"}>semi-shade</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu
            isOpen={isGardenStyleMenuOpen}
            onOpen={() => setIsGardenStyleMenuOpen(true)}
            onClose={() => setIsGardenStyleMenuOpen(false)}
          >
            <MenuButton
              cursor={"pointer"}
              as={Box}
              bg={"white"}
              _hover={{ bg: "white" }}
              w={["120px", "130px", "150px", "200px"]}
            >
              <Flex
                h={"35px"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Flex alignItems={"center"} justifyContent={"flex-start"}>
                  <Image
                    w={"35px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76HkxhJJGhRTvTaqW2PhaYxWqYuuOh4VqBw&usqp=CAU"
                  />
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={15}
                    pl={"5px"}
                    pr={"10px"}
                  >
                    Garden Style
                  </Box>
                </Flex>
                {isGardenStyleMenuOpen ? (
                  <TbTriangleFilled fontSize="11px" color="#6DB644" />
                ) : (
                  <TbTriangleInvertedFilled fontSize="11px" color="#6DB644" />
                )}
              </Flex>
            </MenuButton>
            <MenuList onClick={handleGardenStyle}>
              <MenuItem value={"Forest Garden"}>Forest garden</MenuItem>
              <MenuItem value={"Flower garden"}>Flower garden</MenuItem>
              <MenuItem value={"Water garden"}>Water garden</MenuItem>
              <MenuItem value={"Roof Garden"}>Roof garden</MenuItem>
              <MenuItem value={"Natural garden"}>Natural garden</MenuItem>
              <MenuItem value={"cottage garden"}>Cottage garden</MenuItem>
              <MenuItem value={"Rose Garden"}>Rose garden</MenuItem>
              <MenuItem value={"Pot garden"}>Pot garden</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Grid>
    </Box>
  );
};
