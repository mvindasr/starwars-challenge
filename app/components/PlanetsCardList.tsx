import { Scripts } from "@remix-run/react";
import { useState } from "react";


export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    terrain: string;
    population: string;
    gravity: string;
    surface_water: string;
}

interface Props {
    planets: Planet[];
}

function PlanetsCardList({ planets }: Props) {

    /*return (
        //TODO
    );*/
}

export default PlanetsCardList;