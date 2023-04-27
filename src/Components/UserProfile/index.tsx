import { UserProfileProps } from '../../Types/userProfile';

import { ArrowCircleRight } from '@mui/icons-material';
import { Card, CardHeader, CardMedia, CardContent, Typography, Link, CardActionArea, Avatar, Icon } from "@mui/material";

export function UserProfile({ user }: UserProfileProps) {

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
          <CardContent>
            <Avatar sx={{ width: 150, height: 150 }}>
              <CardMedia image={user.avatarUrl} style={{ height: 140, width: 150, paddingTop: "56.25%" }} />
            </Avatar>
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              Nome
            </Typography>
            <CardHeader title={user.name} />
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              Perfil no Github
            </Typography>
            <Link href={user.githubUrl}>
              <Icon>
                <ArrowCircleRight />
              </Icon>
            </Link>
          </CardContent>
          <CardContent
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <CardContent>
              <CardHeader
                title={user.followers}
                subheader="Followers"
              />
              <Typography variant="body2">
                Followers
              </Typography>
              <CardHeader title={user.followers} />
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                Following
              </Typography>
              <CardHeader title={user.following} />
            </CardContent>
            <CardContent>
              <Typography variant="body2">
                Repos
              </Typography>
              <CardHeader title={user.repos} />
            </CardContent>
          </CardContent>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography variant="body2">
              Bio
            </Typography>
            <CardHeader title={user.bio} />
          </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
