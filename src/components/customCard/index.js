import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./index.css";

const CustomCard = (props) => {
  return (
    <Card className="card" raised>
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="h5" style={{ fontSize: 14 }}>
            <strong>{(props.total * 100) / props.target}%</strong> Complete
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="body1" style={{ fontSize: 14 }}>
              Total Sales: {props.total} Crore
            </Typography>
            <Typography variant="body1" style={{ fontSize: 14 }}>
              Total Sales: {props.target} Crore
            </Typography>
          </div>

          <span
            className={
              (props.total * 100) / props.target >= 75
                ? "greenBg"
                : (props.total * 100) / props.target <= 75
                ? (props.total * 100) / props.target <= 20
                  ? "redBg"
                  : "goldBg"
                : null
            }
          >
            {(props.total * 100) / props.target >= 75
              ? "On Track"
              : (props.total * 100) / props.target <= 75
              ? (props.total * 100) / props.target <= 20
                ? "At Risk"
                : "Off Track"
              : null}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
