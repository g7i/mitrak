import React,{useState,useEffect}from 'react';
import { listNews, NewsType } from "../../../utils/firebase/news";
import "./News_1.css";
import { NewsComponent } from './News';
import Linkify from 'react-linkify';
import styled from "styled-components";

function News_1() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    try {
      listNews().then((data) => {
        setNewsList(data);
      });
    } catch (error) { }
  }, []);
  return (
    <div class="news_1">
        <div class="box1" style={{width:'100%',height:'30px',backgroundColor:"#E07C24"}} >
                <div class='marquee' >
                    <div class='marqueeContentContainer'> 
                    {newsList
              ?.filter((item) => item.type == "new")
              // .slice(0, 2)
              .map((item) => (
                <NewsComponent
                  news={item}
                  link
                  width={
                    newsList?.filter((item) => item.type == "new").length === 1
                      ? "100%"
                      : "50%"
                  }       
                />
              ))}
                    </div>

                </div>
                
        </div>
        <div class="box1" style={{width:'100%',height:'30px',backgroundColor:"#fff"}}>
                <div class='marquee' >
                    <div class='marqueeContentContainer' >
                    {newsList
              ?.filter((item) => item.type == "usefulLinks")
              .map((item) => (
                <NewsContainer>
                  <a target={"_blank"} href={item.links[0]}>
                    {item.title}
                  </a>
                </NewsContainer>
              ))}
                    </div>

                </div>
                
        </div>
        <div class="box1" style={{width:'100%',height:'30px',backgroundColor:"#1FAA59"}}>
                <div class='marquee' >
                    <div class='marqueeContentContainer' >
                        
                    </div>

                </div>
                
        </div>
    </div>
  )
}

const NewsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  a {
    font-size: 0.5em;
    margin:40px 30px;
    text-decoration: none;

  }
`;

export default News_1;
