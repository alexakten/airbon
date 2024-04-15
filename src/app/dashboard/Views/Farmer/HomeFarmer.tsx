import dynamic from 'next/dynamic';

const FarmMap = dynamic(() => import('../../components/ui/FarmMap'), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});

export default function HomeFarmer() {
  return (
    <main className='h-3/4'>
      <FarmMap />
    </main>
  )
}