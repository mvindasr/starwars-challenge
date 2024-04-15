import { cn } from "~/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export interface Person {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string
}
  
interface Props {
    people: Person[];
}

function PeopleCardList({ people }: Props) {
    return (
        <div className="grid pl-20 md:pl-0 lg:pl-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {people.map((person, index) => (
                <Card key={index} className="bg-white bg-opacity-30 rounded-lg p-4" style={{ maxWidth: '300px' }}>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-blue-300 mb-2">{person.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Birth Year:</span><span className="text-base text-white pl-4">{person.birth_year}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Eye Color:</span><span className="text-base text-white pl-4">{person.eye_color}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Gender:</span><span className="text-base text-white pl-4">{person.gender}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Hair Color:</span><span className="text-base text-white pl-4">{person.hair_color}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Height:</span><span className="text-base text-white pl-4">{person.height}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Mass:</span><span className="text-base text-white pl-4">{person.mass}</span>
                        </CardDescription>
                        <CardDescription className="mb-2 pl-2">
                            <span className="text-base font-semibold text-cyan-200">Skin Color:</span><span className="text-base text-white pl-4">{person.skin_color}</span>
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default PeopleCardList;