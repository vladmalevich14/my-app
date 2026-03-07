import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country';
import { Currency } from '../../../../Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return true', () => {
        const data = {
            username: 'test',
            lastname: 'testovich',
            first: 'Test',
            age: '132',
            country: Country.Kazakhstan,
            city: 'Kyiv',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
