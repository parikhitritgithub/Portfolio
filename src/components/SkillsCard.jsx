'use client '
import React from "react";

// import Rating from "@/components/rating";
import { skills } from "@/Data/Skills";
import Rating from "./ui/rating";

export default function SkillsCard() {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {skills.length > 0 ? (
                skills.map((skill,index) => {
                    console.log('index.....',index)
                   if(index<6){
                    return (
                    
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg   bg-background p-2"
                        >
                            <div className="flex h-[230px] flex-col border-red-500 border-2 justify-between rounded-md p-6 sm:h-[230px]">
                                <skill.icon size={50} />
                                <div className="space-y-2">
                                    <h3 className="font-bold">{skill.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {skill.description}
                                    </p>
                                    <Rating stars={skill.rating} />
                                </div>
                            </div>
                        </div>
                    
                   )
                   }
                })
            ) : (
                <p>No skills available</p>
            )}
        </div>
    );
}
