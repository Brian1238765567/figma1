/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Movie } from "../models";
import { useEffect } from "react";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function UiEdit(props) {
  const { movie, overrides, ...rest } = props;
  const [
    textFieldThreeOneSixFourThreeZeroFiveFourValue,
    setTextFieldThreeOneSixFourThreeZeroFiveFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFourThreeZeroFiveSixValue,
    setTextFieldThreeOneSixFourThreeZeroFiveSixValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      RTscore: "7.5",
      MCscore: "84",
      IMDbscore: "8.8",
      Name: textFieldThreeOneSixFourThreeZeroFiveFourValue,
      image_url: textFieldThreeOneSixFourThreeZeroFiveSixValue,
      Wikiurl: "https://www.wikipedia.org/",
    },
    id: movie?.id,
    model: Movie,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeOneSixFourThreeZeroFiveFourValue === "" &&
      movie !== undefined &&
      movie?.Name !== undefined
    )
      setTextFieldThreeOneSixFourThreeZeroFiveFourValue(movie?.Name);
  }, [movie]);
  useEffect(() => {
    if (
      textFieldThreeOneSixFourThreeZeroFiveSixValue === "" &&
      movie !== undefined &&
      movie?.image_url !== undefined
    )
      setTextFieldThreeOneSixFourThreeZeroFiveSixValue(movie?.image_url);
  }, [movie]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="428px"
      height="464px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UiEdit")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile31643045")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Movie"
            {...getOverrideProps(overrides, "Edit Profile31643048")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31643049")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="name"
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneSixFourThreeZeroFiveFourValue}
            onChange={(event) => {
              setTextFieldThreeOneSixFourThreeZeroFiveFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31643054")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="id"
            placeholder="F00008"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={movie?.id}
            {...getOverrideProps(overrides, "TextField31643055")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="image"
            placeholder="www.google.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneSixFourThreeZeroFiveSixValue}
            onChange={(event) => {
              setTextFieldThreeOneSixFourThreeZeroFiveSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31643056")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31643057")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
