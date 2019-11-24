import reducer, { INITAL_STATE } from '~/store/modules/techs/reducer';
import * as ActionsTechs from '~/store/modules/techs/actions';

describe('Techs reducer', ()=> {

  it('DEFAULT', () => {
    const state = reducer(undefined, {});
    expect(state).toStrictEqual(INITAL_STATE)
  })

  it('ADD_TECH', () => {
    const state = reducer(INITAL_STATE, ActionsTechs.addTech('Node.js'));
    console.log('Meu logo', state);
    expect(state).toStrictEqual(['Node.js'])
  })
})