import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DancingLlama = () => {
  return (
    <div className='flex justify-center align-center h-48  sm:h-3/5 w-full'>
      <DotLottieReact
        src="/animations/dancing-llama.lottie"
        loop
        autoplay
        style={{ height: '100%', width: 'auto' }} 
      />
    </div>
  );
};

export default DancingLlama;