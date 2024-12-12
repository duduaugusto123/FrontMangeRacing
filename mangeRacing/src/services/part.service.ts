import type { PartsResponse } from "@/models/Parts";
import { getAxios } from "./services.config";

export enum MotoTypes {
    CUSTOM = "MotoTipCustom/1",
    SPORT = "MotoTipSport/2",
    BIG_TRAIL = "MotoTipBigTrail/3",
}



export const getPartsMoto = (type: MotoTypes): Promise<PartsResponse> => 
    {
    console.log(MotoTypes)
    return getAxios().get(`/${type}`);
};
 