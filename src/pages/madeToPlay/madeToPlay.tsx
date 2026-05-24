import React, { useEffect } from "react";
import {
  Paragraph,
  Page,
  TextComponent,
  CoverImage,
} from "../../components";
import { TextType } from "../../types/text";
import {
  finalDesigns,
  sectionEight,
  sectionFive,
  sectionFour,
  sectionNine,
  sectionOne,
  sectionSeven,
  sectionSix,
  sectionTen,
  sectionThree,
  sectionTwo,
} from "./constants";
import {
  Changes,
  DesignSystem,
  FinalDesign,
  FinalDesignSection,
  Gigamap,
  GuidedPlay,
  Illustrations,
  ImageContainer,
  Observation,
  Photography,
  Process,
  SectionEight,
  SectionFive,
  SectionFour,
  SectionNine,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionTen,
  SectionThree,
  SectionTwo,
  UserTesting,
} from "./madeToPlay.styles";
import ChangesImage from "../../images/madeToPlay/changes.png";
import DesignSystemImage from "../../images/madeToPlay/designSystem.png";
import GigamapImage from "../../images/madeToPlay/gigamap.png";
import GuidedPlayImage from "../../images/madeToPlay/guidedplay1.png";
import IllustrationsImage from "../../images/madeToPlay/illustrations.png";
import MadeToPlayCoverImage from "../../images/madeToPlay/madeToPlayCover.png";
import ObservationsImage from "../../images/madeToPlay/observations.png";
import PhotographyImage from "../../images/madeToPlay/photography.png";
import ProcessImage from "../../images/madeToPlay/process1.png";
import UserTestingImage from "../../images/madeToPlay/usertesting.png";
import {
  changesImageDesc,
  designSystemImageDesc,
  gigamapImageDesc,
  guidedPlayImageDesc,
  illustrationsImageDesc,
  madeToPlayCoverImageDesc,
  observationsImageDesc,
  photographyImageDesc,
  processImageDesc,
  usertestingImageDesc,
} from "../../images/madeToPlay/imagedescriptions";
import { $white } from "../../assets/colors";

const MadeToPlayPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = $white;
  }, []);

  return (
    <Page>
      <TextComponent
        type={TextType.SUBTITLE}
        text="Made To Play | Design Capstone"
      />
      <TextComponent
        type={TextType.HEADER}
        text="a do-it-yourself guide and handbook for parental monitoring"
      />
      <SectionOne>
        {sectionOne.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionOne>
      <CoverImage alt={madeToPlayCoverImageDesc} src={MadeToPlayCoverImage} />
        <TextComponent
          type={TextType.SUBHEADER}
          text="01 Research and Planning"
        />
        <SectionTwo>
          {sectionTwo.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionTwo>
        <Gigamap alt={gigamapImageDesc} src={GigamapImage} />
        <ImageContainer>
          <Process alt={processImageDesc} src={ProcessImage} />
          <GuidedPlay alt={guidedPlayImageDesc} src={GuidedPlayImage} />
        </ImageContainer>
        <TextComponent type={TextType.SUBHEADER} text="02 Branding" />
        <SectionThree>
          {sectionThree.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <DesignSystem alt={designSystemImageDesc} src={DesignSystemImage} />
        </SectionThree>
        <SectionFour>
          {sectionFour.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionFour>
        <Illustrations alt={illustrationsImageDesc} src={IllustrationsImage} />
        <SectionFive>
          {sectionFive.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <Photography alt={photographyImageDesc} src={PhotographyImage} />
        </SectionFive>
        <TextComponent type={TextType.SUBHEADER} text="03 User Testing" />
        <SectionSix>
          {sectionSix.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <UserTesting alt={usertestingImageDesc} src={UserTestingImage} />
        </SectionSix>
        <SectionSeven>
          <Observation alt={observationsImageDesc} src={ObservationsImage} />
          {sectionSeven.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionSeven>
        <SectionEight>
          {sectionEight.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <Changes alt={changesImageDesc} src={ChangesImage} />
        </SectionEight>
        <TextComponent type={TextType.SUBHEADER} text="04 Final Designs" />
        <SectionNine>
          {sectionNine.map((item) => (
            <Paragraph text={item.text} />
          ))}
        </SectionNine>
      <FinalDesignSection>
        {finalDesigns.map((item) => (
            <FinalDesign src={item.src} alt={item.altText} />
        ))}
      </FinalDesignSection>
        <TextComponent type={TextType.SUBHEADER} text="05 Impact" />
        <SectionTen>
          {sectionTen.map((item) => (
            <Paragraph
              title={item.title}
              text={item.text}
              link={item.link}
              linkText={item.linkText}
            />
          ))}
        </SectionTen>
    </Page>
  );
};

export default MadeToPlayPage;
