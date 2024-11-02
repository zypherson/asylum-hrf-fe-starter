import { useAppContext } from '../../context/AppContext.jsx';

export const Loading = () => {
  const { isLoading } = useAppContext();

  return isLoading ? <div className='bg-black text-6xl absolute top-[50%] left-[50%] text-amber-50'>Loading Data...</div> : <></>;
};
