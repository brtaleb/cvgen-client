import React, {useEffect} from 'react'
import DefaultField from "./fields/DefaultField";
import DetailedListElement from "./fields/DetailedListElement";
import Sortable from 'sortablejs'
import ImageField from "./fields/ImageField";
import HeaderField from "./fields/HeaderField";
import PersonalInfoField from "./fields/PersonalInfoField";

const BuilderBody = () => {
    const leftContentRef = React.createRef();
    const rightContentRef = React.createRef();

    useEffect(() => {
        new Sortable(leftContentRef.current, {
            group: 'shared',
            handle: '.handle',
            animation: 250,
            ghostClass: 'ghost',
            draggable: '.draggable',
            onSort: handleOrderChange
        });

        new Sortable(rightContentRef.current, {
            group: 'shared',
            handle: '.handle',
            animation: 250,
            ghostClass: 'ghost',
            draggable: '.draggable',
            onSort: handleOrderChange
        });
    })

    const handleOrderChange = (e) => {
        console.log("Order Change", e);
    }

    const inputChange = (newInput) => {
        console.log(newInput);
    }

    const headerInputChange = (newHeaderInput) => {
        console.log(newHeaderInput);
    }

    const personalInputChange = (newInfoInput) => {
        console.log(newInfoInput);
    }

    return (
        <div className="BuilderBody">
            <div className="cvBody">
                <div className="cvLeftContent">
                    <div className="cvLeftDraggable" ref={leftContentRef}>
                        <ImageField imgSrc="/image.jpg"/>
                        <PersonalInfoField
                            adress="199 Walnut St., Suite 6 Lockport, NY 14094"
                            contact={{phone: "888000111", email: "john.doe@email.com"}}
                            linkedin="linkedin.com/in/johndoe"
                            personalInfoInput={personalInputChange}
                        />
                    </div>
                </div>

                <div className="cvRightContent">
                    <HeaderField
                        name="John Doe"
                        title="Marketing Manager"
                        summary="Detail-oriented individual with five years of management experience looking to secure an Agile Project Manager position with ABC Company."
                        headerInputChange={headerInputChange}
                    />

                    <div className="cvRightDraggable" ref={rightContentRef}>
                        <DefaultField fieldType="Education">
                            <DetailedListElement
                                inputChange={inputChange}
                                formatedDate="04.2009 - 11.2011"
                                title="XYZ Company"
                                subtitle="Junior Project Manager"
                                summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                            />
                            <DetailedListElement
                                inputChange={inputChange}
                                formatedDate="04.2009 - 11.2011"
                                title="XYZ Company"
                                subtitle="Junior Project Manager"
                                summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan  managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                            />
                        </DefaultField>

                        <DefaultField fieldType="Education">
                            <DetailedListElement
                                inputChange={inputChange}
                                formatedDate="04.2009 - 11.2011"
                                title="XYZ Company"
                                subtitle="Junior Project Manager"
                                summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                            />
                            <DetailedListElement
                                inputChange={inputChange}
                                formatedDate="04.2009 - 11.2011"
                                title="XYZ Company"
                                subtitle="Junior Project Manager"
                                summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                            />
                        </DefaultField>

                        <DefaultField fieldType="Education">
                            <DetailedListElement
                                inputChange={inputChange}
                                formatedDate="04.2009 - 11.2011"
                                title="XYZ Company"
                                subtitle="Junior Project Manager"
                                summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                            />
                        </DefaultField>
                    </div>

                </div>

            </div>
        </div>
    )
};
export default BuilderBody;