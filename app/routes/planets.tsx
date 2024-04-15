import { useLoaderData } from "@remix-run/react";
import PlanetsCardList, { Planet } from "~/components/PlanetsCardList";


export default function PlanetsPage() {
    const planets : Planet[] = useLoaderData(); 

    return (
        <div className='planets scroll-smooth'>
            <main className='max-w-[80rem] px-[2rem] mx-auto pb-[2rem] md:pb-[4rem] grid min-h-screen pt-[20%] lg:pt-[12%] '>
                <h1 
                    className='text-white text-center md:text-left barlow-CondensedFont lg:pl-14 
                    tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem]'>
                    <span className='opacity-40 font-black mr-3'>02</span> PLANETS
                </h1>
            </main>
        </div>
    )
}

export async function loader() {
    const response = await fetch('https://swapi.dev/api/planets/');
    if (!response.ok) {
        throw new Error('Failed to fetch data from SWAPI');
    }
    const data = await response.json();
    const planets: Planet[] = data.results; 
    return planets;
}
  
  