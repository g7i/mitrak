import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MitrcImage from "../../../../assets/images/mitrc.png";
import styled from "styled-components";
import { deleteNews, listNews } from "../../../../utils/firebase/news";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LoadingButton } from "@mui/lab";

const ManageNewsPage = () => {
  const [newsList, setNewsList] = React.useState([]);
  React.useEffect(() => {
    listNews().then((news) => {
      setNewsList(news);
    });
  }, []);
  const refreshList = ()=>{
    listNews().then((news) => {
      setNewsList(news);
    });
  }
  return (
    <>
      <FullWidthTabs newsList={newsList} refresh={refreshList} />
    </>
  );
};

const NewsComponent = (props) => {
  const { news , refresh } = props;
  const [loading , setLoading] = useState(false);
  const onDelete = async() => {
    setLoading(true);
    await deleteNews(news.id);
    setLoading(false);
    refresh();
  }

  return (
    <Card sx={{ maxWidth: 345, width: 345 }}>
      <CardMedia
        component="img"
        alt="news-image"
        height="140"
        image={news?.image || MitrcImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {news.title}
        </Typography>
        <DescriptionText variant="body2" color="text.secondary">
          {news.description}
        </DescriptionText>
      </CardContent>
      <CardActions>
        <LoadingButton size="small" color={"error"} variant="contained" loading={loading} onClick={onDelete}>
          Delete
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default ManageNewsPage;

const DescriptionText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const NewsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap : 60px;
  row-gap: 20px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs(props) {
  const { newsList , refresh } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Latest News" {...a11yProps(0)} />
          <Tab label="Useful links" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <NewsListContainer>
            {newsList
              ?.filter((item) => item.type == "new")
              .map((item) => (
                <NewsComponent news={item} refresh={refresh}/>
              ))}
          </NewsListContainer>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <NewsListContainer>
            {newsList
              ?.filter((item) => item.type == "usefullLinks")
              .map((item) => (
                <NewsComponent news={item} refresh={refresh}/>
              ))}
          </NewsListContainer>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
