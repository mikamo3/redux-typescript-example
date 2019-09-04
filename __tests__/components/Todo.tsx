import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Todo from "../../src/components/Todo";

describe("snapshot", () => {
  it("correct", () => {
    const TodoComponent = renderer.create(
      <Todo completed={true} text="hoge" onPress={() => {}} />
    );
    expect(TodoComponent).toMatchSnapshot();
  });
});

describe("props", () => {
  describe("completedがtrueの場合", () => {
    it('TextのstyleのtextDecorationLineが"line-through"であること', () => {
      const TodoComponent = renderer.create(
        <Todo completed={true} text="hoge" onPress={() => {}} />
      );
      const text = TodoComponent.root.findByType(Text);
      expect(text.props.style).toMatchObject({
        textDecorationLine: "line-through"
      });
    });
  });
  describe("completedがfalseの場合", () => {
    it('TextのstyleのtextDecorationLineが"none"であること', () => {
      const TodoComponent = renderer.create(
        <Todo completed={false} text="hoge" onPress={() => {}} />
      );
      const text = TodoComponent.root.findByType(Text);
      expect(text.props.style).toMatchObject({
        textDecorationLine: "none"
      });
    });
  });
  describe("text", () => {
    it("子要素に指定したtextが存在すること", () => {
      const TodoComponent = renderer.create(
        <Todo completed={false} text="hoge" onPress={() => {}} />
      );
      const text = TodoComponent.root.findByType(Text);
      expect(text.props.children).toEqual("hoge");
    });
  });
});

describe("イベント", () => {
  describe("Textが押下された時", () => {
    it("onPressが呼び出されること", () => {
      const onPress = jest.fn();
      const todoComponent = shallow(
        <Todo completed={false} text="hoge" onPress={onPress} />
      );
      const text = todoComponent.find(Text);
      text.simulate("press");
      expect(onPress.mock.calls).toHaveLength(1);
    });
  });
});
