import { ArrowCircleRight } from '@mui/icons-material';
import { Card, CardHeader, CardMedia, CardContent, Typography, Link, CardActionArea, Avatar, Icon } from "@mui/material";

type UserProfileProps = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  followers: number;
  following: number;
  repos: number;
  bio: string;
};

export function UserProfile({ name, avatarUrl, githubUrl, followers, following, repos, bio }: UserProfileProps) {

  if (!UserProfile) {
    return null;
  }
  return (

    <Card
      elevation={0} sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <CardActionArea
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <CardContent
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Avatar sx={{ width: 150, height: 150 }}>
            <CardMedia image={avatarUrl} style={{ height: 140, width: 150, paddingTop: "56.25%" }} />
          </Avatar>
          <CardHeader title={name} />
          <Typography variant="body2">
            <Link href={githubUrl}>
              Perfil no Github
              <Icon>
                <ArrowCircleRight />
              </Icon>
            </Link>
          </Typography>
          <Typography variant="body2">
            Followers
            <CardHeader title={followers} />
          </Typography>
          <Typography variant="body2">
            Following
            <CardHeader title={following} />
          </Typography>
          <Typography variant="body2">
            Repos
            <CardHeader title={repos} />
          </Typography>
          <Typography variant="body2">
            Bio
            <CardHeader title={bio} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
