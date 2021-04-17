import React from 'react';

const ReturnServices = (props) => {
    const services = [];

    if (props && props.provider) {
        if (props.provider.hasAdoption) { services.push("Adoption")}
        if (props.provider.hasChildcare) { services.push("Childcare")}
        if (props.provider.hasClothing) { services.push("Clothing")}
        if (props.provider.hasCrisisCounseling) { services.push("Crisis Counseling")}
        if (props.provider.hasDentalCare) { services.push("Dental Care")}
        if (props.provider.hasDisability) { services.push("Disability")}
        if (props.provider.hasDisaster) { services.push("Disaster")}
        if (props.provider.hasDomesticViolence) { services.push("Domestic Violence")}
        if (props.provider.hasEducation) { services.push("Education")}
        if (props.provider.hasElderServices) { services.push("Elder Services")}
        if (props.provider.hasEmploymentServices) { services.push("Employment Services")}
        if (props.provider.hasFoodAssistance) { services.push("Food Assistance")}
        if (props.provider.hasHIVServices) { services.push("HIV Services")}
        if (props.provider.hasImmigration) { services.push("Immigration")}
        if (props.provider.hasInfoReferral) { services.push("Info/Referral")}
        if (props.provider.hasMedicalCare) { services.push("Medical Care")}
        if (props.provider.hasMentalHealth) { services.push("Mental Health")}
        if (props.provider.hasPregnancyServices) { services.push("Pregnancy Services")}
        if (props.provider.hasPrescriptionAssistance) { services.push("Prescription Assistance")}
        if (props.provider.hasShelters) { services.push("Shelters")}
        if (props.provider.hasSubstanceAbuse) { services.push("Substance Abuse")}
        if (props.provider.hasTransportation) { services.push("Transportation")}
        if (props.provider.hasVeterans) { services.push("Veterans")}
        if (props.provider.hasVeterinary) { services.push("Veterinary")}
        if (props.provider.hasVoterRegistration) { services.push("Voter Registration")}
        if (props.provider.hasVisionCare) { services.push("Vision Care")}
        if (props.provider.hasOther) { services.push("Other")}

    }
    
    return (
        <div>
            <h4>Services available:</h4> 
            <ul>
                {services.map((data) => (
                    <li key = {data}>{data}</li>
                ))}
            </ul>
        </div>
    ) 
}

export default ReturnServices;