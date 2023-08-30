/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from './canvas';
import SectionWrapper from '../hoc';
import { technologies } from '../constants';
import { Canvas } from '@react-three/fiber';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, '');
