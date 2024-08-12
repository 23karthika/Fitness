import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import './Contact.css';
const Contact = () => {
  return (
    <>
     <div className="logo">
                <a href="/"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h3>KineticKraze</h3>
         </div>
      <Box sx={{ my: 8, ml: 10, "& h3": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h3">Contact Our Grocery Shop</Typography>
        <p>
        Many variations on the supermarket began appearing toward the end of the 1900s. Today warehouse stores sell recognized brands at lower prices, often cutting costs by selling groceries directly out of the shipping cartons in a no-frills warehouselike setting. Convenience stores, often attached to a gasoline station, offer snack foods, dairy items, and notions. Wholesale club stores such as Costco or Sam’s Club specialize in selling bulk quantities to club members at deeply discounted prices. Club stores usually charge annual membership fees.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </>
  );
};

export default Contact;