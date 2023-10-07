import { renderPosts } from "../render/render.js";
import { updatePostsSection } from "../posts/updatePostsContainer.js";
import { getRequest } from "../api/get.js";
import { renderUsers } from "../render/render.js";
import { apiUrls } from "../api/constant.js";

const searchForm = document.getElementById("search");
const searchParameter = document.getElementById("searchParameter");

export const search = () => {
  searchForm.addEventListener("input", () => {
    const value = searchForm.children[0].value;
    const parameter = searchParameter.value;

    if (parameter === "Posts") {
      filterPosts(value);
    } else {
      filterUsers(value);
    }
  });
};

const filterPosts = async (value) => {
  const posts = await getRequest(apiUrls.posts_Parameter);
  console.log(posts);
  console.log(value);

  const filteredPosts = posts.filter(({ title }) => {
    const stringifiedTitle = title.toString();
    return stringifiedTitle.toLowerCase().startsWith(value.toLowerCase());
  });
  updatePostsSection();
  renderPosts(filteredPosts);
};

const filterUsers = async (value) => {
  const users = await getRequest(apiUrls.users_Url);

  const filteredUsers = users.filter(({ name }) => {
    const stringifiedName = name.toString();
    return stringifiedName.toLowerCase().startsWith(value.toLowerCase());
  });

  updatePostsSection();
  renderUsers(filteredUsers);
};