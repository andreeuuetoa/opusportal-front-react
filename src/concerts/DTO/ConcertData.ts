import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface ConcertData extends IBaseEntity {
    name: string;
    location: string;
    startTime: string;
    competitionId?: string;
}
