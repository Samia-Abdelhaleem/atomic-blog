import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export const randomPosts = Array.from({ length: 30 }, () => createRandomPost());
export const archivedPosts = Array.from({ length: 5 }, () =>
  createRandomPost()
);

export function searchPosts(searchText) {
  if (searchText.length) {
    const filteredPosts = randomPosts.filter((post) =>
      `${post.title}  ${post.body}`
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    return filteredPosts;
  } else return randomPosts;
}
