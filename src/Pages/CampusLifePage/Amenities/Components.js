import styled from "styled-components";
import {Link} from "react-router-dom";

const PageHead = styled.div`
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid black;
  font-size: 22px;
  width: fit-content;
  padding: 5px 20px;
  font-family: Arial, serif;
  font-weight: 500;
  font-style: italic;
`;
const H4 = styled.h4`
  border-left: 5px solid #1c2f46;
  box-shadow: 1px 1px 6px -2px;
  color: #1c2f46;
  display: table;
  font-family: serif;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  margin: 10px 0;
  padding: 7px;
`;

const Cont = styled.section`
  margin: 30px 0 50px;
  p {
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
    margin: 15px 0 20px;
    text-align: justify;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 15px;
  }
  ul {
    margin-left: 20px;
  }
  li {
    list-style-position: inside;
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 5px;
    
    img.loaded {
      background-color: #324a8a;
      height: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
  a {
    color: #324a8a;
    text-decoration: none;
    font-weight: 500;
    font-family: serif;
    font-size: 15px;
    line-height: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const fac = ["Hostel", "Mess", "Laundry", "Conveyance", "Library", "Gymnasium",
  "Canteen/Cafeteria", "Medical Facility", "Language Lab", "Seminar Hall"];
const links = ["hostel", "mess", "laundry", "conveyance", "library", "gym",
  "canteen", "medical", "language", "seminar"];
export function Main() {
  return (
    <Cont>
      <PageHead>Amenities</PageHead>
      <p>
        Most of us might have heard of tales from our parents and grandparents about how they would travel for kilometers barefoot to go to schools/college.
        To them, having a toilet within accessible range was considered to be a luxury. Today, all of these things are of the past.
        Those luxuries have become a basic amenity and college campus facilities extend way beyond that.
        With holistic development taking a prominent place in the contemporary education system, MITRC gearing up to include state-of-the-art facilities and infrastructure in the campus.
        Emphasis is not only given on curricular aspects but going beyond the classrooms, teachers are encouraging the students to participate in extra-curricular activities which require ample facilities.
        From spacious sports space to well-stocked libraries and ventilated classrooms to modern cafeterias, the management of the institute is compelled to design the campus according to the needs of the students today.
      </p>
      <p>
        Today, all of these things are of the past. Those luxuries have become a basic amenity and school or college campus facilities extend way beyond that.
      </p>
      <p>
        While some people of the older generation might agree that all of this is a direct result of commercialization of education, the fact is that these campus facilities play a pivotal role in improving the work efficiency of both teachers and students. In such a situation, it will be wise on our part to analyze the role of the different campus amenities and discuss the part they play in building the bright future of the students.
        Therefore choosing the right college becomes the focus of every applying student out there. The focus will range from the courses available to the cost of living. But deciding between various institutes often comes down to where they will live and student amenities on offer.
        With holistic development taking a prominent place in the contemporary education system, MITRC gearing up to include state-of-the-art facilities and infrastructure in the campus. Emphasis is not only given on curricular aspects but going beyond the classrooms, teachers are encouraging the students to participate in extra-curricular activities which require ample facilities.
      </p>
      <p>
        From spacious sports space to well-stocked libraries and ventilated classrooms to modern cafeterias, the management of the institute is compelled to design the campus according to the needs of the students today.
      </p>
      <p>Amenities include Student Services and Activities, Sports and Facilities.</p>
      <H4>In MITRC, basic amenities are</H4>
      <ul>
        {fac.map((f, i) => (
          <li key={f}>
            <Link to={`/campus-life/amenities/${links[i]}`}>{f}</Link>
          </li>
        ))}
      </ul>
    </Cont>
  );
}

export function Hostel() {
  return (
    <Cont>
      <PageHead>Hostel</PageHead>
      <p>{
        "Moving from your home into a student’s hostel can be a new experience. There are lot of questions arises in mind of parents as well as students about the Location, Facilities, Food, Security, Cleanliness, Activities, Sports and about Infrastructure of Hostel.\n" +
        "\n" +
        "Hostels in MITRC Alwar satisfies all urging needs of today’s day to day increasing demands. There are separate hostels for Girls & Boys in different block & separate Wardens are appointed on each floor to check entry/ exit of intruders. \n" +
        "The accommodation capacity is 190 & 100 of Boys & Girls Hostel respectively.\n" +
        "Both Hostels are located inside the College Campus sunder the lap of Aravalli Hills. The Hostels are located in Pollution Free Environment.\n" +
        "Entry of boy’s in girl’s hostel is strictly prohibited. There is an amicable ambience in hostel as Ragging is banned and Seniors support fresher’s. Some outsider faculties who always motivates and even help students not only during exams but also act as local guardian making them hostel feel home. \n"
      }</p>
      <H4>Infrastructure Facilities</H4>
      <ul>
        {[
          "Drinking Water purified by RO with Water Cooler is available 24*7",
          "Electricity is available 24*7. Electricity provided by 125KVA Generator in case of Mains Power Supply failure",
          "Solar Panels are Installed",
          "Separate Washrooms are attached with every room",
          "Internet Facility is provided in whole hostel area through Wi-Fi Access Points which are connected through Optical Fiber of BSNL ISP",
          "Accommodation facility for Parents/Guardians",
          "Cleaning Hostel Premises with Toilet Cleaner, Floor Cleaner on daily basis",
          "As per COVID 19 Guidelines, sanitization done on daily basis"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Medical Facilities</H4>
      <ul>
        {[
          "Twice a week a doctor comes for a regular check up.",
          "One can avail first aid facility as it aims to preserve life, prevent further harm and promote recovery.",
          "24×7 Ambulance facility for critical cases taken to city hospital.",
          "An established dispensary in the college premises where all needed medicines are available 24×7.",
          "Necessary Medicines(Antibiotic) & First Aid Box are available at Warden Room/HR Department."
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Catering Facilities</H4>
      <ul>
        {[
          "Hygienic food under the supervision of experts.",
          "Variety of eatables in 4-courses (breakfast, lunch, refreshment, dinner).",
          "Cleanliness is always kept into consideration.",
          "Timings are feasible according to the students.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Entertainment/Celebration</H4>
      <ul>
        {[
          "Indoor /Outdoor games like Volleyball, Cricket, Football, Table Tennis, Lawn Tennis, Basket Ball, Badminton, Carom, Chess etc",
          "Mini functions like Jagran, Festivals Celebration, B’day blasts etc",
          "Mess equipped with LED & DTH",
          "Each Saturday , Inspirational & Motivation Movie Show"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Security</H4>
      <ul>
        {[
          "Guard is available in both Boys & Girls hostel for 24x7",
          "CCTV cameras are installed in Corridor for Surveillance for  monitoring the activity to prevent chaos in Hostel",
          "CCTV Recording Facility is also available"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Inventory Provided To Inmate</H4>
      <ul>
        {[
          "Bed",
          "LED / TubeLight",
          "Book Shelf",
          "Chair",
          "Table",
          "Almira"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Students have to bring their own</H4>
      <ul>
        {[
          "Bedsheets",
          "Blanket",
          "Pillow",
          "Bucket",
          "Other Useful Accessories"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <img key={item} src={`/images/hostel ${item}.jpg`} alt={item.toString()} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function Laundry() {
  return (
    <Cont>
      <PageHead>Laundry</PageHead>
      <p>At MITRC hostels we are taking every step to make students comfortable and feel at home. The Laundry facility has been made available for the student living inside campus. In a day the laundry can wash, dry and press huge load.</p>
      <p>Our Laundry plant is equipped with fully automatic assembly lines for every kind of clothes, fabric and treatments needed. Other than this, use of 100% RO water, eco-friendly Chemicals imported from reputed sources add to our proficiency and enhance our quality commitment. </p>
      <img src="/images/laundry.jpg" alt="Laundry"/>
    </Cont>
  );
}

export function Conveyance() {
  return (
    <Cont>
      <PageHead>Conveyance</PageHead>
      <p>{
        "MITRC Alwar have our own network of buses which are designed as per the government norms and driven by trained and skilled drivers. Our bus network cover all nearby neighborhoods, including local communities and townships (Alwar).\n" +
        "We provides safe and secure bus facility to pick-up and drops our students at notified timings and scheduled stops. "
      }</p>
      <p>It is designed for the convenience of our engineering and management students and staff members who are
        residing outside the campus (MITRC Alwar). This ensures their personal safety, travel reliability and
        punctuality on the campus.</p>
      <p>This transport facility is also used for various educational purposes like Field Trips, Industrial Visits and
        Campus Placement Drives outside the campus, Study Tours, NSS Programme, etc.</p>
      <H4>For Contact</H4>
      <p>
        Mr. Dinesh<br/>
        Bus In-charge (Contact: 9166586634)
      </p>
      <img src="/images/Conveyance 1.jpg" alt="Conveyance"/>
    </Cont>
  );
}

export function Canteen() {
  return (
    <Cont>
      <PageHead>Canteen</PageHead>
      <p>
        <i>Aptly said- “A healthy mind lives in a healthy body”</i>
      </p>
      <p>Keeping this in mind we follow the path of a healthy life. One can always elevate his taste quotient as here canteen is generously rich in flavours which never let one’s taste bud feels that one is far from home . So one can always surprise his taste bud with Desi Tadka (Indian), Chinese, South Indian, Italian, snacks, beverages etc.</p>
      <p>The canteen is located inside the College.</p>
      <H4>Highlights of Canteen</H4>
      <ul>
        {[
          "Food is prepared under strict supervision keeping health & hygiene at priority.",
          "All delectable delights are in economical range so that a mediocre can always join all fun.",
          "Packed food is available with fresh dates only.",
          "Ample of space and great ambience where students can get rid of that drain out from daylong studies with thematic music",
          "It’s Opening & Closing Timings are also flexible so that hostlers can access it even after college hours & can feel home.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <p>The Management of the Canteen is directly under the control of the College Administration.</p>
      <p>{
        "The menu will be planned by the assigned team of Management and instructions will be given to the Contractor. The contract of the Canteen will be renewed every year. The periodical meeting will be conducted by the team of Management and Contractor in order to enhance the function of the Canteen. \n" +
        "Also, suggestions, complaints, and problems of the food consumers are taken into consideration."
      }</p>
      <div className="grid">
        {[1, 2, 3, 4].map(item => (
          <img key={item} src={`/images/Canteen ${item}.jpg`} alt={item.toString()} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function Gym() {
  return (
    <Cont>
      <PageHead>Gymnasium</PageHead>
      <p>The importance of exercise cannot be neglected for good physical and mental health. Benefits of gyms are numerous as it helps to increase the cardiovascular fitness, stronger muscles, better mood, better brain function, stronger bones, more flexibility, increased longevity, decreased weight, decreased risk of many cancers and improved appearance.</p>
      <p>{
        "Keeping this in mind, MITRC Alwar also facilitates its students with a fully-fledged gymnasium having all modern equipments needed to keep the students fit and healthy. The Campus comes into the liveliest mode when hundreds of students staying in hostels are found enjoying the pleasure of these sports as players and audience in evening. \n" +
        "The gym will be closed at certain times for cleaning."
      }</p>
      <H4>Major Fitness Machines & Equipments</H4>
      <p>The gym in MITRC Alwar contains lifting racks and benches with sets of weights; lifting mats with Olympic bars and rubber bumper plates; a full set of dumbbells (2.5kg to 50kg); a dip machine; a glute-ham raise machine; swiss balls and stretching mats. The gym also contains aerobic equipment: Concept II ergometers, treadmills, cross trainers (elliptical machines); exercise bikes; stair-master, versa-climber, multi-gym (mainly upper body).</p>
      <H4>Opening Hours</H4>
      <p>
        (Morning 05:00AM  to 10:00AM) & (Evening 04:00PM  to 08:00PM) <br />
        MONDAY - FRIDAY
      </p>
      <img src="/images/Gym.jpg" alt="Gym"/>
    </Cont>
  );
}

export function Medical() {
  return (
    <Cont>
      <PageHead>Medical</PageHead>
      <p>Health is Wealth and only if your body is healthy your mind would be productive. Knowing and preaching this simple concept of wellbeing we make the student feel home away from home within campus. </p>
      <p>MITRC Alwar has its own dispensary with a well-qualified Doctor and a Pharmacist for looking after the regular health care of the students and staff members. First-aid boxes are also provided at appropriate locations i.e. hostel, workshop, buses etc. to handle emergency situations</p>
      <img src="/images/medical.jpg" alt="Medical"/>
    </Cont>
  );
}

export function Seminar() {
  return (
    <Cont>
      <PageHead>Seminar Hall</PageHead>
      <p>In today`s scenario, lots of research is going on. To discuss about these research, technical aspects, & to upgrade the faculties and students lot of activities like  Seminars, Conferences ,FDP, etc. carried out. So keeping this in mind, MITRC Alwar  has a well-equipped auditorium & Seminar Halls & Conference Room with a combine seating capacity of over 300 people. </p>
      <p>The auditorium is spacious, well ventilated and has well-furnished halls equipped with A.C. A regular venue for conferences, workshops and seminars, this auditorium has all the facilities to enhance the learning process and is a vast space that serves the varied requirements of quality education. </p>
      <p>The objective behind this is to enhance the quality of education. To make this possible, the hall offers facilities such as LCD projectors, screens, white-boards, Audio System for delivering lectures. It also provides ample opportunity for our staff and students to exhibit their discussions.</p>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7].map(item => (
          <img key={item} src={`/images/seminar ${item}.jpg`} alt={item.toString()} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function Library() {
  return (
    <Cont>
      <PageHead>Library</PageHead>
      <p>CONTINUOUS LEARNING IS THE PROCESS OF BEING SUCCESS.</p>
      <p><i>“When in Doubt, Go to the Library”</i></p>
      <p>According to Einstein: <i>“The only thing you absolutely have to know is the location of the library.”</i> The library of an academic institution serves as the mirror to the academic ethos of the institution. It is the heart and soul of an academic institution. The fully-computerized MITRC Library provides a wide range of academic resources for students, faculty and administrative staff. The library sincerely endeavors to make resources readily accessible when and wherever they are needed to enhance and promote the total growth and development of the students. The library constantly guides the students how to access and utilize materials in a variety of formats so that they can continue lifelong learning.</p>
      <p>The MITRC proudly boasts of a fully-computerized library facilitated with premier software like Alice for Windows 6.0 version and Delnet. A huge collection of over 50000 books of latest edition on diverse engineering streams and applied science. More than 5000 CDs/DVDs (E-Books). Regular subscription of over 60 International magazines, 40 National magazines and 08 newspapers. Photo-copying machine. Seating capacity of more than 300 students.</p>
      <H4>Salient Features</H4>
      <ul>
        {[
          "A huge collection of over 50000 books of latest edition on diverse engineering streams and applied science. ",
          "More than 5000 CDs/DVDs (E-Books). ",
          "Regular Subscription of over" +
          "1. 60 International magazines",
          "2. 40 National magazines",
          "3. 08 newspapers.",
          "Photo-copying Machine. ",
          "Seating capacity of more than 300 students. ",
          "Latest Journals",
          "Digital Learning from DELNET "
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="grid">
        {[1, 2, 3].map(item => (
          <img key={item} src={`/images/library ${item}.jpg`} alt={item.toString()} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function Language() {
  return (
    <Cont>
      <PageHead>Language Lab</PageHead>
      <p>In today’s world of technology Language Lab is considered as one of the best ways to prepare the students to meet the upcoming challenges. It is conducted for the enrichment of oral skills. The motto is not only to groom the students at oral skills but to inculcate business ethics as well. In Indian scenario where coming out of shackles of hesitation vis-à-vis the foreign tongue. All the three languages English, German and French is commixed in one room, a mammoth task where communication lab comes to its aid.   For this different tools are used like English Deluxe by which students are able to learn the correct pronunciation & can listen to their recorded voice as well .</p>
      <p>Communication Lab strives to inculcate in its students , effective communication skills that play such an important role on the path to scholarly success such as :</p>
      <H4>Phonetics & Pronunciation</H4>
      <ul>
        {[
          "It helps in the development of the linguistic skills, correct pronunciation and accent.",
          "The regular classes and practice is given so that every pupil can grab the opportunity to learn advanced English as its mother tongue.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Listening & Speaking</H4>
      <p>A very significant part of communication process is observing & listening. We pay the needed attention towards LSRW Skills its Listening, Speaking, Reading & Writing respectively. Whenever we talk of communication, we invariably think about speaking well, making effective presentations etc.</p>
      <p>They go hand in hand when active listening comes then only effective speaking happens. The students are thoroughly taught the different aspects of them.</p>
      <H4>Group Discussion</H4>
      <p>Now a days group discussion is no less important for any activity. One   needs to be handy for the improvement of a personality. It enables one to come out of the shell & shake off   nervousness while facing any circumstance. Our   efforts   to groom the personality of the students various measures go continually like Case Study , Management Skills, Extempore etc. It is a crucial part of business communication because in the business world most of the decisions are taken after a long series of discussion .</p>
      <H4>Seminar Presentation</H4>
      <p>Power Point Presentation is the best & convenient digital way to express data through graphs, diagrams, pictures, pie chart. It is an effective tool to organize ideas & information which helps in learning within very short time in an interesting manner. The use of LCD, Projector and Sound System makes it beneficial. It’s benefits are:</p>
      <ul>
        {[
          "The audio & visual aids helps to make teaching learning more effective and students friendly.",
          "It helps to maintain an eye contact with large audience easily.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <img src="/images/language lab.jpg" alt="Lab"/>
    </Cont>
  );
}

export function Mess() {
  return (
    <Cont>
      <PageHead>Mess</PageHead>
      <p>{
        "The whole world is facing the 2nd wave of the Pandemic, and we are not sure how many waves will occur? It is found those who have a strong immunity are getting recover faster. A healthy diet boosts your immunity.\n" +
        "Mess facility is an integral part of the college which is run by MITRC Mess Employees, It provides wholesome, high quality  balance nutritious & homely food to all Hostlers, Faculty & Staff Members of MITRC Alwar."
      }</p>
      <p>{
        "Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served.\n" +
        "Our priority is to maintain a standard operating procedure, uniformly practiced across various sites with high emphasis on following food safety protocols and compliance with all statutory norms."
      }</p>
      <p>{
        "The mess serves Vegetarian Food only and operates in self service mode. \n" +
        "The menu of the items is designed in consideration with requirements of the students and nutrition is added to make it healthy and complete. The stay in the hostel gives a sense of solidarity amongst the students. Mess caters to the tastes of the students of different region and students with varied culinary preferences."
      }</p>
      <p>Mess menu is planned and managed by the management in consultation with the students.</p>
      <H4>Mess Timing</H4>
      <ul>
        {[
          "Tea: 7:00-8:00 A.M",
          "Breakfast: 08:00 – 08:55 A.M",
          "Lunch: 12:15 – 14:00 P.M",
          "Tea & Snacks: 16:00 – 17:30 P.M",
          "Dinner: 19:00 – 20:00 P.M",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Mess Food Varieties</H4>
      <ul>
        {[
          "BREAKFAST: In Breakfast we provide varieties like Parathas( Aloo Paratha, Palak Paratha, Gobhi Paratha, Chuttney-Paratha, Stuff Paratha), Milk, Upma, Sandwich, Poha, Halwa-Chana etc.",
          "LUNCH : Chappati, Seasonable Vegetable, Pulses/Daal, Rice, Curd/Rayata, Salad, Pickle(Aachar)",
          "TEA & SNACKS : Tea, Rasna (Sometimes in Summer), Lemon Water (Sometimes in Summer), Biscuits & Namkeen, Samosa, Kachori, Pav-Bhaji, Idali-Sambhar, Utpam, Dahi-Balle, Fried Rice, Kofta etc.",
          "DINNER : Chappati, Seasonable Vegetable, Pulses/Daal, Rice, Curd/Rayata, Salad, Pickle(Aachar)",
          "SPECIAL DIET ON SUNDAY : Paneer, Pulses/Daal, Rice, Curd/Rayata, Salad, Pickle(Aachar), Sweets."
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="grid">
        {[1, 2, 3, 4, 5].map(item => (
          <img key={item} src={`/images/mess ${item}.jpg`} alt={item.toString()} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}
