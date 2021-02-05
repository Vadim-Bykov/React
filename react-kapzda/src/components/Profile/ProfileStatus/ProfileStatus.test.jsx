import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe('ProfileStatus component test', () => {
   test('Status must be in props', () => {
      const component = create(<ProfileStatus status="Test status" />);
      const instance = component.root;
      expect(instance.props.status).toBe("Test status");
   });

   test('Status must be in span', () => {
      const component = create(<ProfileStatus status="Test status" />);
      const instance = component.root;
      const span = instance.findByType('span');
      expect(span.props.children).toBe("Test status");
   });

   test('Input must not be in ProfileStatus', () => {
      const component = create(<ProfileStatus status="Test status" />);
      const instance = component.root;
      expect(() => instance.findByType('input')).toThrow();
   });

   test('Status must be in input after doubleClick', () => {
      const component = create(<ProfileStatus status="Test status" />);
      const instance = component.root;
      const span = instance.findByType('span');
      span.props.onDoubleClick();
      const input = instance.findByType('input');
      expect(input.props.value).toBe("Test status");
   });

   test('Span after doubleClick must be disappeared', () => {
      const component = create(<ProfileStatus status="Test status" />);
      const instance = component.root;
      const span = instance.findByType('span');
      span.props.onDoubleClick();
      expect(() => instance.findByType('span')).toThrow();
   });

   test('Callback', () => {
      const mockCallback = jest.fn();
      const component = create(<ProfileStatus status="Test status" onStatusChange={mockCallback} />);
      const instance = component.root;
      instance.props.onStatusChange();
      expect(mockCallback.mock.calls.length).toBe(1);
   });
   
})