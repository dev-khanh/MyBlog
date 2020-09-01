const urlGetBlogger =
  'https://www.googleapis.com/blogger/v3/blogs/8077194271444516169/posts?key=AIzaSyAjk01RKiy_fZ0nGvJmq2kE3bJCavwguDk';
function* getApiBlogUser() {
  const response = yield fetch(urlGetBlogger);
  return yield response.status === 200 ? response.json() : [];
}
export const getApi = {getApiBlogUser};
