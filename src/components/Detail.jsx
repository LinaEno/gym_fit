import { Typography, Stack, Button } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// import BodyPartImage from '../assets/icons/body-part.png';
// import TargetImage from '../assets/icons/target.png';
// import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      //   icon: BodyPartImage,
      name: bodyPart,
    },
    {
      //   icon: TargetImage,
      name: target,
    },
    {
      //   icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      sx={{
        flexDirection: { sm: 'row' },
        gap: { sm: '40px', xs: '30px' },
        p: '20px',
        pl: { sm: '60px', xs: '20px' },
        alignItems: 'center',
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography
          sx={{ fontSize: { lg: '64px', xs: '30px' } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '24px', xs: '18px' } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map(item => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: { lg: 100, xs: 40 },
                height: { lg: 100, xs: 50 },
              }}
            >
              <FitnessCenterIcon sx={{
                color: '#ff2625',
                width: { lg: 42, xs: 24 },
                height: { lg: 42, xs: 24 },
              }}/>
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: '30px', xs: '20px' } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
