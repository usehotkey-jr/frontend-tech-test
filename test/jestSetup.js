import Enzyme, {mount, render, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

require("es6-promise").polyfill();
require("isomorphic-fetch");

Enzyme.configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
