import React, {useEffect} from 'react'
import ImageField from "./fields/ImageField";
import HeaderField from "./fields/HeaderField";
import PersonalInfoField from "./fields/PersonalInfoField";
import FieldsMaker from "./fields/FieldsMaker";

const BuilderBody = ({profilData, font}) => {
  const personalInfo = profilData ? profilData.data.personalInfo : null;

  useEffect(() => {

  })

  const handleOrderChange = (e) => {
    console.log("Order Change", e);
  }

  const headerInputChange = (newHeaderInput) => {
    // console.log(newHeaderInput);
  }

  const personalInputChange = (newInfoInput) => {
    console.log(newInfoInput);
  }

  return (
    <div style={{fontFamily: font}} className="BuilderBody">
      <div className="cvBody">

        <div className="cvLeftContent">
          <ImageField imgSrc="/image.jpg"/>

          {
            personalInfo ?
              <PersonalInfoField
                address={personalInfo.address}
                birthDate={personalInfo.birthDate}
                phone={personalInfo.phone}
                email={personalInfo.email}
                github={personalInfo.github}
                linkedIn={personalInfo.linkedIn}
                website={personalInfo.website}
                fieldsToggle={profilData.layout.activeFields.personalFields}
                personalInputChange={personalInputChange}
              />
              : null
          }

          {
            profilData ?
              <FieldsMaker
                rightField={false}
                fields={profilData.data.fields}
                handleOrderChange={handleOrderChange}
              />
              : null
          }
        </div>

        <div className="cvRightContent">
          {
            personalInfo ?
              <HeaderField
                name={personalInfo.name}
                title={personalInfo.title}
                summary={personalInfo.summary}
                fieldsToggle={profilData.layout.activeFields.personalFields}
                headerInputChange={headerInputChange}
              />
              : null
          }

          {
            profilData ?
              <FieldsMaker
                rightField={true}
                fields={profilData.data.fields}
                handleOrderChange={handleOrderChange}
              />
              : null
          }

        </div>

      </div>
    </div>
  )
};
export default BuilderBody;