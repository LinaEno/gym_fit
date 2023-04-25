import { Stack, Typography } from '@mui/material';
import sport from '../images/sport.jpg'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const bodyStyles =
    bodyPart === item
      ? {
          background: '#fff',
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
        }
      : {
          width: '270px',
          height: '282px',
          cursor: 'pointer',
          gap: '47px',
        };

  const handleStackSlick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  }

  return (
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyStyles}
        onClick={handleStackSlick}
      >
        <img src={sport} alt="dumbbell" className='bodyPart__image' />
        <Typography
          fontSize="24px"
          fontWeight="bold"
          fontFamily="Alegreya"
          color="#fff"
          textTransform="capitalize"
          className='bodyPart__text'
        >
          {item}
        </Typography>
      </Stack>
  );
};

export default BodyPart;
