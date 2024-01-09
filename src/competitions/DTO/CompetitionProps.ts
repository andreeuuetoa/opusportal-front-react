import {FormProps} from "../../common/components/form/FormProps";
import {CompetitionData} from "./CompetitionData";

export interface CompetitionProps extends FormProps {
    values: CompetitionData;
}
