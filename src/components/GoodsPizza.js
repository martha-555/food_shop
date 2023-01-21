/** @format */
import { goodsName } from "../store/GoodsStore";

import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Price from "./ui/Price/Price.tsx";

export default function GoodsPizza() {
  const goodsList = useSelector(goodsName);
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {goodsList["pizza"].map((item) => (
          <Grid xs={2} item sm={4} md={4} key={item.id}>
            <Card
              className="card-style"
              sx={{
                maxWidth: 345,
                bgcolor: "#191919",
                color: "white",
                textAlign: "center",
              }}
            >
              <CardMedia
                sx={{ height: 270 }}
                image={item.image}
                title={item.name}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="show-goods"
              >
                {item.name}
              </Typography>

              <Typography gutterBottom variant="h8" component="div">
                {item.weight}
              </Typography>
              <Typography
                variant="body1"
                color="#dee2e6"
                style={{
                  fontFamily: "cursive",
                  fontSize: "18px",
                  padding: "10px",
                }}
              >
                {item.components}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <Price value={item.price} />
              </Typography>
              <CardActions>
                <IconButton
                  onClick={(e) => e.target.setAttribute("data", item.id)}
                  // data={item.id}
                  size="large"
                  fontSize="inherit"
                  className="add-button"
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon className="add-button" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
