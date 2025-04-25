import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBlock: "70px", textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px', fontSize: "48px" }}>
          تواصل معنا
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: "16px" }}>
          <Typography variant="h6" sx={{ color: "#59287F", fontWeight: '600' }}>
            الصفحة الرئيسية
          </Typography>
          <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 28, color: '#59287F' }} />
          <Typography variant="h6" sx={{ fontWeight: '600' }}>
            نبذة عنا
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
