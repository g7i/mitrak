import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { BulletPoint, ComplaintButton, Heading2 } from "./styles";

const CtpaPage = () => {
  return (
    <div>
      <Heading style={{ color: "blue" }}>
        CIGARETTE & TOBACCO PRODUCT ACT PROTECTION COMMITTEE
      </Heading>
      <Heading style={{ color: "red" }}>
        TOBACCO FREE MITRC (CHOOSE LIFE,NOT TABOCCAO)
      </Heading>
      <Paragraph>
        The Cigarettes and Other Tobacco Products (Prohibition of Advertisement
        and Regulation of Trade and Commerce, Production, Supply and
        Distribution) Act, 2003 or COTPA, 2003 is an Act of Parliament of
        India enacted in 2003 to prohibit advertisement of, and to provide for
        the regulation of trade and commerce in, and production, supply and
        distribution of cigarettes and other tobacco products in India. The Act
        prohibits smoking of tobacco in public places, except in special smoking
        zones in hotels, restaurants and airports and open spaces. Places where
        smoking is restricted include auditoriums, movie theatres, hospitals,
        public transport (aircraft, buses, schools, trains, metros, monorails,
        taxis,) and their related facilities (airports, bus stands/stations,
        railway stations), restaurants, hotels, bars, pubs, amusement centres,
        offices (government and private), libraries, courts, post offices,
        markets, shopping malls, canteens, refreshment rooms, banquet halls,
        discothèques, coffee houses, educational institutions and parks. Smoking
        is allowed on roads, inside one's home or vehicle. The meaning of open
        space has been extended to mean such spaces which is visited by public,
        and includes open auditorium, stadium, bus stand.
      </Paragraph>

      <Paragraph>
        A Special CTPA Committee was constituted for implementation & protection
        of CTPA Act 2003 at this Institute. The role of this Committee is to
        ensure :
      </Paragraph>

      <BulletPoint>
        <li>
          1. Tobacco products cannot be sold to person below the age of 18
          years, and in places within 100 yards radius from the outer boundary
          of institute Protection of Section-6b
        </li>
        <li>Campus should remain Smoking Free.</li>
        <li>Appropriate NO SMOKING SIGNAGES are displayed in Campus.</li>
        <li>
          Take action on any compliant of non-compliance of smoke free
          regulations.
        </li>
        <li>
          Usage of print and electronic media to inform public about the
          smoke-free laws.
        </li>
      </BulletPoint>

      <Paragraph>FINE UNDER COTPA,2003</Paragraph>

      <BulletPoint>
        <li>
          Prohibition of smoking in the Institute or Near Institute Campus – Rs.
          200/-By Section 21
        </li>
        <li>
          Prohibition of sale of tobacco products near Institute Campus – Rs.
          200 .By Section- 24
        </li>
      </BulletPoint>
    </div>
  );
};

export default CtpaPage;
