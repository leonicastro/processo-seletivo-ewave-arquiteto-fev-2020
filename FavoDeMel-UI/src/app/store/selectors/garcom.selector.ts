import { createSelector } from '@ngrx/store';
import { Garcom } from '../../shared/models/garcom';


export const selectGarcom = (state) => state.garcom;
export const selectGarcomId = createSelector(selectGarcom, (state: Garcom) => '8335180a-ec2a-4257-86a6-73c5b1628520');
