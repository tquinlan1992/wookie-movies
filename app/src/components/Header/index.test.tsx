import { configure, mount } from "enzyme";
import Header from "./";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchContext from "../../searchContext";
import { BrowserRouter as Router } from "react-router-dom";

configure({ adapter: new Adapter() });

test("Header", async () => {
  const onSearch = jest.fn();
  const wrapper = mount(
    <SearchContext.Provider value={{ search: "", setSearch: onSearch }}>
      <Router>
        <Header />
      </Router>
    </SearchContext.Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper
    .find("input")
    .simulate("change", { target: { value: "new search value" } });
  wrapper.find("form").simulate("submit");
  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith("new search value");
});
