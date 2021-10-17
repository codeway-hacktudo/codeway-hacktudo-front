import React, {useState} from 'react';
// import useMeasure from 'react-use-measure';
import {useSpring} from '@react-spring/web';
import useMeasure from 'react-use-measure';
import {ContainerProgressBar, Main, Content, ContentFill} from './styles';

interface IProgressBarProps {
  label?: string;
  max?: number;
  min?: number;
  now?: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  label,
  max,
  min,
  now,
}: IProgressBarProps) => {
  // const [open, toggle] = useState(false);
  const [ref, {width}] = useMeasure();
  //  MUDAR NA INTEGRAÇÃO
  const props = useSpring({width: now ? now * 1000 : 0});

  return (
    <ContainerProgressBar>
      {/* <Main ref={ref} onClick={() => toggle(!open)}> */}
      <Main ref={ref}>
        <ContentFill style={props} />
        {/* <Content>{props.width.to((x) => x.toFixed(0))}</Content> */}
      </Main>
    </ContainerProgressBar>
  );
};

export default ProgressBar;
