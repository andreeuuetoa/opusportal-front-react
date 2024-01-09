import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";
import {ConcertData} from "../../concerts/DTO/ConcertData";

export interface CompetitionData extends IBaseEntity {
    name: string;
    rounds: ConcertData[];
}
