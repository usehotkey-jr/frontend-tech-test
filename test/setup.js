import Enzyme, {mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {polyfill} from "es6-promise";
import "isomorphic-fetch";

polyfill();

Enzyme.configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
