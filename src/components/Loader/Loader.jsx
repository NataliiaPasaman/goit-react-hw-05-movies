import { RotatingLines } from  'react-loader-spinner';
import { BoxLoader} from "./Loader.styled";

export const Loader = () => {
  return (
    <BoxLoader>
      <RotatingLines
        strokeColor="coral"
        strokeWidth="5"
        animationDuration="0.9"
        width="150"
        visible={true}
      />
    </BoxLoader>
  );
};