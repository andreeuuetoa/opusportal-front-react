import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface UserData extends IBaseEntity {
    firstName: string;
    lastName: string;
    roleName: string;
}
