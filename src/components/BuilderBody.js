import React, {useEffect} from 'react'
import DefaultField from "./fields/DefaultField";
import InfoRow from "./fields/InfoRow";
import Sortable from 'sortablejs'

const BuilderBody = () => {
    const leftContentRef = React.createRef();
    const rightContentRef = React.createRef();

    useEffect(() => {
        new Sortable(leftContentRef.current, {
            group: 'shared',
            handle: '.handle',
            animation: 250,
            ghostClass: 'ghost',
            onSort: handleOrderChange
        });

        new Sortable(rightContentRef.current, {
            group: 'shared',
            handle: '.handle',
            animation: 250,
            ghostClass: 'ghost',
            onSort: handleOrderChange
        });
    })

    const handleOrderChange = (e) => {
        console.log("Order Change", e);
    }

    const inputChange = (newInput) => {
        console.log(newInput);
    }

    return (
        <div className="BuilderBody">
            <div className="cvBody">
                <div className="cvLeftContent" ref={leftContentRef}>

                </div>

                <div className="cvRightContent" ref={rightContentRef}>
                    <DefaultField fieldType="Education">
                        <InfoRow
                            inputChange={inputChange}
                            formatedDate="04.2009 - 11.2011"
                            title="XYZ Company"
                            subtitle="Junior Project Manager"
                            summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                        />
                        <InfoRow
                            inputChange={inputChange}
                            formatedDate="04.2009 - 11.2011"
                            title="XYZ Company"
                            subtitle="Junior Project Manager"
                            summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan  managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                        />
                    </DefaultField>

                    <DefaultField fieldType="Education">
                        <InfoRow
                            inputChange={inputChange}
                            formatedDate="04.2009 - 11.2011"
                            title="XYZ Company"
                            subtitle="Junior Project Manager"
                            summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                        />
                        <InfoRow
                            inputChange={inputChange}
                            formatedDate="04.2009 - 11.2011"
                            title="XYZ Company"
                            subtitle="Junior Project Manager"
                            summary="Responsibilities: managing and leading the project team; recruiting project staff and consultants; developing and maintaining a detailed project plan"
                        />
                    </DefaultField>

                    <DefaultField fieldType="Education">
                        <InfoRow
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
    )
};
export default BuilderBody;