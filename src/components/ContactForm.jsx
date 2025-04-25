import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  Button,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ContactForm() {
  const inputStyles = {
    backgroundColor: '#E7D8F340',
    borderRadius: '16px',
    maxWidth: '400px',
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E7D8F3',
        borderRadius: "16px"
      },
      '&:hover fieldset': {
        borderColor: '#E7D8F3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E7D8F3'
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
      <Card sx={{ width: '100%', maxWidth: 1000, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h3" align="center" sx={{ color: '#59287F', fontSize: '48px', fontWeight: 'bold', mb: 2 }}>
            هل لديك أي أسئلة أو استفسارات, ارسل طلبك!
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#59287F', fontSize: '18px', mb: 4 }}>
            لا تتردد في التواصل معنا, وسيتم الرد عليك فى اسرع وقت.
          </Typography>

          <Grid container spacing={2} justifyContent="center" mb={2}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                fullWidth
                placeholder="الاسم"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#59287F' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                fullWidth
                placeholder="رقم الهاتف"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: '#59287F' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center" mb={2}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                fullWidth
                placeholder="البريد الإلكتروني"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: '#59287F' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                fullWidth
                placeholder="الخدمة"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkIcon sx={{ color: '#59287F' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="center" mb={2}>
            <Grid item xs={12} md={10} lg={8}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  backgroundColor: '#E7D8F340',
                  borderRadius: '16px',
                  padding: 1,
                  border: '1px solid #E7D8F3',
                }}
              >
                <MessageIcon sx={{ color: '#59287F', mt: 1, ml: 1 }} />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="الرسالة"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    '& textarea': {
                      padding: 0,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#59287F',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                paddingX: 5,
                paddingY: 1.5,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
              endIcon={<ArrowBackIcon />}
            >
              أرسل الآن
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactForm;
