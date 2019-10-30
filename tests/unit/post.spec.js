import Vuex from "vuex";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Post from "@/components/Post";

chai.use(sinonChai);

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Post", () => {
  let store;
 
  const actions = {
    DELETE_POST: () => null,
    EDIT_POST: () => null
  };
  let component;
  const mockMethod = sinon.spy();

  beforeEach(() => {
    store = new Vuex.Store({
      actions
    });
    const posts = [{title: 'a', dec: 'a'}];
    component = shallowMount(Post, {
      store,
      localVue,
      propsData: {
        posts: posts
      },
      mocks: {
        $t: () => {}
      }
    });
  });

  describe("can edit post", () => {
    it("clicking 'edit post'", () => {
      component.setMethods({ editPost: mockMethod });
      component.find(".post__btn--edit").trigger("click");
      expect(mockMethod).to.have.been.called;
    });
  });
});
