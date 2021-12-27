import React from 'react'
import Banner from '../../../components/Banner';
import { Container, FlexContainer, HalfImage, Heading, Paragraph } from '../../../components/styledComponents/GlobalComponents';
import Layout from '../../../constants/Layout';

const MagazinePage = () => {
    return (
      <Layout>
        <Banner
          bannerHeading="College Daze - The Magazine"
          bannerDescription="MITRC | ALWAR"
        />
        <Container>
          <FlexContainer>
            <HalfImage
              src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fcollege-daze%2FCover-_Page_2019-1140x680.jpg?alt=media&token=43df00cc-43e7-4d7a-bb14-4d967760aa40"
              alt="college magazine"
              style={{ width: "40vw" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "3vw",
              }}
            >
              <Paragraph>
                “You don’t write because you want to say something… you write
                because you have something to say.”
              </Paragraph>
              <Paragraph>–Scott Fitzgerald</Paragraph>
              <Paragraph>
                One more year of another new edition of college magazine
                “College Daze”. It is an ideal forum for exchange of information
                for faculties, staff members, students and the anonymous readers
                with a collection of inspiring and instructive articles about
                the college and up-coming technological breakthroughs.
              </Paragraph>
              <Paragraph>
                It is the most appropriate medium of acknowledging and rewarding
                students’ and staff‘s sincere efforts they put in various
                academic and co-curricular activities. It is not only a book but
                a souvenir for recording events, fond memories and creative
                writing which is informative and resourceful.
              </Paragraph>
              <Paragraph>
                “Growth is never by mere chance; it is the result of forces
                working together.”
              </Paragraph>
              <Paragraph>–James Cash Penny</Paragraph>
              <Paragraph>
                Keeping the above lines, the Editorial Board of College Daze is
                committed to inspire and motivate the young minds and to tune
                them into future engineers and budding managers.
              </Paragraph>
            </div>
          </FlexContainer>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3vh",
            paddingBottom: "2vh",
          }}
        >
          <Paragraph color="#32404D">Patron</Paragraph>
          <Paragraph>Smt. Bimala Devi</Paragraph>
          <Paragraph color="#32404D">Advisors</Paragraph>
          <Paragraph>Mr. Ashok Agarwal (Executive Director)</Paragraph>
          <Paragraph>Mr. Amit Choudhary (Executive Director)</Paragraph>
          <Paragraph>Prof. S. K. Sharma (Director)</Paragraph>
          <Paragraph>Mr. Neeraj Jain (Dean Academics)</Paragraph>
          <Paragraph>Mr. Vikas Mahalawat (Dean Student’s Affairs)</Paragraph>
          <Paragraph color="#32404D">Editor-in-chief</Paragraph>
          <Paragraph>
            Mr. Rahul Bhattacharya (Asst. Prof., Department of Applied Science &
            Humanities )
          </Paragraph>
          <Paragraph color="#32404D">Editor</Paragraph>
          <Paragraph>Ms. Richa Gautam</Paragraph>
          <Paragraph>(Asst. Prof., Department of CSE)</Paragraph>
          <Paragraph>
            Ms. Vineeta Singh (Asst. Prof., Department of EE)
          </Paragraph>
          <Paragraph>
            Ms. Parul Gupta (Asst. Prof., Department of ECE)
          </Paragraph>
          <Paragraph>
            Mr. Ranjan Patel (Asst. Prof., Department of ME)
          </Paragraph>
          <Paragraph>
            Mr. Rajesh Kumar (Asst. Prof., Department of Management Studies)
          </Paragraph>
          <Paragraph>
            Mr. Pawan Taneja (Asst. Prof., Department of CE)
          </Paragraph>
          <Paragraph>Ms. Vaishali Gupta (TPO)</Paragraph>
          <Paragraph color="#32404D">Creative Design</Paragraph>
          <Paragraph>
            Mr. Rahul Bhattacharya (Asst. Prof., Department of Applied Science &
            Humanities )
          </Paragraph>
          <Paragraph>
            Mr. Sanjay Babu Sharrma (Asst. Prof., Department of CSE )
          </Paragraph>
          <Paragraph>Mr. Sudhir Ram (Graphics Designer )</Paragraph>
          <Paragraph color="#32404D">Publisher</Paragraph>
          <Paragraph>Dr. S. K. Sharma (Director)</Paragraph>
          <Paragraph>Vill. Jharkhera, Sirmoli Road, 6th Mile Stone,</Paragraph>
          <Paragraph>Tijara Road, Alwar Rajasthan – 301028</Paragraph>
        </Container>
      </Layout>
    );
}

export default MagazinePage
