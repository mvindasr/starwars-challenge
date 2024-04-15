import { useLoaderData } from "@remix-run/react";
import PeopleCardList, { Person } from "~/components/PeopleCardList";

export default function PeoplePage() {
    const people : Person[] = useLoaderData(); 
  
    return (
        <div className='people'>
            <main className='max-w-[100rem] px-[2rem] mx-auto grid min-h-screen pt-[20%] lg:pt-[12%] '>
                <h1 
                    className='text-white text-center md:text-left barlow-CondensedFont lg:pl-11
                    tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] pb-8'>
                    <span className='opacity-40 font-black mr-3'>01</span> CHARACTERS
                </h1>
                <PeopleCardList people={people} />
            
            </main>
        </div>
    );
}

export async function loader() {
    const response = await fetch('https://swapi.dev/api/people/');
    if (!response.ok) {
        throw new Error('Failed to fetch data from SWAPI');
    }
    const data = await response.json();
    const people: Person[] = data.results; 
    return people;
}
  
  