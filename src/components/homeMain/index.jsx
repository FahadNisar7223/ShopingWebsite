import { Box, Typography } from "@mui/material";
import React from "react";
import NestedDropdown from "../nestedDropdown";
import QuickFeature from "../quickFeature";
import MainCard from "../mainCard";
import SeasonCard from "../seasonCard";
import ProductCard from "../productCard";
import AnnoucementCards from "../announcementCards";
import CategoriesCard from "../categoriesCard";

const imgUrl = [
  "https://magesolution.com/wp-content/uploads/2022/07/1_7u7eYPpkr5baaBOzYcdNHw.jpeg",
  "https://www.weronika.co.uk/wp-content/uploads/2023/03/a-weathered-penny-jewellery-weronika-karczewska-product-photography-0-20-1200x900.jpg",
  "https://media.very.co.uk/i/sd/ctmt-213-mens-dept-1?%24poi%24=&aspect=1%3A1&w=900&qlt=default&fmt=webp",
  "https://d2line.com/thatlook/wp-content/uploads/sites/4/2022/09/V-neck-Blouses.png",
];

const annoncementDataArray = [
  {
    id: 1,
    imageUrlAnnouncement:
      "https://img.freepik.com/premium-photo/portrait-stylish-young-man-man-dressed-white-blank-t-shirt-standing-gray-red-wall-background-urban-style-clothes-modern-fashionable-image-men-s-fashion_173815-10228.jpg",
    heading: "For Men",
    paragraph1: "20% Off",
    paragraph2: "SHOP NOW",
  },
  {
    id: 2,
    imageUrlAnnouncement:
      "https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?t=st=1721902068~exp=1721905668~hmac=a4430be4c1778bf740a154b1cff0a91f2dc6bba1c263fd0cd6e4ac1828512c6d&w=900",
    heading: "Black Friday Sale",
    paragraph1: "Upto 40% Off",
    paragraph2: "SHOP NOW",
  },
  {
    id: 3,
    imageUrlAnnouncement:
      "https://img.freepik.com/premium-photo/photo-inspired-funny-brunette-woman-jump-fly-pretend-plane-wear-casual-jeans-clothes-pink-background_525549-7062.jpg",
    heading: "For Women",
    paragraph1: "30% Off",
    paragraph2: "SHOP NOW",
  },
];

const HomeMain = ({ categories }) => {
  return (
    <>
      <Box mb={1}>
        <NestedDropdown />
      </Box>
      <Box mb={2}>
        <MainCard />
      </Box>
      <Box>
        <QuickFeature />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        pl={1}
        pr={1}
        mt={8}
        mb={3}
      >
        <Box alignSelf="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#2B3445" }}
          >
            Best Selling Categories
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={2} width="100%">
          {categories.map((category, index) => (
            <CategoriesCard
              key={category}
              buttonText={category}
              imageUrl={imgUrl[index]}
            />
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        pl={1}
        pr={1}
        mt={8}
        mb={3}
        width="100%"
      >
        <Box alignSelf="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#2B3445" }}
          >
            Best Selling Products
          </Typography>
        </Box>
        <Box>
          <ProductCard />
        </Box>
      </Box>
      <Box width="100%" display="flex" flexDirection="row" gap={2}>
        {annoncementDataArray.map((item) => (
          <AnnoucementCards
            key={item.id}
            imageUrlAnnouncement={item.imageUrlAnnouncement}
            heading={item.heading}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
          />
        ))}
      </Box>
      <Box mt={5} mb={3}>
        <SeasonCard />
      </Box>
    </>
  );
};

export default HomeMain;
