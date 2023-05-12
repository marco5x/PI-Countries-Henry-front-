import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Country from "../components/Country/Country";

configure({ adapter: new Adapter() });

xdescribe("<Country />", () => {
    describe("Estructura", () => {
        let wrapper;
        let props = {
            id: "ARG",
            name: "Argentina",
            region: "Americas",
            capital: "Buenos Aires",
            image: "https://restcountries.eu/data/arg.svg",
        }
        beforeEach(() => {
            wrapper = shallow(<Country props={props} />);
        });

        it('Renderiza una imagen', () => {
            expect(wrapper.find('img')).toHaveLength(1);
        });
    });
});
