import { configure, mount } from "enzyme";
import Header from "./";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchContext from "../../searchContext";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { toPaths } from "../../pages/routes/paths";

configure({ adapter: new Adapter() });

test("Header", async () => {
  const onSearch = jest.fn();
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <Header onSearch={onSearch} />
    </Router>
  );
  expect(toJson(wrapper.find("Header"))).toMatchSnapshot();
  wrapper
    .find("input")
    .simulate("change", { target: { value: "new search value" } });
  wrapper.find("form").simulate("submit");
  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith("new search value");
  expect(history.length).toBe(2);
  expect(history.location.pathname).toBe(toPaths.HOME());
});
