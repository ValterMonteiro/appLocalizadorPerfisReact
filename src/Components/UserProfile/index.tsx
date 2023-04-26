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
          <CardContent>
            <Avatar sx={{ width: 150, height: 150 }}>
              <CardMedia image={avatarUrl} style={{ height: 140, width: 150, paddingTop: "56.25%" }} />
            </Avatar>
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              Nome
            </Typography>
            <CardHeader title={name} />
          </CardContent>
          <CardContent>
            <Typography variant="body2">
              Perfil no Github
            </Typography>
            <Link href={githubUrl}>
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
              backgroundColor: '#053e85',
            }}>
            <CardContent
              sx={{
                border: '1px solid #0e0e0f'
              }}>
              <Typography variant="body2">
                Followers
              </Typography>
              <CardHeader title={followers} />
            </CardContent>
            <CardContent
              sx={{
                border: '1px solid #0e0e0f'
              }}>
              <Typography variant="body2">
                Following
              </Typography>
              <CardHeader title={following} />
            </CardContent>
            <CardContent
              sx={{
                border: '1px solid #0e0e0f'
              }}>
              <Typography variant="body2">
                Repos
              </Typography>
              <CardHeader title={repos} />
            </CardContent>
          </CardContent>
          <CardContent
            sx={{
              border: '1px solid #0e0e0f',
              backgroundColor: '#053e85'
            }}>
            <Typography variant="body2">
              Bio
            </Typography>
            <CardHeader title={bio} />
          </CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
