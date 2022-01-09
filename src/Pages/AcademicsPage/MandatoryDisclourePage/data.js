import AntiRaggingPage from "./CommiteePages/AntiRagging";
import AntiRaggingSquad from "./CommiteePages/AntiRaggingSquad";
import CtpaPage from "./CommiteePages/CTPA";
import GriReadressalPage from "./CommiteePages/GrievanceRedressal";
import InstituteInductionPage from "./CommiteePages/InstituteInductionPage";
import InternalComplaintCommitteePage from "./CommiteePages/InternalComplaintCommittee";
import InternalQualityAssurancePage from "./CommiteePages/InternalQuality";
import KashmiriStudentPage from "./CommiteePages/KashmiriStudent";
import OrganizationaChartPage from "./CommiteePages/OrganizationChart";
import SgrcPage from "./CommiteePages/SGRCPage";
import STSCPage from "./CommiteePages/ST-SC";
import StudentCounsilCommitteePage from "./CommiteePages/StudentCounsillCommittee";
import StudentDisciplinaryCounsilPage from "./CommiteePages/StudentDisciplinary";
import WomenCellPage from "./CommiteePages/WomenCell";

export const commitesList = [
  "Organizational chart and process",
  "Grievance redressal mechanism for faculty and students",
  "ST/SC cell committee",
  "Anti ragging committee",
  "Anti ragging squad",
  "CTPA",
  "Institue induction program cell",
  "Internal complaint committee",
  "Internal quality assurance cell",
  "Kashmiri students grievance redressal",
  "SGRC",
  "Student disciplianry counsil",
  "Student counselling committee",
  "Women cell",
];

export const RoutingData = [
  {
    title: "Organizational chart and process",
    component: <OrganizationaChartPage />,
    link: "organizational-chart-and-process",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Forganization-chart-mitrc.jpg?alt=media&token=b298fd5d-282d-43de-b786-1cd86e37af8c",
  },
  {
    title: "Grievance redressal mechanism for faculty and students",
    component: <GriReadressalPage />,
    link: "grievance-redressal-mechanism-for-faculty-and-students",
  },
  {
    title: "ST/SC cell committee",
    component: <STSCPage />,
    link: "st-sc-cell-committee",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FCaste%20Based%20Discrim2018-2019(English).pdf?alt=media&token=539a61c4-a11d-4852-865e-678bf01970cc",
  },
  {
    title: "Anti ragging committee",
    component: <AntiRaggingPage />,
    link: "anti-ragging-committee",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FAnti%20Ragging%20Committee.pdf?alt=media&token=5ac72c79-547f-4916-b6cc-9045ec76ee50",
  },
  {
    title: "Anti ragging squad",
    component: <AntiRaggingSquad />,
    link: "anti-ragging-squad",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FAnti%20Ragging%20Squad.pdf?alt=media&token=cbb1cbb7-c3f6-4434-b408-021e3978730a",
  },

  {
    title: "CTPA",
    component: <CtpaPage />,
    link: "ctpa",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FCTPA.pdf?alt=media&token=10cd112b-fe89-4f44-8263-c569312f0bad",
  },
  {
    title: "Institue induction program cell",
    component: <InstituteInductionPage />,
    link: "institue-induction-program-cell",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FInstitute%20Induction%20Programm%20Cell.pdf?alt=media&token=63c11ec5-47f2-4ef6-9f42-ee750029b67f",
  },
  // ///////////////////
  {
    title: "Internal complaint committee",
    component: <InternalComplaintCommitteePage />,
    link: "internal-complaint-committee",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FInternal%20Complaint%20Committee.pdf?alt=media&token=3673c55c-43fd-404a-a246-bda320e56f68",
  },
  {
    title: "Internal quality assurance cell",
    component: <InternalQualityAssurancePage />,
    link: "internal-quality-assurance-cell",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FInternal%20Quality%20Assurance%20Cell.pdf?alt=media&token=784009f3-0d80-447f-a168-eadbf944d91a",
  },

  {
    title: "Kashmiri students grievance redressal",
    component: <KashmiriStudentPage />,
    link: "kashmiri-students-grievance-redressal",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FKashmiri%20Students%20Grievance%20Redressal.pdf?alt=media&token=d4354ab2-f844-4643-aa0c-69cd42ef94cc",
  },
  {
    title: "SGRC",
    component: <SgrcPage />,
    link: "sgrc",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FSGRC.pdf?alt=media&token=7e017ecd-d67c-4f88-80bc-cb27dc9ca14e",
  },
  ////////////////////

  {
    title: "Student disciplianry counsil",
    component: <StudentDisciplinaryCounsilPage />,
    link: "student-disciplianry-counsil",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FStudent%20Disciplinary%20Council.pdf?alt=media&token=2521dab5-e05c-4807-a0d0-503cae2075a2",
  },
  {
    title: "Student counselling committee",
    component: <StudentCounsilCommitteePage />,
    link: "student-counselling-committee",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FStudents%20Counselling%20Committee.pdf?alt=media&token=0ff12e04-5f02-41bb-87e8-dcb44f040219",
  },

  {
    title: "Women cell",
    component: <WomenCellPage />,
    link: "women-cell",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FWomen%20Cell.pdf?alt=media&token=cf3c51a0-d510-476f-acc8-ad0bfff8272c",
  },
];
