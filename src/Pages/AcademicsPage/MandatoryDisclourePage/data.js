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
    title: "Grievance redressal mechanism (SGRC)",
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
    component: <AntiRaggingPage />,
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
  // {
  //   title: "SGRC",
  //   component: <SgrcPage />,
  //   link: "sgrc",
  //   pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FSGRC.pdf?alt=media&token=7e017ecd-d67c-4f88-80bc-cb27dc9ca14e",
  // },
  ////////////////////

  {
    title: "Student disciplianry council",
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


export const publicRoutingData = [
  {
    title: "Extension of Approval by AICTE",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2FEOA_Report%2021-22.PDF?alt=media&token=1e3d9ce4-699d-4164-b6ad-c398ae3a1958"
  },
  {
    title: "Building Safety Certificate",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2Fbuilding%20safety%20up%20to%20Feb%2024.jpg?alt=media&token=309245bc-a6e7-4cef-882c-8bd1e0c3d88d"
  },
  {
    title: "Fire Safety Certificate",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2Fbuilding%20safety%20up%20to%20Feb%2024.jpg?alt=media&token=309245bc-a6e7-4cef-882c-8bd1e0c3d88d"
  },
  {
    title: "Land Certificate",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2Farchitect%20certificate%20new.pdf?alt=media&token=14925f2a-b00e-49ba-bc6c-9fd7fb950ed5"
  },
  {
    title: "Water Quality Certificate",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2Fwater%20testing%2017-18%20001.jpg?alt=media&token=3f011ed7-689a-4b20-9bbc-f62fdda6499e"
  },
  {
    title: "NOC issued by Govt",
    pdf: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FPublic%20Mandatory%20Disclosure%2Farchitect%20certificate%20new.pdf?alt=media&token=14925f2a-b00e-49ba-bc6c-9fd7fb950ed5"
  }
]

export const publicTables = [
  {
    heading: "INSTITUTE GENERAL INFORMATION",
    header: [
        "SL. No.",
        "INFORMATION",
        "DETAILS"
    ],
    tableData: [
      [
        "1",
        "NAME OF THE INSTITUTE",
        "MODERN INSTITUTE OF TECHNOLOGY & RESEARCH CENTRE ALWAR"
      ],
      [
          "2",
          "PERMANENT ID",
          "1-4331903"
      ],
        [
            "3",
            "REAP CODE",
            "060"
        ],
        [
            "4",
            "COMPLETE ADDRESS WITH PIN CODE",
            "6TH MILE STONE,  DELHI-TIJARA STATE HIGHWAY,SIRMOLI ROAD-VILLAGE JHARKHERA, ALWAR(RAJASTHAN-301028)"
        ],
        [
            "5",
            "PRINCIPAL NAME & QUALIFICATION",
            "Dr. S.K. Sharma (B.E, MBA,M.TECH,Phd(CSE) & Phd(Maths)"
        ],
        [
            "6",
            "SCHOOL EMAIL ID",
            "min@mitrc.ac.in,mitrcindia@gmail.com"
        ]
    ]
  },
  {
    heading: "SOCIETY GENERAL INFORMATION",
    header: [
      "SL. No.",
      "INFORMATION",
      "DETAILS"
    ],
    tableData: [
      [
        "1",
        "NAME OF THE SOCIETY",
        "All India Arya Samajis Society for Advance Education & Research” (AIASSAER)"
      ],
      [
        "2",
        "COMPLETE ADDRESS WITH PIN CODE",
        "6TH MILE STONE,  DELHI-TIJARA STATE HIGHWAY,SIRMOLI ROAD-VILLAGE JHARKHERA, ALWAR(RAJASTHAN-301028)"
      ],
      [
        "3",
        "CHAIRPERSON NAME",
        "Mrs. Bimla Devi bimla.chairmanmitrc@gmail.com\n" +
        "Address : Shivaji Park, Alwar- 301001\n" +
        "\n" +
        "\n"
      ],
      [
        "4",
        "SOCIETY EMAIL ID",
        "aiassaer@gmail.com"
      ],
      [
        "5",
        "CONTACT DETAILS (LANDLINE/MOBILE)",
        "0144-2980851/52,9414063671"
      ]
    ]
  },
  {
    heading: "PROGRAMMES\t INFORMATION",
    header: [
      "SL. No.",
      "INFORMATION",
      "DETAILS"
    ],
    center: 2,
    tableData: [
      [
        "1",
        "TOTAL PROGRAMMES ACCREDIATED BY AICTE",
        "07"
      ],
      [
        "2",
        "NAME OF  PROGRAMMES ACCREDIATED BY AICTE",
        "    • B.Tech in Artificial Intelligence & Data Science (UG)\n" +
        "    • B.Tech in Computer Science Engineering (UG)\n" +
        "    • B.Tech in Civil Engineering (UG)\n" +
        "    • B.Tech in Electrical Engineering (UG)\n" +
        "    • B.Tech in Mechanical Engineering (UG)\n" +
        "    • M.Tech in Computer Science Engineering (PG)\n"+
        "    • M.Tech in Production Engineering\n"
      ]
    ]
  },
  {
    heading: "PROGRAMMES DETAIL",
    header: [
      "PROGRAMME",
      "DURATION",
      "ANNUAL FEE"
    ],
    center: 1,
    center2: 2,
    tableData: [
      [
        "B.TECH-AI&DS (60 INTAKE)",
        "4 YEARS",
        "70,000 per Annumn"
      ],
      [
        "B.TECH-CSE (120 INTAKE)",
        "4 YEARS",
        "70,000 per Annumn"
      ],
      [
        "B.TECH-CE (90 INTAKE)",
        "4 YEARS",
        "70,000 per Annumn"
      ],
      [
        "B.TECH-EE (30 INTAKE)",
        "4 YEARS",
        "70,000 per Annumn"
      ],
      [
        "B.TECH-ME (30 INTAKE)",
        "4 YEARS",
        "70,000 per Annumn"
      ],
      [
        "M.TECH-CSE (18 INTAKE)",
        "2 YEARS",
        "70,000 per Annumn"
      ],
      [
        "M.TECH-ME (18 INTAKE)",
        "2 YEARS",
        "70,000 per Annumn"
      ],
    ]
  },
  {
    heading: "FACULTY DETAILS",
    header: [
      "SL. No.",
      "INFORMATION",
      "DETAILS"
    ],
    center: 2,
    tableData: [
      [
        "1",
        "TOTAL FACULTIES",
        "110"
      ],
      [
        "2",
        "FACULTY : STUDENT RATIO",
        "1:20"
      ],
      [
        "3",
        "TOTAL FACULTIES FOR PG PROGRAMMES",
        "24"
      ],
      [
        "4",
        "TOTAL FACULTIES FOR UG PROGRAMMES",
        "110"
      ]
    ]
  },
  {
    heading: "DIRECTOR PROFILE INFORMATION",
    header: [
      "SL. No.",
      "INFORMATION",
      "DETAILS"
    ],
    tableData: [
      [
        "1",
        "NAME OF THE DIRECTOR",
        "Dr. S.K. Sharma"
      ],
      [
        "2",
        "UNIQUE  ID",
        "0658"
      ],
      [
        "3",
        "DATE OF BIRTH",
        "01/07/1968"
      ],
      [
        "4",
        "EDUCATION QUALIFICATION",
        "(B.E, MBA,M.TECH,Phd(CSE) & Phd(Maths)"
      ],
      [
        "5",
        "WORK EXPERIENCE",
        "26 YEARS"
      ],
      [
        "6",
        "SPECIALIZATION",
        "INFORMATION SECURITY"
      ],
      [
        "7",
        "RESEARCH PAPERS",
        "National Journals: 25+, International Journals: 25+, Conferences: 30+"
      ],
      [
        "8",
        "RESEARCH GUIDANCE",
        "10+"
      ]
    ]
  },
  {
    heading: "INSTITUTE INFRASTRUCTURE INFORMATION",
    header: [
      "SL. No.",
      "INFORMATION",
      "DETAILS"
    ],
    tableData: [
      [
        "1",
        "TOTAL CAMPUS AREA",
        "27 Acres"
      ],
      [
        "2",
        "NUMBER OF CLASS ROOMS & CLASS ROOM SIZE",
        "28 & 66 Square Meter EACH"
      ],
      [
        "3",
        "NUMBER OF LABORATORIES &  SIZE",
        "41 & 33 Square Meter EACH"
      ],
      [
        "4",
        "NUMBER OF DRAWING HALLS & SIZE",
        "2 & 132 Square meter EACH"
      ],
      [
        "5",
        "NUMBER OF COMPUTER LABS",
        "25"
      ],
      [
        "6",
        "INTERNET FACILTY",
        "YES ( 500 Mbps) with Fibre"
      ],
      [
        "7",
        "WI FI FACILITY",
        "YES ( WHOLE CAMPUS)"
      ],
      [
        "8",
        "TOTAL TOILETS ( MALE)",
        "20"
      ],
      [
        "9",
        "TOTAL TOILETS ( FEMALE)",
        "20"
      ],
      [
        "10",
        "ONLINE LIBRARY RESOURCE",
        "YES"
      ]
    ]
  },
]