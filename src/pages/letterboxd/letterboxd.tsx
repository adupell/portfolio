import React, { useEffect } from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import {
  sectionEight,
  sectionNine,
  sectionFive,
  sectionFour,
  sectionOne,
  sectionSeven,
  sectionSix,
  sectionSixText,
  sectionThree,
  sectionTwo,
  sectionTen,
  sectionEleven,
  sectionTwelve,
  sectionThirteen,
} from "./constants";
import {
  FocusArea,
  HomepageFlow,
  ImageContainer,
  SectionEight,
  SectionEleven,
  SectionFive,
  SectionFour,
  SectionNine,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionTen,
  SectionThirteen,
  SectionThree,
  SectionTwelve,
  SectionTwo,
  SignUpFinal,
  SignUpFlow,
  Sketch,
  TextContainer,
} from "./letterboxd.styles";
import { HalfImage } from "../shared.styles";
import LetteboxdCoverImage from "../../images/letterboxd/letterboxdCoverImage.png";
import ExisitingBrandImage from "../../images/letterboxd/existingbrand.png";
import UserFeedbackImage from "../../images/letterboxd/userfeedback.png";
import SignUpFlowImage from "../../images/letterboxd/signupflow.png";
import HomepageFlowImage from "../../images/letterboxd/homepageflow.png";
import SignUpFinalImage from "../../images/letterboxd/signupfinal.png";
import HomeFinalImage from "../../images/letterboxd/homefinal.png";
import {
  letterboxdCoverImageDesc,
  exisitingBrandImage,
  userFeedbackImageDesc,
  signUpFinalImageDesc,
  homepageFlowImageDesc,
  signUpFlowImageDesc,
  homeFinalImageDesc,
} from "../../images/letterboxd/imagedescriptions";
import { $white } from "../../assets/colors";

const LetterboxdPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = $white;
  }, []);

  return (
    <Page>
      <TextComponent
        type={TextType.SUBTITLE}
        text="Letterboxd | Personal Project"
      />
      <TextComponent
        type={TextType.HEADER}
        text="a mobile application and brand redesign"
      />
      <SectionOne>
        {sectionOne.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionOne>
      <CoverImage alt={letterboxdCoverImageDesc} src={LetteboxdCoverImage} />
      <TextComponent
        type={TextType.SUBHEADER}
        text="01 Existing Brand and Research"
      />
      <SectionTwo>
        {sectionTwo.map((item) => (
          <Paragraph text={item.text} />
        ))}
        <HalfImage alt={exisitingBrandImage} src={ExisitingBrandImage} />
      </SectionTwo>
      <SectionThree>
        {sectionThree.map((item) => (
          <Paragraph size="large" header={item.header} text={item.text} />
        ))}
      </SectionThree>
      <SectionFour>
        <HalfImage alt={userFeedbackImageDesc} src={UserFeedbackImage} />
        {sectionFour.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionFour>
      <TextComponent type={TextType.SUBHEADER} text="02 Strategy Plan" />
      <SectionFive>
        {sectionFive.map((item) => (
          <Paragraph header={item.header} title={item.title} text={item.text} />
        ))}
      </SectionFive>
      <SectionSix>
        {sectionSix.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <FocusArea>
          <TextComponent type={TextType.TITLE} text={sectionSixText} />
        </FocusArea>
      </SectionSix>
      <SectionSeven>
        {sectionSeven.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionSeven>
      <ImageContainer>
        <TextComponent bold type={TextType.SUBTITLE} text="Sign up flow" />
        <SignUpFlow alt={signUpFlowImageDesc} src={SignUpFlowImage} />
        <TextComponent bold type={TextType.SUBTITLE} text="Homepage flow" />
        <HomepageFlow alt={homepageFlowImageDesc} src={HomepageFlowImage} />
      </ImageContainer>
      <TextComponent type={TextType.SUBHEADER} text="03 Brainstorm" />
      <SectionEight>
        {sectionEight.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionEight>
      <SectionNine>
        {sectionNine.map((item) => (
          <Sketch alt={item.altText} src={item.src} />
        ))}
      </SectionNine>
      <SectionTen>
        {sectionTen.map((item) => (
          <Sketch alt={item.altText} src={item.src} />
        ))}
      </SectionTen>
      <TextComponent type={TextType.SUBHEADER} text="04 Final Designs" />
      <SectionEleven>
        {sectionEleven.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}

        <SignUpFinal alt={signUpFinalImageDesc} src={SignUpFinalImage} />
      </SectionEleven>
      <SectionTwelve>
        {sectionTwelve.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionTwelve>
      <SectionThirteen>
        <TextContainer>
          {sectionThirteen.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </TextContainer>
        <HalfImage alt={homeFinalImageDesc} src={HomeFinalImage} />
      </SectionThirteen>
    </Page>
  );
};

export default LetterboxdPage;
