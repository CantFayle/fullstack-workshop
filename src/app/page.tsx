import Image from "next/image";
import baby from '../../public/assets/baby2.gif';
import { getServerAuthSession } from '~/server/auth'
import SignInOutButton from "~/app/components/SignInOutButton";

const errorMessages = [
  "Uh oh, wook wike da website had a wittle tumby upset!",
  "Pooey pooey, it went uh-oh and made a stinky bwoken! We gon' have to change its diapey and give it a bawfie to make it aww cwean again!",
  "Who's a grumpy website? You are, you are!",
  "Did da wage box throw a tantrum and go uh-uh no way?\n\nDon't worry, we'll give siwwy baby a pacifier and wock it to sweep sweep.",
  "Looks wike somebody spilled deir ba-ba bottle aww over da server!\n\nWhat a silly biwwy website, making su-such a massy wassy!\n\nTime for a icky poo poo cwean-up on aisle..aww of dem!",
  "Ohnoesies, did da websites's diau-wee not agree with it?\n\nMuddah muddah muddah, what are we going to do?\n\nMaybe some num-nums will make its tuddyache go away!",
  "Someone needs a fwesh nappie!\n\nDa website went pee-pee poo-poo aww over da pwace!",
  "Tsk tsk, whatama baby. After a good spankying, it'll be good as new!",
  "We got some cra-crabby website owah here! Yes baby don't wanna cooperate, do we?\n\nAfter a ni-night of cwuddwies, it'll be aww giggles and smiles."
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignInOutButton authenticated={!!session}/>
      <div>{session?.user?.email ?? 'Not authenticated'}</div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Image src={baby} alt="baby" className="h-80 w-80"/>
        <h1 className="text-3xl text-white text-center">
          {errorMessages[getRandomInt(errorMessages.length - 1)]}
        </h1>
      </div>
    </main>
  );
}
