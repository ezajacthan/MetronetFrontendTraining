import React from "react";
import { useQuery } from "@apollo/client";
import {QUERIES} from '/sandbox/projects/tutorials/react-tutorial/src/models/DogCeoQueries';
import ImageCard from "../ImageCard";
import { CircularProgress } from "@material-ui/core";

export default function RandomDogImage() {
    const {loading, error, data, refetch} = useQuery(QUERIES);

    function handleRefresh():void {
        refetch();
    }

    if(loading) {return <CircularProgress/>}
    return <>
        <ImageCard  caption="Random Dog"
                    src={data.randomDog.message}
                    onClick={handleRefresh} />
    </>
}


