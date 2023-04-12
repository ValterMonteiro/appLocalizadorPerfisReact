import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Link, CardActionArea, CircularProgress, Avatar } from "@mui/material";

type UserProfileProps = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
};

export function UserProfile({ name, avatarUrl, githubUrl }: UserProfileProps) {

  if (!UserProfile) {
    return null;
  }
  return (

    <Card>
      <CardActionArea>
        <CardContent>
          <CardHeader title={name} />
          <Avatar sx={{ width: 150, height: 150 }}>
            <CardMedia image={avatarUrl} style={{ height: 140, width: 150, paddingTop: "56.25%" }} />
          </Avatar>
          <Typography variant="body2">
            <Link href={githubUrl}>{githubUrl}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
