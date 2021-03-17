import { create } from "react-test-renderer"
import Paginator from "./Paginator"

describe('Paginator test', () => {
   test("span's count must be 10", () => {
      const component = create(<Paginator totalUsersCount={11} pageSize={1} trackSize={10} changePage={() => {}} />);
      const instance = component.root;
      const span = instance.findAllByType('span');
      expect(span.length).toBe(10);
   });

   test("button prev must be disabled", () => {
      const component = create(<Paginator totalUsersCount={11} pageSize={1} trackSize={10} changePage={() => {}} />);
      const instance = component.root;
      const button = instance.findAllByType('button');
      expect(button[0].props.disabled).toBe(true);
      expect(button[1].props.disabled).toBe(false);
   });

   test("button next must be disabled after click prev", () => {
      const component = create(<Paginator totalUsersCount={11} pageSize={1} trackSize={10} changePage={() => {}} />);
      const instance = component.root;
      const button = instance.findAllByType('button');
      button[1].props.onClick();
      const span = instance.findAllByType('span');
      expect(span.length).toBe(1);
      expect(button[0].props.disabled).toBe(false);
      expect(button[1].props.disabled).toBe(true);
   });

})