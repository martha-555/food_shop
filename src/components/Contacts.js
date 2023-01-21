/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Text from "./ui/Text";
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "black" ? "#1A2027" : "#1A2027",
  backgroundColor: "black",

  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contacts() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="delivery full-height">
        <Grid container spacing={3} className="add-goods ">
          <Grid item xs>
            <Item>
              <Text>
                <h4>Телефони:</h4>
                <p> (097) 010-4010</p>
                <p> (063) 537-5533</p>
              </Text>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Text>
                <h4>Адреси:</h4>
                <p>м. Львів, вул. Кульпарківська, 158в</p>
                <h6>10:00 – 21:30</h6>
                <p>м. Винники, вул. Галицька, 76а</p>
                <h6>11:00 – 22:30</h6>
              </Text>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Text>
                <h4>Email:</h4>
                <p>kvadrat.sushi@gmail.com</p>
              </Text>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
