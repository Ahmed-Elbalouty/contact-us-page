import React from 'react';
import { Box, Grid, Typography, Stack, Link, Paper } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import logoImage from '../assets/images/footer-logo.png';
import sms from '../assets/images/sms-tracking.png';
import call from '../assets/images/call-calling.png';
import wats from '../assets/images/WhatsApp.png';
import facebook from '../assets/images/facebook.png';
import watsapp from '../assets/images/wats.png';
import x from '../assets/images/x.png';
import insta from '../assets/images/insta.png';


function FooterSection() {
  const footerLinks = ['الصفحة الرئيسية', 'اعمالنا', 'خدماتنا', 'نبذة عنا', 'تواصل معنا'];

  return (
    <Box sx={{ padding: '40px 20px 0', marginTop: "50px" }}>
      <Grid container spacing={3} justifyContent="space-evenly">

        <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
          <Stack spacing={2} sx={{ maxWidth: 300, mx: 'auto' }}>
            <img src={logoImage} alt="Logo" width="82px" height="69px" />
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: "500" }}>
              نحن نخلق قصة فريدة تجمع بين تسخير التقنيات الحديثة والفن الرقمي للإرتقاء بعلامتك التجارية والوصول بها لتجربة مستخدم استثنائية.
            </Typography>
            <Box >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} gap={1} justifyContent="center" alignItems="center" sx={{ px: 2, py: 1, backgroundColor: "#EDF9FF", borderRadius: "12px" }}>
                    <img src={facebook} height={"auto"} alt="facebook Image" />
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>فيسبوك</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} gap={1} justifyContent="center" alignItems="center" sx={{ px: 2, py: 1, backgroundColor: "#D0B1E730", borderRadius: "12px" }}>
                    <img src={watsapp} height={"auto"} alt="facebook Image" />
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>واتساب</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} gap={1} justifyContent="center" alignItems="center" sx={{ px: 2, py: 1, backgroundColor: "#D0B1E730", borderRadius: "12px" }}>
                    <img src={x} height={"auto"} alt="facebook Image" />
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>اكس</Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} gap={1} justifyContent="center" alignItems="center" sx={{ px: 2, py: 1, backgroundColor: "#EDF9FF", borderRadius: "12px" }}>
                    <img src={insta} height={"auto"} alt="facebook Image" />
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>انستجرام</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ maxWidth: 300, mx: 'auto' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '25px' }}>روابط هامة</Typography>
            <Stack direction="column" spacing={1} sx={{ alignItems: 'flex-start' }}>
              {
                footerLinks.map((link) => {
                  return (
                    <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", textDecoration: "none" }}>
                      <KeyboardDoubleArrowLeftIcon sx={{ color: '#6D319B', fontSize: '14px', ml: 1 }} />
                      {link}
                    </Link>
                  );
                })
              }
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={2} alignItems="center" sx={{ maxWidth: 300, mx: 'auto' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '25px' }}>تواصل معنا</Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', gap: 2 }}>
              <img src={sms} alt="sms-image" width="35px" height="35px" />
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>البريد الالكتروني</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#606060" }}>example@gmail.com</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', gap: 2 }}>
              <img src={call} alt="sms-image" width="35px" height="35px" />
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>هاتفيا</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#606060" }}>+123 456 7890</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', gap: 2 }}>
              <img src={wats} alt="sms-image" width="35px" height="35px" />
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>واتساب</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#606060" }}>+123 456 7890</Typography>
              </Box>
            </Stack>

          </Stack>
        </Grid>

      </Grid>

      <Box sx={{ borderTop: '1px solid #ddd', mt: 4, paddingBlock: 2, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#59287F', fontSize: '14px' }}>
          <span style={{ color: '#59287F', fontWeight: "bold" }}>Intelligent Solutions</span> © 2024
        </Typography>
      </Box>
    </Box >
  );
}

export default FooterSection;
