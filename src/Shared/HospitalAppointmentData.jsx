const HospitalDetails = [
    {
        label : "Patient's Name",
        name:"patientsName",
        fieldType:"text",
        required:true,
    },
    {
        label : "Hospital",
        name:"hospital",
        fieldType:"dropdown",
        options:["Narayana health City, bangalore","Apollo Hospitals, Chennai","Narayana Kolkata","CMC ,Vellore","Other"],
        required:true,
    },
    {
        label : "Attendent 1",
        name:"attendent1",
        fieldType:"text",
    },
    {
        label : "Attendent2",
        name:"attendent2",
        fieldType:"text",
    },
    {
        label : "Emergency Contact",
        name:"contact",
        fieldType:"tel",
        required:true,
    },
    {
        label : "Email",
        name:"email",
        fieldType:"email",
        required:true,
    },
    {
        label : "Medical Condition",
        name:"medicalCondition",
        fieldType:"dropdown",
        options:["Cardiology","Oncology","Gastreotology","Dermitology","other"],
        required:true,
    }
    
]

export default HospitalDetails