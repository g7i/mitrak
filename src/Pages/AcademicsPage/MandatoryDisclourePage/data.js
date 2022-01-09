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
  },
  {
    title: "Anti ragging committee",
    component: <AntiRaggingPage />,
    link: "anti-ragging-committee",
  },
  {
    title: "Anti ragging squad",
    component: <AntiRaggingSquad />,
    link: "anti-ragging-squad",
  },

  {
    title: "CTPA",
    component: <CtpaPage />,
    link: "ctpa",
  },
  {
    title: "Institue induction program cell",
    component: <InstituteInductionPage />,
    link: "institue-induction-program-cell",
  },
  // ///////////////////
  {
    title: "Internal complaint committee",
    component: <InternalComplaintCommitteePage />,
    link: "internal-complaint-committee",
  },
  {
    title: "Internal quality assurance cell",
    component: <InternalQualityAssurancePage />,
    link: "internal-quality-assurance-cell",
  },

  {
    title: "Kashmiri students grievance redressal",
    component: <KashmiriStudentPage />,
    link: "kashmiri-students-grievance-redressal",
  },
  {
    title: "SGRC",
    component: <SgrcPage />,
    link: "sgrc",
  },
  ////////////////////

  {
    title: "Student disciplianry counsil",
    component: <StudentDisciplinaryCounsilPage />,
    link: "student-disciplianry-counsil",
  },
  {
    title: "Student counselling committee",
    component: <StudentCounsilCommitteePage />,
    link: "student-counselling-committee",
  },

  {
    title: "Women cell",
    component: <WomenCellPage />,
    link: "women-cell",
  },
];
