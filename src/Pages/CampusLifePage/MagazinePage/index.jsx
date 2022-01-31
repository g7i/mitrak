import React from 'react'
import Banner from '../../../components/Banner';
import Layout from '../../../constants/Layout';
import {Cont, H3, H4, PageHead, Right, Wrapper} from "../../../components/styledComponents/New";

const MagazinePage = () => {
    return (
      <Layout>
        <Banner
          bannerHeading="College Daze - The Magazine"
          bannerDescription="MITRC | ALWAR"
        />
        <Wrapper>
          <Cont className="content full">
            <PageHead>COLLEGE DAZE - Magazine</PageHead>
            <p>
              <i>“You don’t write because you want to say something… you write because you have something to say.”</i><br/>
              <strong>– Scott Fitzgerald</strong>
            </p>
            <p>One more year of another new edition of college magazine <i>“College Daze”</i>. It is an ideal forum for exchange of information for faculties, staff members, students and the anonymous readers with a collection of inspiring and instructive articles about the college and up-coming technological breakthroughs.</p>
            <img
              style={{ padding: '0 5vw 2vw' }}
              src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fcollege-daze%2FCover-_Page_2019-1140x680.jpg?alt=media&token=43df00cc-43e7-4d7a-bb14-4d967760aa40"
              alt="img"/>
            <p>It is the most appropriate medium of acknowledging and rewarding students’ and staff‘s sincere efforts they put in various academic and co-curricular activities. It is not only a book but a souvenir for recording events, fond memories and creative writing which is informative and resourceful.</p>
            <p>
              <i>“Growth is never by mere chance; it is the result of forces working together.”</i><br/>
              <strong>– James Cash Penny</strong>
            </p>
            <H4>Patron</H4>
            <ul>
              <li>Smt. Bimala Devi</li>
            </ul>
            <H4>Advisors</H4>
            <ul>
              <li>Mr. Ashok Agarwal (Executive Director)</li>
              <li>Mr. Amit Choudhary (Executive Director)</li>
              <li>Prof. S. K. Sharma (Director)</li>
              <li>Mr. Neeraj Jain (Dean Academics)</li>
              <li>Mr. Vikas Mahalawat (Dean Student’s Affairs)</li>
            </ul>
            <H4>Editor-in-chief</H4>
            <ul>
              <li>Mr. Rahul Bhattacharya (Asst. Prof., Department of Applied Science & Humanities )</li>
            </ul>
            <H4>Editor</H4>
            <ul>
              <li>Ms. Richa Gautam (Asst. Prof., Department of CSE)</li>
              <li>Ms. Vineeta Singh (Asst. Prof., Department of EE)</li>
              <li>Ms. Parul Gupta (Asst. Prof., Department of ECE)</li>
              <li>Mr. Ranjan Patel (Asst. Prof., Department of ME)</li>
              <li>Mr. Rajesh Kumar (Asst. Prof., Department of Management Studies)</li>
              <li>Mr. Pawan Taneja (Asst. Prof., Department of CE)</li>
              <li>Ms. Vaishali Gupta (TPO)</li>
            </ul>
            <H4>Creative Design</H4>
            <ul>
              <li>Mr. Rahul Bhattacharya (Asst. Prof., Department of Applied Science & Humanities )</li>
              <li>Mr. Sanjay Babu Sharrma (Asst. Prof., Department of CSE )</li>
              <li>Mr. Sudhir Ram (Graphics Designer )</li>
            </ul>
            <H4>Publisher</H4>
            <ul>
              <li>Dr. S. K. Sharma (Director)</li>
            </ul>
            <br/>
            <H3>Editions</H3>
            <ul>
              <li>
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FMagzine%202019.pdf?alt=media&token=366ef59b-08cf-46b4-bb00-2f32cf082d9a">College Daze 2020-21 Edition</a>
              </li>
              <li>
                <a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FMagzine%202020.pdf?alt=media&token=504121e2-8d54-4609-a7dc-421782884757">College Daze 2019-20 Edition</a>
              </li>
            </ul>
          </Cont>
        </Wrapper>
      </Layout>
    );
}

export default MagazinePage
