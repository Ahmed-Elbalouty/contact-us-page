import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import whatsApp from '../assets/images/WhatsApp.png';
import call from '../assets/images/call-calling.png';
import sms from '../assets/images/sms-tracking.png';


const contactCards = [
  {
    image: whatsApp,
    label: 'واتساب',
    number: '0123456789',
  },
  {
    image: call,
    label: 'هاتفياً',
    number: '+20123456789',
  },
  {
    image: sms,
    label: 'البريد الإلكتروني',
    number: 'example@mail.com',
  },
];

function ContactMethods() {
  return (
    <Box
      sx={{
        pt: 3,
        pb: 6,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
      dir="rtl"
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        maxWidth="lg"
        sx={{ margin: '0 auto' }}
      >
        {contactCards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              sx={{
                backgroundColor: '#E7D8F3',
                border: '1px solid #59287F',
                textAlign: 'center',
                padding: 2,
                borderRadius: '12px',
                width: '100%',
                height: '100%',
                minWidth: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: "pointer"
              }}
            >
              <img
                src={card.image}
                alt={card.label}
                style={{ width: '80px', marginBottom: '16px' }}
              />
              <CardContent sx={{ padding: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '32px' }}>
                  {card.label}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: "600" }}>{card.number}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ContactMethods;
