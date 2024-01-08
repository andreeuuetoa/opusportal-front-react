import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface UserData extends IBaseEntity {
    name: string;
    roleName: string;
}
