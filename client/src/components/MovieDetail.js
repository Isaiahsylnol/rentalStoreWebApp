import React from "react";
import { Grid, Paper } from "@mui/material";
import { IKImage, IKContext } from "imagekitio-react";

function MovieDetail(props) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
        <div style={{float: "right", marginRight: "3em", borderRadius: "50px", backgroundColor: "red", padding: ".5em"}}>Button</div>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2em", backgroundColor: "pink", padding: "1em" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Paper style={{ background: "lightblue" }}>
            <IKImage
              path={props.movie.pic_sku + ".jpg"}
              transformation={[
                {
                  height: "700",
                  width: "430",
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper style={{ background: "green", padding: "1.5em" }}>
            <div style={{ textAlign: "left" }}>
              {props.movie.title} <br />
              Producer: {props.movie.producer} <br />
              Release: {props.movie.year} <br />
              Duration: {props.movie.runtime} <br />
              sku: {props.movie.pic_sku}
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </IKContext>
  );
}

export default MovieDetail;
