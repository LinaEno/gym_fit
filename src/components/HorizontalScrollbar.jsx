import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import './hideScrollbar.css';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <button style={{width: '24px', background: '#ff2625', border: '2px solid transparent'}} disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <Typography><ArrowBackIosIcon /></Typography>
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <button style={{width: '24px', background: '#ff2625', border: '2px solid transparent'}} disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <Typography> <ArrowForwardIosIcon /></Typography>
    </button>
  );
}

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
    {data.map(item => (
      <Box
        component={'div'}
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 10px"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
