import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function FAQCard() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Reduced height to add spacing
        padding: '20px 0', // Adds space from top and bottom
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: 'center',
          width: 700,
          maxWidth: '90%',
          resize: 'horizontal',
          overflow: 'auto',
          boxShadow: 3,
          borderRadius: '12px',
          padding: '20px',
          backgroundColor: 'white',
        }}
      >
        <CardOverflow
          variant="solid"
          color="primary"
          sx={{
            flex: '0 0 250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: 'var(--Card-padding)',
          }}
        >
          <Typography textColor="#fff" sx={{ fontSize: 'xl4', fontWeight: 'xl' }}>
            89
          </Typography>
          <Typography textColor="primary.200">
            FAQs answered, see if yours is one of them.
          </Typography>
        </CardOverflow>
        <CardContent sx={{ gap: 1.5, minWidth: 250 }}>
          <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
            />
          </AspectRatio>
          <CardContent>
            <Typography level="title-lg">Need Some Help?</Typography>
            <Typography sx={{ fontSize: 'sm', mt: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </Typography>
          </CardContent>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              '--variant-borderWidth': '2px',
              borderRadius: 40,
              borderColor: 'primary.500',
              mx: 'auto',
            }}
          >
            See FAQ
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
