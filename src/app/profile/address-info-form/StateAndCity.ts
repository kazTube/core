import {StateDTO} from '../../dto/profile/StateDTO';
import {CityDTO} from '../../dto/profile/CityDTO';

export interface StateAndCity {
    stateList: StateDTO[];
    cityList: CityDTO[];
}
