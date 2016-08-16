import {Hero} from './hero';
describe('hero test', () => {

    it( 'here id', () => {
        let x: Hero = { id: 99, name: 'i am hero' };
        expect( x.id ).toEqual( 99 );
    });
});