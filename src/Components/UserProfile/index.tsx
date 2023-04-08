import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Link, CardActionArea } from "@mui/material";

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
          <CardMedia image={avatarUrl} style={{ height: 0, paddingTop: "56.25%" }} />
          <Typography variant="body2">
            <Link href={githubUrl}>{githubUrl}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
