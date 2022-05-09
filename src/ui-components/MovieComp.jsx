/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MovieComp(props) {
  const { MoviePoster, overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({
    type: "url",
    url: `${"/edit"}${MoviePoster?.id}`,
  });
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: MoviePoster?.Wikiurl,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      justifyContent="center"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MovieComp")}
    >
      <Image
        height="408px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        src={MoviePoster?.image_url}
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        borderRadius="5px"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="288px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"RT:  "}${MoviePoster?.RTscore}${"    IMDb: "}${
            MoviePoster?.IMDbscore
          }${"    MC: "}${MoviePoster?.MCscore}`}
          {...getOverrideProps(overrides, "RT: IMDb: MC:")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          backgroundColor="rgba(0,34,102,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="More Info"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
