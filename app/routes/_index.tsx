import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content" className='homePage'>
      <div className='min-h-screen grid place-items-center px-6 pt-[10%] lg:grid-cols-2 lg:gap-x-[2rem] lg:items-end lg:pb-[6rem] lg:px-28'>
                
                <article className=' w-full text-white text-center lg:text-left'>
                    <h1 className='barlow-CondensedFont tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] 
                    text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] text-gray-text mb-4 md:mb-6'>
                        WELCOME TO THE API CHALLENGE 
                        <span className='mt-4 md:mt-6 bellefairFont text-[3rem] md:text-[6.000rem] text-white block'>
                            STAR WARS</span>
                    </h1>
                    <p className='barlowFont mx-auto lg:mx-0 text-gray-text text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.7rem] max-w-[27.75rem]'>
                        This challenge task participants with creating a homepage dedicated 
                        to all things Star Wars. Using React and Remix, along with the powerful 
                        styling of Tailwind CSS and ShadCN components, contestants will craft 
                        an immersive webpage that connects users with the vast universe of Star Wars. 
                        From character profiles to planet descriptions, this homepage will serve as 
                        a gateway to explore various endpoints of the Star Wars API.
                    </p>
                </article>

                <div className='w-full lg:flex lg:justify-end'>
                    <a  
                        href='https://github.com/mvindasr/starwars-challenge'
                        target='_blank'
                        className='bellefairFont text-center mx-auto lg:mx-0 text-[1.00rem] md:text-[2rem] text-[#0B0D17] tracking-[2.7px] bg-white 
                        h-[9.375rem] w-[9.375rem] md:h-[15.125rem] md:w-[15.125rem] lg:h-[17.125rem] lg:w-[17.125rem] aspect-square
                        rounded-full grid place-items-center hover:shadow-[0_0_0_2rem_rgba(255,255,255,0.15)] 
                        md:hover:shadow-[0_0_0_3rem_rgba(255,255,255,0.15)] lg:hover:shadow-[0_0_0_4rem_rgba(255,255,255,0.15)] 
                        hover:transition-all hover:ease-in-out hover:duration-500 hover:cursor-pointer'
                    >
                        <p>GitHub Code - Milton Vindas</p>

                    </a>
                </div>

            </div>
    </main>
  );
}
