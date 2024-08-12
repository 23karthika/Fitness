import React from "react";
import { Box, Typography } from "@mui/material";
import './About.css';
const About = () => {
  return (
    <> <div className="logo">
    <a href="/"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
    <h3>KineticKraze</h3>
</div>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h3": {
            fontWeight: "bold",
            my: 2,
            fontSize: "3rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h3 ": {
              fontSize: "2rem",
            },
          },
        }}
      >
        <Typography variant="h3">Grocery Store Online</Typography>
        <p>
            KKL SuperMarket officially opened for business as an online bookseller on July 16, 1995. Originally, Karthika,Laitha,Kaviya had incorporated the company as Cadabra but later changed the name to Amazon. Bezos is said to have browsed a dictionary for a word beginning with A for the value of alphabetic placement. He selected the name Amazon because it was exotic and different and as a reference to his plan for the company's size to reflect that of the Amazon River, one of the largest rivers in the world. Since its inception, the company's motto has always been "get big fast."
        </p>
        <br />
        <p>
            This comprehensive and evolving cloud computing platform was also born in the 2000s. The first Amazon Web Services (AWS) offerings were launched in 2006 to provide online services for websites and client-side applications. Amazon Elastic Compute Cloud (EC2) and Simple Storage Service (S3) are the backbones of the company's growing collection of web services. The same year, Amazon also launched a cloud computing and video-on-demand service known at the time as Unbox.
            By changing the way people bought books, Amazon also shaped how they read them with the launch of its first Kindle e-reader in 2007. This device helps users browse, buy and read e-books, magazines and newspapers from the Kindle Store.
        </p>
        <br/>
        <p>
            supermarket, large retail store operated on a self-service basis, selling groceries, fresh produce, meat, bakery and dairy products, and sometimes an assortment of nonfood goods. Supermarkets gained acceptance in the United States during the 1930s. The early stores were usually located in reconverted industrial buildings in outlying areas; they had no elaborate display facilities, and their primary advantage was their low prices. During the 1940s and ’50s, they became the major food-marketing channel in the United States, and in the 1950s they spread through much of Europe. The extent to which they have succeeded in various countries has depended on the ability or willingness of producers and wholesalers to adapt their operations to large-scale retailing. The spread of supermarkets has been part of a trend in the developed countries toward reducing costs and simplifying the pattern of marketing.
        </p>
      </Box>
</>
  );
};
export default About;