import React from "react";
import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import { IKImage, IKContext } from "imagekitio-react";
import { BsBookmarkFill } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const Anchor = styled.a`
  padding: 0.3em;
  color: white;
`;

function MovieDetail(props) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/bbwxfzjdl2zg">
      <div style={{ marginTop: "2em" }}>
        <Grid
          container
          spacing={8}
          style={{
            marginTop: "2em",
            backgroundColor: "#353232",
            padding: "1em",
            justifyContent: "center",
          }}
        >
          {/* Movie poster */}
          <Grid item style={{ alignSelf: "center" }}>
            <IKImage
              path={props.movie.pic_sku + ".jpg"}
              transformation={[
                {
                  height: "700",
                  width: "430",
                },
              ]}
            />
          </Grid>
          {/* Movie Details */}
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Paper
              style={{
                background: "#221F1F",
                color: "#fbf7f5",
                padding: "1.5em",
              }}
            >
              <div
                style={{
                  float: "right",
                  borderRadius: "50px",
                  padding: "1em",
                }}
              >
                <Anchor href="#bookmark">
                  <BsBookmarkFill style={{
                  color: "red"
                }} />
                </Anchor>
                <Anchor href="#share">
                  <FaShareAlt style={{
                  color: "blue"
                }}/>
                </Anchor>
                <Anchor href="#report">
                  {" "}
                  <MdReportProblem style={{
                  color: "orange"
                }} />
                </Anchor>
              </div>
              <div style={{ textAlign: "left" }}>
                <h3>{props.movie.title}</h3> 
                Producer: {props.movie.producer} <br />
                <span>Release Date: {props.movie.year}</span> <br />
                <span>Duration: {props.movie.runtime}</span><br />
                <span>Genre: Action</span>
              </div>
              <p style={{ textAlign: "left" }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </IKContext>
  );
}

export default MovieDetail;
