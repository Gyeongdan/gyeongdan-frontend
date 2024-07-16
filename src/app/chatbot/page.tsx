import GradientBox from '@/components/GradientBox';

const Page = () => {
  return   <GradientBox
    sx={{ minHeight: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  ></GradientBox>;
}

export default Page;