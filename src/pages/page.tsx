import Image from 'next/image';

import GamesList from "../app/components/GamesList";
import Footer from "../app/components/Footer";
import RootLayout from '../app/layout';



export const useClient = true;

export default function Home() {
  return (
    <RootLayout>
      <div >
       
        <main >
          <GamesList />
        </main>
     
      </div>
    </RootLayout>
  );
}